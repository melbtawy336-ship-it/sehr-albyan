import React, { useState } from 'react';

export default function HomePage() {
  const phoneNumber = "201123962871";
  const [formData, setFormData] = useState({ name: '', phone: '', level: 'المرحلة الإعدادية' });

  const grammarians = [
    "أبو الأسود الدؤلي", "نصر بن عاصم الليثي", "يحيى بن يعمر", "عبد الله بن أبي إسحاق الحضرمي",
    "أبو عمرو بن العلاء", "عيسى بن عمر الثقفي", "الخليل بن أحمد الفراهيدي", "سيبويه",
    "الأخفش الأوسط", "المازني", "المبرد", "الزجاج", "ابن السراج", "أبو علي الفارسي",
    "ابن جني", "الزمخشري", "ابن مالك", "أبو حيان الأندلسي", "ابن هشام الأنصاري",
    "خالد الأزهري", "محمد محيي الدين عبد الحميد"
  ];

  const features = [
    { title: "خرائط ذهنية", desc: "تبسيط النحو والصرف من خلال مخططات بصرية تسهل الحفظ والفهم." },
    { title: "متابعة دورية", desc: "تقارير أسبوعية لولي الأمر واختبارات عقب كل محاضرة." },
    { title: "منهج أزهري وعام", desc: "تغطية شاملة لكافة المناهج الدراسية والشهادات." },
    { title: "تحفيظ القرآن", desc: "تحفيظ بأحكام التجويد والترتيل بأسلوب ميسر للصغار والكبار." }
  ];

  const testimonials = [
    { name: "والد الطالب أحمد", text: "تغيّر مستوى ابني تماماً في النحو، وأصبح يحب اللغة العربية بعد أن كانت عبئاً عليه." },
    { name: "طالبة ثانوي", text: "شرح الأستاذ محمد للبلاغة يجعل الصعب سهلاً، المذكرات كافية جداً ولا نحتاج لمصادر أخرى." }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `السلام عليكم أستاذ محمد، أرغب في الحجز مع حضرتك.\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالمرحلة: ${formData.level}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
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

      {/* 2. Simple Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6 flex justify-between items-center">
        <div className="font-amiri text-2xl font-bold text-[#C5A059]">سحر البيان</div>
        <div className="hidden md:flex gap-8 font-cairo text-sm font-bold">
          <a href="#" className="hover:text-[#C5A059] transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-[#C5A059] transition-colors">عن المعلم</a>
          <a href="#features" className="hover:text-[#C5A059] transition-colors">لماذا نحن؟</a>
          <a href="#booking" className="px-4 py-2 bg-[#C5A059] text-white rounded-lg">حجز موعد</a>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto relative">
          <span className="font-amiri text-lg md:text-xl text-[#C5A059] mb-4 block">﷽</span>
          <h1 className="font-amiri text-6xl md:text-8xl font-black mb-6 text-[#1a1a1a]">منصة سحر البيان</h1>
          <p className="font-cairo text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            "نحن لا ندرّس القواعد، بل نغرس في قلب الطالب حُب لغة القرآن"
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#booking" className="px-10 py-4 bg-[#1a1a1a] text-white font-cairo font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all">ابدأ الآن</a>
            <a href="#features" className="px-10 py-4 border-2 border-gray-200 text-gray-600 font-cairo font-bold rounded-2xl hover:bg-gray-50 transition-all">تعرف علينا أكثر</a>
          </div>
        </div>
      </section>

      {/* 4. Features Section (الجديد) */}
      <section id="features" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-8 bg-white border border-gray-50 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 bg-[#C5A059]/10 text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {i + 1}
              </div>
              <h3 className="font-cairo font-bold text-lg mb-2">{f.title}</h3>
              <p className="font-cairo text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. About Section */}
      <section id="about" className="py-20 bg-white border-y border-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-[#C5A059]/5 rounded-[3rem] -rotate-3"></div>
            <img 
              src="/profile.png" 
              alt="الأستاذ محمد البطاوي" 
              className="relative rounded-[2.5rem] w-full shadow-2xl"
            />
          </div>
          <div className="text-right space-y-6 order-1 md:order-2">
            <h2 className="font-amiri text-5xl font-bold text-[#1a1a1a]">الأستاذ محمد البطاوي</h2>
            <div className="h-1.5 w-24 bg-[#C5A059] rounded-full"></div>
            <p className="font-cairo text-gray-600 text-lg leading-[2]">
              خريج <span className="text-[#1a1a1a] font-bold">جامعة الأزهر الشريف</span>، مكرّس جهوده لتبسيط العلوم العربية والشرعية. بفضل الله خرّجنا مئات الطلاب المتفوقين في الشهادات الإعدادية والثانوية (أزهر وعام).
            </p>
            <div className="flex gap-8 pt-4 border-t border-gray-100">
              <div><span className="block text-3xl font-bold text-[#C5A059]">+١٠</span><span className="text-xs text-gray-400 font-cairo">سنوات خبرة</span></div>
              <div><span className="block text-3xl font-bold text-[#C5A059]">+٥٠٠</span><span className="text-xs text-gray-400 font-cairo">طالب مستفيد</span></div>
              <div><span className="block text-3xl font-bold text-[#C5A059]">١٠٠٪</span><span className="text-xs text-gray-400 font-cairo">متابعة دقيقة</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Grammarians Tree (Dark Section) */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-amiri text-5xl text-[#C5A059] mb-4 italic">سلسلة الذهب</h2>
          <p className="font-cairo text-gray-400 mb-16">اعتزازاً بهويتنا وتاريخ علمائنا الأجلاء</p>
          <div className="flex flex-wrap justify-center gap-4">
            {grammarians.map((name, i) => (
              <span key={i} className="px-6 py-2 border border-white/10 rounded-xl font-amiri text-lg hover:border-[#C5A059] hover:text-[#C5A059] transition-all cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials (الجديد) */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <h2 className="font-amiri text-4xl font-bold mb-12 italic">قالوا عن سحر البيان</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 relative italic font-cairo text-gray-600">
               <span className="absolute top-4 right-6 text-6xl text-gray-100 font-serif">"</span>
               <p className="relative z-10">{t.text}</p>
               <div className="mt-6 font-bold text-[#C5A059] text-sm not-italic">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Booking Form */}
      <section id="booking" className="py-24 bg-[#fcfcfc]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border-t-[12px] border-[#C5A059]">
            <h2 className="font-amiri text-4xl font-bold text-center mb-8 italic">ابدأ رحلتك الآن</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="font-cairo text-xs font-bold mr-2 text-gray-400">الاسم بالكامل</label>
                <input required type="text" className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#C5A059] outline-none font-cairo transition-all" placeholder="أدخل اسم الطالب..." onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-1">
                <label className="font-cairo text-xs font-bold mr-2 text-gray-400">رقم الهاتف (واتساب)</label>
                <input required type="tel" className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#C5A059] outline-none font-cairo text-left" placeholder="01xxxxxxxxx" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="space-y-1">
                <label className="font-cairo text-xs font-bold mr-2 text-gray-400">المرحلة</label>
                <select className="w-full p-5 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#C5A059] outline-none font-cairo" onChange={(e) => setFormData({...formData, level: e.target.value})}>
                  <option>المرحلة الإعدادية</option>
                  <option>الصف الأول الثانوي</option>
                  <option>الصف الثاني الثانوي</option>
                  <option>الصف الثالث الثانوي</option>
                  <option>تحفيظ قرآن كريم</option>
                </select>
              </div>
              <button className="w-full py-5 bg-[#C5A059] text-white font-cairo font-black text-xl rounded-2xl shadow-xl hover:bg-[#A68648] hover:shadow-2xl transition-all transform active:scale-95">
                تأكيد طلب الانضمام
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="py-16 bg-white border-t border-gray-100 text-center">
        <h2 className="font-amiri text-3xl font-bold text-[#C5A059] mb-4">سحر البيان</h2>
        <p className="font-cairo text-gray-400 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
          نحن هنا لنصنع جيلاً يعتز بلغتُه ويفهم كتاب ربّه.
        </p>
        <div className="flex justify-center gap-6 text-gray-400 mb-8">
           <span className="font-cairo text-xs italic tracking-widest">{phoneNumber}</span>
        </div>
        <div className="text-[10px] text-gray-300 font-cairo">
          © {new Date().getFullYear()} جميع الحقوق محفوظة - منصة الأستاذ محمد البطاوي
        </div>
      </footer>

    </main>
  );
}