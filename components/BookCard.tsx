
import React from 'react';
import type { Book } from '../types';
import { DownloadIcon } from './IconComponents';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onSelect }) => {
  return (
    <div
      className="bg-slate-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 ease-in-out group border border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20 cursor-pointer"
      onClick={() => onSelect(book)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(book)}
      role="button"
      tabIndex={0}
      aria-label={`View summary for ${book.title}`}
    >
      <div className="relative">
        <img
          className="w-full h-64 sm:h-80 object-cover"
          src={book.imageUrl}
          alt={`Book cover for ${book.title}`}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
          {book.title}
        </h2>
        <p className="text-md font-medium text-slate-400 italic mt-1">
          by {book.author}
        </p>
        <p className="text-slate-300 mt-4 h-24 overflow-hidden text-ellipsis">
          {book.description}
        </p>
        <a
          href={book.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-6 inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
          // Add disabled class if download link is '#'
          {...(book.downloadUrl === '#' ? { 'aria-disabled': true, className: 'mt-6 inline-flex items-center gap-2 bg-slate-600 text-slate-400 font-semibold py-2 px-6 rounded-lg cursor-not-allowed' } : {})}
        >
          <DownloadIcon />
          <span>{book.downloadUrl === '#' ? 'Unavailable' : 'Download PDF'}</span>
        </a>
      </div>
    </div>
  );
};