'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import FatwaCard from '@/components/FatwaCard';
import Link from 'next/link';
import { use } from 'react';
import { Fatwa } from '@/lib/types';

// Mock data
const mockFatwas: Fatwa[] = [
  {
    id: '1',
    title: 'حكم الصلاة في البيت بدون عذر',
    content: 'السؤال عن حكم صلاة الجماعة في البيت من غير عذر شرعي...',
    category: 'العبادات',
    createdAt: new Date(),
    views: 1250,
  },
  {
    id: '2',
    title: 'حكم قصر الصلاة في السفر',
    content: 'ما هي المسافة المحددة لقصر الصلاة وما حكم الجمع بين الصلاتين...',
    category: 'العبادات',
    createdAt: new Date(Date.now() - 86400000),
    views: 980,
  },
  {
    id: '3',
    title: 'هل يجوز الصلاة بالحذاء',
    content: 'حكم الصلاة بالحذاء في المسجد وما هي الشروط...',
    category: 'العبادات',
    createdAt: new Date(Date.now() - 172800000),
    views: 756,
  },
];

export default function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);
  const decodedName = decodeURIComponent(name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-gray-800">{decodedName}</span>
          </div>

          {/* Category Header */}
          <div className="card p-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {decodedName}
            </h1>
            <p className="text-gray-600 text-lg">
              تصفح جميع الفتاوى المتعلقة بـ{decodedName}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="px-6 py-2 bg-primary-600 text-white rounded-full font-semibold">
              الكل
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-50 border border-gray-200">
              الأكثر قراءة
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-50 border border-gray-200">
              الأحدث
            </button>
          </div>

          {/* Fatwas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockFatwas.map((fatwa, index) => (
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

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              تحميل المزيد من الفتاوى
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
