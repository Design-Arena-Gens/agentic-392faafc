'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Link from 'next/link';
import { FiShield } from 'react-icons/fi';

export default function PrivacyPage() {
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
            <span className="text-gray-800">سياسة الخصوصية</span>
          </div>

          <div className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <FiShield className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">سياسة الخصوصية</h1>
                <p className="text-gray-600">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">المقدمة</h2>
                <p className="leading-relaxed">
                  نحن في تطبيق الفتاوى الإسلامية نلتزم بحماية خصوصية مستخدمينا. توضح هذه
                  السياسة كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها عند
                  استخدام تطبيقنا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">المعلومات التي نجمعها</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>الاسم (اختياري) عند طرح الأسئلة</li>
                  <li>الأسئلة المطروحة والمحتوى المرفق</li>
                  <li>الفتاوى المحفوظة في المفضلة</li>
                  <li>بيانات الاستخدام والتفاعل مع التطبيق</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">كيفية استخدام المعلومات</h2>
                <p className="mb-3">نستخدم المعلومات المجمعة للأغراض التالية:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>الإجابة على الأسئلة المطروحة</li>
                  <li>تحسين جودة الخدمة المقدمة</li>
                  <li>إرسال إشعارات حول الفتاوى الجديدة</li>
                  <li>تحليل استخدام التطبيق لتطويره</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">حماية المعلومات</h2>
                <p className="leading-relaxed">
                  نتخذ جميع التدابير الأمنية اللازمة لحماية معلوماتك الشخصية من الوصول
                  غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. يتم تخزين جميع البيانات
                  بشكل آمن على خوادم Firebase المشفرة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">مشاركة المعلومات</h2>
                <p className="leading-relaxed">
                  نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في
                  الحالات التالية:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>بموافقتك الصريحة</li>
                  <li>للامتثال للمتطلبات القانونية</li>
                  <li>لحماية حقوقنا وممتلكاتنا</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">حقوق المستخدم</h2>
                <p className="mb-3">لديك الحق في:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>الوصول إلى معلوماتك الشخصية</li>
                  <li>تصحيح المعلومات غير الدقيقة</li>
                  <li>حذف حسابك ومعلوماتك</li>
                  <li>الاعتراض على معالجة بياناتك</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">ملفات تعريف الارتباط</h2>
                <p className="leading-relaxed">
                  نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربة المستخدم وتخزين
                  التفضيلات. يمكنك تعطيل ملفات تعريف الارتباط من إعدادات المتصفح.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">التحديثات على السياسة</h2>
                <p className="leading-relaxed">
                  قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بإعلامك بأي تغييرات
                  جوهرية عبر التطبيق أو البريد الإلكتروني.
                </p>
              </section>

              <section className="bg-primary-50 p-6 rounded-xl mt-8">
                <h2 className="text-2xl font-bold text-primary-900 mb-3">تواصل معنا</h2>
                <p className="text-gray-700 mb-3">
                  إذا كان لديك أي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا:
                </p>
                <p className="text-gray-800 font-semibold">
                  📧 privacy@fatawa-app.com
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
