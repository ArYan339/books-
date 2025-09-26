
import React, { useEffect } from 'react';
import type { Book } from '../types';
import { CloseIcon, DownloadIcon } from './IconComponents';

interface BookSummaryModalProps {
  book: Book;
  onClose: () => void;
}

export const BookSummaryModal: React.FC<BookSummaryModalProps> = ({ book, onClose }) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 modal-enter"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-summary-title"
    >
      <div
        className="bg-slate-800 rounded-2xl shadow-2xl shadow-cyan-500/10 w-full max-w-3xl max-h-[90vh] flex flex-col border border-slate-700 modal-content-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-4 sm:p-6 flex justify-between items-center border-b border-slate-700 flex-shrink-0">
          <div>
            <h2 id="book-summary-title" className="text-xl sm:text-2xl font-bold text-cyan-400">
              {book.title}
            </h2>
            <p className="text-sm sm:text-md font-medium text-slate-400 italic">
              by {book.author}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-slate-700"
            aria-label="Close summary"
          >
            <CloseIcon />
          </button>
        </header>
        <main className="p-4 sm:p-6 md:p-8 overflow-y-auto text-slate-300 leading-relaxed">
          <p style={{ whiteSpace: 'pre-wrap' }}>{book.summary}</p>
        </main>
        <footer className="p-4 sm:p-6 border-t border-slate-700 bg-slate-800/50 rounded-b-2xl flex-shrink-0">
          <a
            href={book.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
            {...(book.downloadUrl === '#' ? { 'aria-disabled': true, className: 'inline-flex items-center gap-2 bg-slate-600 text-slate-400 font-semibold py-2 px-6 rounded-lg cursor-not-allowed' } : {})}
          >
            <DownloadIcon />
            <span>{book.downloadUrl === '#' ? 'Unavailable' : 'Download PDF'}</span>
          </a>
        </footer>
      </div>
    </div>
  );
};