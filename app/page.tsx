'use client';

import { motion } from 'framer-motion';
import { FiPlusCircle } from 'react-icons/fi';
import {
  FaMosque,
  FaHandHoldingUsd,
  FaUsers,
  FaBookOpen,
  FaHeart,
  FaQuestionCircle
} from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import FatwaCard from '@/components/FatwaCard';
import { Fatwa } from '@/lib/types';

// Mock data
const mockFatwas: Fatwa[] = [
  {
    id: '1',
    title: 'حكم الصلاة في البيت بدون عذر',
    content: 'السؤال عن حكم صلاة الجماعة في البيت من غير عذر شرعي، والأدلة على ذلك...',
    category: 'العبادات',
    createdAt: new Date(),
    views: 1250,
    isNew: true,
  },
  {
    id: '2',
    title: 'زكاة المال المدخر للزواج',
    content: 'هل يجب إخراج الزكاة على المال المدخر للزواج إذا بلغ النصاب وحال عليه الحول...',
    category: 'المعاملات',
    createdAt: new Date(Date.now() - 86400000),
    views: 890,
  },
  {
    id: '3',
    title: 'حكم طاعة الوالدين في ترك الحجاب',
    content: 'ما حكم طاعة الوالدين إذا أمروا بترك الحجاب أو بفعل محرم آخر...',
    category: 'الأسرة',
    createdAt: new Date(Date.now() - 172800000),
    views: 2100,
  },
];

const categories = [
  { icon: FaMosque, title: 'العبادات', count: 342, href: '/category/العبادات', color: 'from-green-500 to-green-600' },
  { icon: FaHandHoldingUsd, title: 'المعاملات', count: 267, href: '/category/المعاملات', color: 'from-blue-500 to-blue-600' },
  { icon: FaUsers, title: 'الأسرة', count: 189, href: '/category/الأسرة', color: 'from-purple-500 to-purple-600' },
  { icon: FaBookOpen, title: 'العقيدة', count: 156, href: '/category/العقيدة', color: 'from-yellow-500 to-yellow-600' },
  { icon: FaHeart, title: 'الأخلاق', count: 134, href: '/category/الأخلاق', color: 'from-pink-500 to-pink-600' },
  { icon: FaQuestionCircle, title: 'فتاوى عامة', count: 421, href: '/category/فتاوى عامة', color: 'from-indigo-500 to-indigo-600' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            احصل على إجابات موثوقة لأسئلتك الشرعية
          </motion.h2>
          <SearchBar />
        </section>

        {/* Ask Question Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <Link href="/ask">
            <button className="btn-primary flex items-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              <FiPlusCircle className="w-6 h-6" />
              اسأل سؤالاً جديداً
            </button>
          </Link>
        </motion.div>

        {/* Categories */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">أقسام الفتاوى</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Most Read */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">الأكثر قراءة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockFatwas
              .sort((a, b) => b.views - a.views)
              .map((fatwa, index) => (
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
        </section>

        {/* New Fatwas */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">فتاوى جديدة</h3>
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
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-700 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">الفتاوى الإسلامية</p>
          <p className="text-primary-100 text-sm">
            جميع الفتاوى مبنية على المصادر الشرعية الموثوقة
          </p>
        </div>
      </footer>
    </div>
  );
}
