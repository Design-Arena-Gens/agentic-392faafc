'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiHeart, FiInfo, FiShield } from 'react-icons/fi';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: FiHeart, label: 'المفضلة', href: '/favorites' },
    { icon: FiInfo, label: 'حول التطبيق', href: '/about' },
    { icon: FiShield, label: 'سياسة الخصوصية', href: '/privacy' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-primary-700">القائمة</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 p-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 mb-2 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <item.icon className="w-6 h-6 text-primary-600 group-hover:text-primary-700" />
                  <span className="text-lg font-semibold text-gray-700 group-hover:text-primary-700">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">الفتاوى الإسلامية v1.0</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
