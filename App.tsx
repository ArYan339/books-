
import React, { useState } from 'react';
import { Header } from './components/Header';
import { BookCard } from './components/BookCard';
import { BOOKS } from './constants';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const filteredBooks = BOOKS.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <main className="container mx-auto px-4 py-12">
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl text-slate-400">No books found.</h2>
            <p className="text-slate-500 mt-2">Try adjusting your search terms.</p>
          </div>
        )}
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Created for the modern reader.</p>
        <p>&copy; {new Date().getFullYear()} Digital Book Library. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;