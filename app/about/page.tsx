'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Link from 'next/link';
import { FiInfo, FiTarget, FiAward } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-gray-800">حول التطبيق</span>
          </div>

          <div className="card p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <FiInfo className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">حول التطبيق</h1>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                تطبيق الفتاوى الإسلامية هو منصة موثوقة تهدف إلى تقديم الفتاوى الشرعية الصحيحة
                والمبنية على الكتاب والسنة بفهم سلف الأمة.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <FiTarget className="w-6 h-6 text-primary-600" />
                    <h3 className="text-xl font-bold text-primary-900">رؤيتنا</h3>
                  </div>
                  <p className="text-gray-700">
                    أن نكون المرجع الأول للفتاوى الشرعية الموثوقة في العالم الإسلامي،
                    ونسهل على المسلمين الوصول إلى الأحكام الشرعية الصحيحة.
                  </p>
                </div>

                <div className="bg-primary-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <FiAward className="w-6 h-6 text-primary-600" />
                    <h3 className="text-xl font-bold text-primary-900">رسالتنا</h3>
                  </div>
                  <p className="text-gray-700">
                    نشر العلم الشرعي الصحيح وتقديم الفتاوى المبنية على الأدلة من الكتاب
                    والسنة بطريقة سهلة ومبسطة للجميع.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">مميزات التطبيق</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>✓ فتاوى شرعية موثوقة من علماء معتمدين</li>
                  <li>✓ واجهة سهلة الاستخدام باللغة العربية</li>
                  <li>✓ إمكانية طرح الأسئلة والحصول على الإجابات</li>
                  <li>✓ تصنيف الفتاوى حسب الموضوعات</li>
                  <li>✓ إمكانية حفظ الفتاوى المفضلة</li>
                  <li>✓ مشاركة الفتاوى مع الآخرين</li>
                  <li>✓ إشعارات عند إضافة فتاوى جديدة</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">تواصل معنا</h2>
            <p className="text-gray-600 mb-6">
              لأي استفسارات أو اقتراحات، يمكنكم التواصل معنا عبر:
            </p>
            <div className="space-y-3 text-gray-700">
              <p>📧 البريد الإلكتروني: info@fatawa-app.com</p>
              <p>📱 الهاتف: +966 XX XXX XXXX</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
