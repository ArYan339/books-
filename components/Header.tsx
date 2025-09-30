import React from 'react';
import { SearchIcon } from './IconComponents';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="bg-slate-900 py-6 sm:py-8 text-center border-b border-slate-700 shadow-lg shadow-cyan-500/10">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 tracking-tight">
        The Digital Athenaeum
      </h1>
      <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4">
        A curated collection of knowledge to expand your mind and inspire action.
      </p>
      <div className="mt-6 sm:mt-8 max-w-xl mx-auto px-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-300"
            aria-label="Search for books"
          />
        </div>
      </div>
    </header>
  );
};