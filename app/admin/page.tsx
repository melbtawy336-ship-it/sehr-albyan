"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [archive, setArchive] = useState<any[]>([]);

  useEffect(() => {
    const savedArchive = localStorage.getItem("sehr_albayan_archive");
    if (savedArchive) setArchive(JSON.parse(savedArchive));
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "Ebt@11##") {
      setIsAdminLoggedIn(true);
      setPasswordInput("");
      setPasswordError("");
    } else {
      setPasswordError("كلمة المرور السرية غير صحيحة! حاول مجدداً.");
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2C251E] py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-6">
          <Link 
            href="/" 
            className="text-xs font-bold text-[#8C2D19] bg-white border border-[#8C2D19]/20 px-4 py-2 rounded-xl shadow-sm hover:bg-[#FAF7F2] transition-all inline-block"
          >
            ⬅️ العودة للرئيسية
          </Link>
        </div>

        {!isAdminLoggedIn ? (
          <div className="bg-white rounded-3xl max-w-md mx-auto p-8 shadow-xl border border-[#8C2D19]/20 space-y-6 text-center">
            <span className="text-4xl block">🔒</span>
            <div className="space-y-1">
              <h2 className="font-amiri text-2xl font-bold text-[#8C2D19]">بوابة الإدارة المحمية</h2>
              <p className="text-xs text-[#5C4D3C]">هذا القسم مخصص فقط للأستاذ محمد البطاوي</p>
            </div>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input 
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="أدخل كلمة المرور السرية..."
                className="w-full text-center bg-[#FAF7F2] border border-[#2C251E]/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C2D19]"
              />
              {passwordError && (
                <p className="text-red-600 text-xs font-bold">{passwordError}</p>
              )}
              <button type="submit" className="w-full bg-[#8C2D19] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#8C2D19]/90 transition-all shadow">
                التحقق والدخول للوحة التحكم 🔑
              </button>
            </form>
          </div>
        ) : (
          <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#8C2D19] shadow-2xl space-y-6">
            <div className="flex flex-wrap justify-between items-center border-b border-[#8C2D19]/20 pb-4 gap-4">
              <div>
                <h3 className="font-amiri text-3xl font-bold text-[#8C2D19]">📂 أرشيف لوحة التحكم وسجلات الطلاب</h3>
                <p className="text-xs text-[#5C4D3C] mt-1">متابعة درجات ورصد تقييم الطلاب المختبرين تلقائياً</p>
              </div>
              <button 
                onClick={() => setIsAdminLoggedIn(false)}
                className="bg-red-50 text-red-700 font-bold px-4 py-2 rounded-xl text-xs hover:bg-red-100 transition-all border border-red-200"
              >
                قفل السجلات الحالية 🔒
              </button>
            </div>

            {archive.length === 0 ? (
              <div className="text-center py-12 text-xs text-[#5C4D3C] italic bg-[#FAF7F2] rounded-2xl border border-dashed border-[#2C251E]/10">
                بانتظار دخول أول طالب لبدء أرشفة النتائج تلقائياً...
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-[#2C251E]/10 bg-white shadow-sm">
                <table className="w-full text-right text-xs">
                  <thead className="bg-[#FAF7F2] text-[#8C2D19] font-bold border-b border-[#2C251E]/10">
                    <tr>
                      <th className="p-4">اسم الطالب الكريم</th>
                      <th className="p-4 text-center">الدرجة المرصودة</th>
                      <th className="p-4 text-center">التقدير والنسبة</th>
                      <th className="p-4 text-left">التاريخ والتوقيت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2C251E]/5">
                    {archive.map((item, index) => (
                      <tr key={index} className="hover:bg-[#FAF7F2]/50 transition-all text-[#2C251E]">
                        <td className="p-4 font-semibold">{item.name}</td>
                        <td className="p-4 text-center font-bold text-[#8C2D19]">{item.score} / {item.total}</td>
                        <td className="p-4 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.score >= 7 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                            {item.score >= 9 ? "ممتاز حُجّة" : item.score >= 7 ? "جيد جداً" : "يحتاج مراجعة"}
                          </span>
                        </td>
                        <td className="p-4 text-left text-[10px] text-[#5C4D3C]">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

      </div>
    </main>
  );
}