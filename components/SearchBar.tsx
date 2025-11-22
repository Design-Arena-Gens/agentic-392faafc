'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', search);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSearch}
      className="relative w-full max-w-2xl mx-auto"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ابحث عن فتوى..."
        className="w-full px-6 py-4 pr-14 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-lg shadow-sm"
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-primary-600 hover:text-primary-700 transition-colors"
      >
        <FiSearch className="w-6 h-6" />
      </button>
    </motion.form>
  );
}
