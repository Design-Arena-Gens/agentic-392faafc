'use client';

import { useState } from 'react';
import { FiMenu, FiBell } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Link from 'next/link';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-primary-50 rounded-lg transition-colors"
          >
            <FiMenu className="w-6 h-6 text-primary-700" />
          </button>

          <Link href="/">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-bold text-primary-700"
            >
              الفتاوى الإسلامية
            </motion.h1>
          </Link>

          <button className="p-2 hover:bg-primary-50 rounded-lg transition-colors relative">
            <FiBell className="w-6 h-6 text-primary-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </header>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
