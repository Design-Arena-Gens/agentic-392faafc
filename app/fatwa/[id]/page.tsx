'use client';

import { motion } from 'framer-motion';
import { FiShare2, FiHeart, FiEye, FiClock } from 'react-icons/fi';
import Header from '@/components/Header';
import Link from 'next/link';
import { use } from 'react';

// Mock data - in real app, fetch from Firebase using the id
const mockFatwa = {
  id: '1',
  title: 'حكم الصلاة في البيت بدون عذر',
  content: `بسم الله الرحمن الرحيم

السؤال: ما حكم الصلاة في البيت من غير عذر شرعي؟

الجواب:

الحمد لله والصلاة والسلام على رسول الله وعلى آله وصحبه أما بعد:

فإن صلاة الجماعة في المسجد واجبة على الرجال القادرين، وقد دلت على ذلك أدلة كثيرة من الكتاب والسنة، منها:

1. قوله تعالى: {وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ} [البقرة: 43]

2. قول النبي صلى الله عليه وسلم: "من سمع النداء فلم يأته فلا صلاة له إلا من عذر" رواه ابن ماجه والدارقطني والحاكم.

3. حديث أبي هريرة رضي الله عنه أن رجلاً أعمى قال: يا رسول الله، ليس لي قائد يقودني إلى المسجد، فسأل رسول الله صلى الله عليه وسلم أن يرخص له فيصلي في بيته، فرخص له، فلما ولى دعاه فقال: "هل تسمع النداء بالصلاة؟" قال: نعم، قال: "فأجب" رواه مسلم.

الخلاصة:
- صلاة الجماعة في المسجد واجبة على الرجال الأصحاء
- من صلى في بيته بغير عذر فقد أثم ولكن صلاته صحيحة
- يجب على المسلم أن يحافظ على صلاة الجماعة في المسجد

والله أعلم.`,
  category: 'العبادات',
  createdAt: new Date(),
  views: 1250,
  scholar: 'الشيخ محمد بن صالح العثيمين',
};

export default function FatwaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: mockFatwa.title,
          text: mockFatwa.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ الرابط!');
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href={`/category/${mockFatwa.category}`} className="hover:text-primary-600">
              {mockFatwa.category}
            </Link>
            <span>/</span>
            <span className="text-gray-800">{mockFatwa.title}</span>
          </div>

          <div className="card p-8">
            {/* Header */}
            <div className="mb-8">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                {mockFatwa.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
                {mockFatwa.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <FiEye className="w-4 h-4" />
                  {mockFatwa.views} مشاهدة
                </span>
                <span className="flex items-center gap-2">
                  <FiClock className="w-4 h-4" />
                  {formatDate(mockFatwa.createdAt)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed text-lg">
                {mockFatwa.content}
              </div>
            </div>

            {/* Scholar Info */}
            {mockFatwa.scholar && (
              <div className="bg-primary-50 border-r-4 border-primary-500 p-6 rounded-lg mb-8">
                <p className="text-primary-900 font-semibold">
                  المُفتي: {mockFatwa.scholar}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button
                onClick={handleShare}
                className="btn-secondary flex items-center gap-2 flex-1 justify-center"
              >
                <FiShare2 />
                مشاركة الفتوى
              </button>
              <button className="btn-primary flex items-center gap-2 flex-1 justify-center">
                <FiHeart />
                إضافة للمفضلة
              </button>
            </div>
          </div>

          {/* Related Fatwas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">فتاوى ذات صلة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <Link key={i} href={`/fatwa/${i + 1}`}>
                  <div className="card p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <h4 className="font-bold text-gray-800 mb-2">
                      حكم قصر الصلاة في السفر
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      ما حكم قصر الصلاة للمسافر وما هي المسافة المحددة للقصر...
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
