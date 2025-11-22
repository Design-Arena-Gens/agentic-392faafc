'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import FatwaCard from '@/components/FatwaCard';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';
import { Fatwa } from '@/lib/types';

const mockFavorites: Fatwa[] = [
  {
    id: '1',
    title: 'حكم الصلاة في البيت بدون عذر',
    content: 'السؤال عن حكم صلاة الجماعة في البيت من غير عذر شرعي...',
    category: 'العبادات',
    createdAt: new Date(),
    views: 1250,
  },
];

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-gray-800">المفضلة</span>
          </div>

          <div className="card p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <FiHeart className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">المفضلة</h1>
                <p className="text-gray-600">الفتاوى التي قمت بحفظها</p>
              </div>
            </div>
          </div>

          {mockFavorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFavorites.map((fatwa, index) => (
                <motion.div
                  key={fatwa.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FatwaCard fatwa={fatwa} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="card p-12 text-center">
              <FiHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                لا توجد فتاوى محفوظة
              </h3>
              <p className="text-gray-600 mb-6">
                ابدأ بإضافة فتاوى إلى المفضلة لتسهيل الوصول إليها لاحقاً
              </p>
              <Link href="/">
                <button className="btn-primary">تصفح الفتاوى</button>
              </Link>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
