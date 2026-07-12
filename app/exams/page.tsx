"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ExamsPage() {
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "study@11##") {
      setIsStudentLoggedIn(true);
      setPasswordInput("");
      setPasswordError("");
    } else {
      setPasswordError("كلمة مرور الاختبارات غير صحيحة! حاول مجدداً.");
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2C251E] py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        {/* زر العودة للرئيسية */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="text-xs font-bold text-[#8C2D19] bg-white border border-[#8C2D19]/20 px-4 py-2 rounded-xl shadow-sm hover:bg-[#FAF7F2] transition-all inline-block"
          >
            ⬅️ العودة للرئيسية
          </Link>
        </div>

        {!isStudentLoggedIn ? (
          /* بوابة الدخول بكلمة السر */
          <div className="bg-white rounded-3xl max-w-md mx-auto p-8 shadow-xl border border-[#8C2D19]/20 space-y-6 text-center">
            <span className="text-4xl block">📝</span>
            <div className="space-y-1">
              <h2 className="font-amiri text-2xl font-bold text-[#8C2D19]">بوابة الاختبارات المحمية</h2>
              <p className="text-xs text-[#5C4D3C]">فضلاً أدخل كلمة المرور المعتمدة لفتح الاختبار</p>
            </div>
            <form onSubmit={handleStudentLogin} className="space-y-4">
              <input 
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="أدخل كلمة مرور الاختبار..."
                className="w-full text-center bg-[#FAF7F2] border border-[#2C251E]/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C2D19]"
              />
              {passwordError && (
                <p className="text-red-600 text-xs font-bold">{passwordError}</p>
              )}
              <button type="submit" className="w-full bg-[#8C2D19] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#8C2D19]/90 transition-all shadow">
                الدخول لقسم الاختبارات 🔓
              </button>
            </form>
          </div>
        ) : (
          /* محتوى صفحة الاختبارات بعد إدخال كلمة السر الصحيحة */
          <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#8C2D19] shadow-2xl space-y-6 text-center">
            <div className="border-b border-[#8C2D19]/20 pb-4">
              <h3 className="font-amiri text-3xl font-bold text-[#8C2D19]">📝 منصة الاختبارات والتقييم</h3>
              <p className="text-xs text-[#5C4D3C] mt-1">أهلاً بك يا طالب العلم، بالتوفيق والنجاح إن شاء الله</p>
            </div>

            {/* هنا يمكنك وضع كود أو أسئلة الاختبار لاحقاً */}
            <div className="py-12 bg-[#FAF7F2] rounded-2xl border border-dashed border-[#2C251E]/10 space-y-4">
              <p className="text-sm font-semibold text-[#2C251E]">الاختبار الحالي متاح وجاهز للبدء</p>
              <p className="text-xs text-[#5C4D3C]">تظهر هنا الأسئلة والتقييمات الخاصة بالطلاب.</p>
            </div>
          </section>
        )}

      </div>
    </main>
  );
}