
import React, { useState } from 'react';
import { Header } from './components/Header';
import { BookCard } from './components/BookCard';
import { BookSummaryModal } from './components/BookSummaryModal';
import { BOOKS } from './constants';
import type { Book } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseSummary = () => {
    setSelectedBook(null);
  };

  const filteredBooks = BOOKS.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onSelect={handleSelectBook} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl text-slate-400">No books found.</h2>
            <p className="text-slate-500 mt-2">Try adjusting your search terms.</p>
          </div>
        )}
      </main>
      
      {selectedBook && (
        <BookSummaryModal book={selectedBook} onClose={handleCloseSummary} />
      )}

      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Created for the modern reader.</p>
        <p>&copy; {new Date().getFullYear()} Digital Book Library. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;