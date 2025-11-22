'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiSend } from 'react-icons/fi';
import Header from '@/components/Header';
import Link from 'next/link';

export default function AskQuestion() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would implement Firebase storage upload and Firestore document creation
    console.log({ name, question, file });

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setQuestion('');
      setFile(null);
      setSubmitted(false);
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">اسأل سؤالك الشرعي</h1>
            <p className="text-gray-600 mb-8">
              سيتم الرد على سؤالك من قبل علماء موثوقين في أقرب وقت ممكن
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">تم إرسال سؤالك بنجاح!</h3>
                <p className="text-green-600">سنرد عليك في أقرب وقت ممكن</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                    الاسم (اختياري)
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="أدخل اسمك أو اتركه فارغاً للسؤال بشكل مجهول"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="question" className="block text-lg font-semibold text-gray-700 mb-2">
                    السؤال <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="اكتب سؤالك بالتفصيل..."
                    className="input-field min-h-[200px] resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    إرفاق ملف أو صورة (اختياري)
                  </label>
                  <label
                    htmlFor="file"
                    className="flex items-center justify-center gap-3 w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 transition-colors cursor-pointer bg-gray-50 hover:bg-primary-50"
                  >
                    <FiUpload className="w-6 h-6 text-primary-600" />
                    <span className="text-gray-600">
                      {file ? file.name : 'اضغط لاختيار ملف'}
                    </span>
                    <input
                      type="file"
                      id="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf"
                    />
                  </label>
                </div>

                <div className="flex gap-4">
                  <button type="submit" className="btn-primary flex-1 flex items-center justify-center gap-3">
                    <FiSend />
                    إرسال السؤال
                  </button>
                  <Link href="/" className="btn-secondary flex-1 flex items-center justify-center">
                    إلغاء
                  </Link>
                </div>
              </form>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg"
          >
            <h4 className="font-bold text-blue-900 mb-2">ملاحظات هامة:</h4>
            <ul className="text-blue-800 space-y-2 text-sm list-disc list-inside">
              <li>يرجى كتابة السؤال بوضوح ودقة</li>
              <li>تجنب الأسئلة الشخصية أو التي تحتوي على معلومات خاصة</li>
              <li>سيتم الرد على الأسئلة حسب الأولوية</li>
              <li>يمكنك متابعة سؤالك من خلال الإشعارات</li>
            </ul>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
