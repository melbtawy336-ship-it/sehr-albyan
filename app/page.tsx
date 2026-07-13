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

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `السلام عليكم أستاذ محمد، أرغب في الحجز مع حضرتك.\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالمرحلة: ${formData.level}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#2D241E] selection:bg-[#C5A059] selection:text-white" dir="rtl">
      
      {/* 1. Header & Hero - البداية بالحديث الشريف */}
      <section className="relative pt-20 pb-16 px-4 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="font-amiri text-xl md:text-2xl text-[#C5A059] border-y border-[#C5A059]/30 py-2 px-6 block italic">
              "مَنْ سَلَكَ طريقًا يلتمسُ فيه علمًا، سَهَّلَ اللهُ له به طريقًا إلى الجنة"
            </span>
          </div>
          
          <h1 className="font-amiri text-7xl md:text-8xl font-black mb-4 text-[#1a1a1a] drop-shadow-sm">
            سحر البيان
          </h1>
          <p className="font-cairo text-xl md:text-2xl text-[#5d5d5d] mb-10 max-w-2xl mx-auto leading-relaxed">
            لتعلم اللغة العربية وحفظ القرآن الكريم مع <span className="text-[#C5A059] font-bold underline underline-offset-8">الأستاذ محمد البطاوي</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#booking" className="px-10 py-4 bg-[#1a1a1a] text-white font-cairo font-bold rounded-2xl shadow-xl hover:scale-105 transition-all">
              احجز مقعدك الآن
            </a>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer" className="px-10 py-4 bg-[#25D366] text-white font-cairo font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-2">
              تواصل واتساب
            </a>
          </div>
        </div>
      </section>

      {/* 2. About Section - السيرة الذاتية مع الصورة */}
      <section className="py-20 bg-white shadow-sm border-y border-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#C5A059]/10 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform"></div>
            <img 
              src="https://i.postimg.cc/mD8zMvM1/Mohamed-Photo.png" 
              alt="الأستاذ محمد البطاوي" 
              className="relative rounded-[2.5rem] w-full object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="text-right space-y-6">
            <h2 className="font-amiri text-4xl font-bold text-[#1a1a1a]">نبذة عن الأستاذ</h2>
            <div className="h-1 w-20 bg-[#C5A059] rounded-full"></div>
            <p className="font-cairo text-[#C5A059] text-xl font-bold">ليسانس التربية – قسم اللغة العربية – جامعة الأزهر الشريف</p>
            <p className="font-cairo text-lg text-gray-600 leading-[1.8]">
              أسعى إلى تعليم اللغة العربية والقرآن الكريم بأسلوب يجمع بين الأصالة والتيسير، مع الاهتمام ببناء الملكة اللغوية وتنمية مهارات الطلاب في النحو والصرف والبلاغة والأدب. نؤمن أن العربية ليست مجرد مادة دراسية، بل هي وعاء الفكر ونور القرآن.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#FDFCFB] border border-gray-100 rounded-2xl">
                <span className="block font-amiri text-2xl text-[#C5A059]">تأسيس لغوي</span>
                <span className="font-cairo text-sm text-gray-500">من الصفر للإتقان</span>
              </div>
              <div className="p-4 bg-[#FDFCFB] border border-gray-100 rounded-2xl">
                <span className="block font-amiri text-2xl text-[#C5A059]">حفظ القرآن</span>
                <span className="font-cairo text-sm text-gray-500">بالتجويد والترتيل</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tree of Grammarians - شجرة علماء النحو */}
      <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-amiri text-5xl font-bold text-[#C5A059] mb-4">شجرة علماء النحو</h2>
            <p className="font-cairo text-gray-400">سلسلة الذهب من واضع الأسس إلى محققي العصر الحديث</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {grammarians.map((name, index) => (
              <div 
                key={index} 
                className="group p-4 border border-[#C5A059]/20 rounded-xl hover:bg-[#C5A059] hover:text-[#1a1a1a] transition-all duration-300 text-center flex flex-col justify-center items-center gap-2 shadow-lg hover:-translate-y-2"
              >
                <span className="font-cairo text-[10px] text-[#C5A059] group-hover:text-white/80">{index + 1}</span>
                <span className="font-amiri text-lg font-medium">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center italic text-[#C5A059]/60 font-cairo">
            "العلمُ صيدٌ والكتابةُ قيدُه.. فقيّد صيودك بالحبالِ الواثقة"
          </div>
        </div>
      </section>

      {/* 4. Booking Section */}
      <section id="booking" className="py-24 px-4 bg-[#FDFCFB]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border-t-[12px] border-[#C5A059] relative">
            <h2 className="font-amiri text-4xl font-bold text-center mb-8">سجل بياناتك للحجز</h2>
            <form onSubmit={handleSubmit} className="space-y-6 text-right">
              <div className="space-y-2">
                <label className="font-cairo font-bold mr-2 text-sm">اسم الطالب (ثلاثياً)</label>
                <input required type="text" className="w-full p-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-[#C5A059] outline-none font-cairo transition-all border-none" placeholder="محمد أحمد علي..." onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="font-cairo font-bold mr-2 text-sm">رقم ولي الأمر (واتساب)</label>
                <input required type="tel" className="w-full p-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-[#C5A059] outline-none font-cairo text-left border-none" placeholder="01xxxxxxxxx" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="font-cairo font-bold mr-2 text-sm">المرحلة الدراسية</label>
                <select className="w-full p-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-[#C5A059] outline-none font-cairo border-none" onChange={(e) => setFormData({...formData, level: e.target.value})}>
                  <option>المرحلة الإعدادية</option>
                  <option>الصف الأول الثانوي</option>
                  <option>الصف الثاني الثانوي</option>
                  <option>الصف الثالث الثانوي</option>
                  <option>تحفيظ قرآن كريم</option>
                </select>
              </div>
              <button className="w-full py-5 bg-[#C5A059] text-white font-cairo font-black text-xl rounded-2xl shadow-xl hover:bg-[#b08e5a] transition-all transform active:scale-95 shadow-[#C5A059]/20">
                إرسال طلب الحجز والتثبيت
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-12 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-amiri text-2xl font-bold mb-4 text-[#C5A059]">سحر البيان</h3>
          <p className="font-cairo text-gray-500 mb-6">علمٌ ينتفعُ به.. وعملٌ خالصٌ لوجه الله</p>
          <p className="font-cairo text-xs text-gray-400">جميع الحقوق محفوظة للأستاذ محمد البطاوي © {new Date().getFullYear()}</p>
        </div>
      </footer>

    </main>
  );
}