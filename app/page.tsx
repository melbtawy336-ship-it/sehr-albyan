"use client"; // تأكد أن هذا السطر هو أول سطر تماماً

import React, { useState } from 'react';

export default function HomePage() {
  const phoneNumber = "201123962871";
  
  // تعريف أنواع البيانات للمدخلات (TypeScript)
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    level: 'المرحلة الإعدادية' 
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const grammarians = [
    "أبو الأسود الدؤلي", "نصر بن عاصم الليثي", "يحيى بن يعمر", "عبد الله بن أبي إسحاق الحضرمي",
    "أبو عمرو بن العلاء", "عيسى بن عمر الثقفي", "الخليل بن أحمد الفراهيدي", "سيبويه",
    "الأخفش الأوسط", "المازني", "المبرد", "الزجاج", "ابن السراج", "أبو علي الفارسي",
    "ابن جني", "الزمخشري", "ابن مالك", "أبو حيان الأندلسي", "ابن هشام الأنصاري",
    "خالد الأزهري", "محمد محيي الدين عبد الحميد"
  ];

  // إصلاح الخطأ: إضافة نوع الحدث (React.FormEvent)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const message = `السلام عليكم أستاذ محمد، أرغب في الحجز مع حضرتك.\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالمرحلة: ${formData.level}`;
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#2D241E] selection:bg-[#C5A059] selection:text-white scroll-smooth" dir="rtl">
      
      {/* 1. Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${phoneNumber}`} 
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.499-5.688-1.447l-6.308 1.654zm6.757-3.391l.365.217c1.4.832 3.02 1.272 4.673 1.273 4.881 0 8.854-3.973 8.858-8.854.002-2.363-.92-4.585-2.595-6.26s-3.896-2.597-6.259-2.599c-4.882 0-8.854 3.974-8.858 8.855-.001 1.758.515 3.467 1.488 4.953l.238.365-1.104 4.032 4.194-1.09z"/></svg>
      </a>

      {/* 2. Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6 flex justify-between items-center">
        <div className="font-amiri text-2xl font-bold text-[#C5A059]">سحر البيان</div>
        <div className="hidden md:flex gap-8 font-cairo text-sm font-bold">
          <a href="#" className="hover:text-[#C5A059] transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-[#C5A059] transition-colors">عن المعلم</a>
          <a href="#booking" className="px-4 py-2 bg-[#C5A059] text-white rounded-lg">حجز موعد</a>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto relative">
          <span className="font-amiri text-lg md:text-xl text-[#C5A059] mb-4 block">﷽</span>
          <h1 className="font-amiri text-6xl md:text-8xl font-black mb-6 text-[#1a1a1a]">منصة سحر البيان</h1>
          <p className="font-cairo text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            "نحن لا ندرّس القواعد، بل نغرس في قلب الطالب حُب لغة القرآن"
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#booking" className="px-10 py-4 bg-[#1a1a1a] text-white font-cairo font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all">ابدأ الآن</a>
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section id="about" className="py-20 bg-white border-y border-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="/profile.png" 
              alt="الأستاذ محمد البطاوي" 
              className="relative rounded-[2.5rem] w-full shadow-2xl"
            />
          </div>
          <div className="text-right space-y-6">
            <h2 className="font-amiri text-5xl font-bold text-[#1a1a1a]">الأستاذ محمد البطاوي</h2>
            <div className="h-1.5 w-24 bg-[#C5A059] rounded-full"></div>
            <p className="font-cairo text-gray-600 text-lg leading-[2]">
              خريج <span className="text-[#1a1a1a] font-bold">جامعة الأزهر الشريف</span>، مكرّس جهوده لتبسيط العلوم العربية والشرعية.
            </p>
          </div>
        </div>
      </section>

      {/* 5. سلسلة الذهب */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-amiri text-5xl text-[#C5A059] mb-12">سلسلة الذهب</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {grammarians.map((name, i) => (
              <span key={i} className="px-6 py-2 border border-white/10 rounded-xl font-amiri text-lg hover:border-[#C5A059] hover:text-[#C5A059] transition-all cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Booking Form */}
      <section id="booking" className="py-24 bg-[#fcfcfc]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border-t-[12px] border-[#C5A059]">
            <h2 className="font-amiri text-4xl font-bold text-center mb-8">سجل بياناتك للحجز</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input 
                required 
                type="text" 
                className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#C5A059] outline-none font-cairo" 
                placeholder="اسم الطالب..." 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
              <input 
                required 
                type="tel" 
                className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#C5A059] outline-none font-cairo text-left" 
                placeholder="رقم الهاتف" 
                onChange={(e) => setFormData({...formData, phone: e.target.value})} 
              />
              <select 
                className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#C5A059] outline-none font-cairo"
                onChange={(e) => setFormData({...formData, level: e.target.value})}
              >
                <option>المرحلة الإعدادية</option>
                <option>المرحلة الثانوية</option>
                <option>تحفيظ قرآن كريم</option>
              </select>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-[#C5A059] text-white font-cairo font-black text-xl rounded-2xl shadow-xl hover:bg-[#A68648] transition-all"
              >
                {isSubmitting ? "جاري التحميل..." : "تأكيد طلب الانضمام"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-white text-center border-t border-gray-100">
        <h2 className="font-amiri text-3xl font-bold text-[#C5A059] mb-4">سحر البيان</h2>
        <p className="font-cairo text-gray-400 text-sm italic tracking-widest">© {new Date().getFullYear()} - منصة الأستاذ محمد البطاوي</p>
      </footer>

    </main>
  );
}