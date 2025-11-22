'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface CategoryCardProps {
  icon: IconType;
  title: string;
  count: number;
  href: string;
  color: string;
}

export default function CategoryCard({ icon: Icon, title, count, href, color }: CategoryCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="card p-6 cursor-pointer"
      >
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{count} فتوى</p>
      </motion.div>
    </Link>
  );
}
