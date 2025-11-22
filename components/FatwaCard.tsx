'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiEye, FiClock } from 'react-icons/fi';
import { Fatwa } from '@/lib/types';

interface FatwaCardProps {
  fatwa: Fatwa;
}

export default function FatwaCard({ fatwa }: FatwaCardProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/fatwa/${fatwa.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card p-5 cursor-pointer relative overflow-hidden"
      >
        {fatwa.isNew && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
            جديد
          </span>
        )}

        <div className="flex items-start gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
              {fatwa.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
              {fatwa.content}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FiEye />
              {fatwa.views} مشاهدة
            </span>
            <span className="flex items-center gap-1">
              <FiClock />
              {formatDate(fatwa.createdAt)}
            </span>
          </div>
          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold">
            {fatwa.category}
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
