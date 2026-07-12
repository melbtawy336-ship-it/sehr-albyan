import React from 'react';

export default function HomePage() {
  // بيانات ثابتة للأرقام القياسية وبناء الثقة
  const stats = [
    { number: "+٥٠٠", label: "طالب مستفيد" },
    { number: "+١٠", label: "سنوات خبرة تعليمية" },
    { number: "١٠٠٪", label: "متابعة وتقييم أسبوعي" },
    { number: "أونلاين", label: "ودروس حضورية" },
  ];

  // بيانات آراء الطلاب وأولياء الأمور
  const testimonials = [
    { name: "أحمد كريم (ثانوية عامة)", text: "شرح مبسط وسهل جداً، وبفضله ارتفعت درجتي في النحو والصرف بعد عقدة طويلة." },
    { name: "ولي أمر الطالب محمد", text: "أفضل معلم لغة عربية تعاملنا معه، أسلوب تربوي راقٍ ومتابعة ممتازة للواجبات أولاً بأول." },
    { name: "سارة محمود (ثانوية أزهرية)", text: "المواد الشرعية والبلاغة أصبحت أسهل مادة بالنسبة لي بفضل المخططات والتلخيصات السحرية." },
  ];

  return (
    <main className="min-h-screen">
      
      {/* 1. قسم البطل الاستقبالي (Hero Section) مع الرسالة التسويقية القوية */}
      <section className="relative pt-24 pb-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto z-10">
        <span className="text-gold font-amiri text-2xl mb-3 font-bold tracking-wide animate-fade-in-up">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
        <h1 className="font-amiri text-6xl md:text-7xl font-bold text-foreground mb-4 drop-shadow-sm animate-fade-in-up">
          منصة سحر البيان
        </h1>
        <h2 className="font-cairo text-xl md:text-2xl text-foreground/90 font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          تعلم اللغة العربية والعلوم الشرعية مع معلم أزهري متخصص
        </h2>
        <p className="font-cairo text-base md:text-lg text-foreground/75 max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          تأسيس متكامل • نحو وصرف • بلاغة وأدب • إعداد شامل ومكثف للمرحلتين الإعدادية والثانوية (الأزهرية والعامة) بأحدث استراتيجيات التعلم النشط.
        </p>

        {/* أزرار الدعوة للإجراء (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#booking" 
            className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-cairo font-bold rounded-xl shadow-lg hover:bg-foreground/90 hover:-translate-y-0.5 transition-all text-center"
          >
            احجز مقعدك الآن
          </a>
          <a 
            href="https://wa.me/201017686851" // تأكد من رقم الواتساب الخاص بك هنا
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-cairo font-bold rounded-xl shadow-lg hover:bg-[#20ba56] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            تواصل عبر واتساب مباشر
          </a>
        </div>
      </section>

      {/* 2. قسم أرقام الثقة والإحصائيات (Trust Section) */}
      <section className="bg-foreground text-background py-12 px-4 shadow-2xl relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-amiri text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</span>
              <span className="font-cairo text-sm md:text-base text-background/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. قسم "من أنا" والرسالة التعليمية (About Section) */}
      <section className="py-20 px-4 max-w-5xl mx-auto relative z-10">
        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gold/20 shadow-xl grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            {/* إطار مخصص لصورة الأستاذ بالزي الأزهري الفاخر */}
            <div className="w-48 h-48 rounded-2xl bg-foreground/5 border-2 border-gold flex items-center justify-center relative overflow-hidden shadow-md">
              <span className="font-cairo text-xs text-foreground/40 text-center px-4">صورة الأستاذ محمد البطاوي بالزي الأزهري</span>
            </div>
          </div>
          <div className="md:col-span-2 text-right">
            <h3 className="font-amiri text-3xl font-bold text-foreground mb-4">الأستاذ محمد البطاوي</h3>
            <p className="font-cairo text-gold font-bold mb-4">خريج جامعة الأزهر الشريف ومعلم العلوم العربية والشرعية</p>
            <p className="font-cairo text-foreground/80 leading-relaxed mb-4">
              نؤمن في منصة "سحر البيان" أن لغة القرآن الكريم ليست مجرد قواعد جافة تُحفظ، بل هي ملكةٌ تُكتسب وتُتذوق. نسعى لتأسيس الطلاب وبناء مهاراتهم الإعرابية والبلاغية من الصفر وحتى التفوق في الامتحانات الوزارية والأزهرية.
            </p>
            <ul className="font-cairo text-sm text-foreground/75 space-y-2">
              <li>✓ خبرة ممتدة في المناهج الدراسية الحديثة ونواتج التعلم.</li>
              <li>✓ خرائط ذهنية مبتكرة لتبسيط أبواب النحو والصرف الملتبسة.</li>
              <li>✓ تدريب مكثف على صياغة الإجابة النموذجية لامتحانات الشهادات.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. قسم آراء وتقييمات الطلاب (Testimonials) */}
      <section className="py-16 bg-foreground/5 px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-amiri text-3xl font-bold text-foreground mb-2">ماذا يقول طلابنا وأولياء أمورهم؟</h3>
          <p className="font-cairo text-sm text-foreground/60 mb-12">آراء حقيقية نعتز بها وتدفعنا دائماً لتقديم الأفضل</p>
          
          <div className="grid md:grid-cols-3 gap-6 text-right">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-background p-6 rounded-2xl shadow-md border border-gold/10 flex flex-col justify-between">
                <div>
                  <div className="text-gold text-lg mb-3">⭐⭐⭐⭐ Ever</div>
                  <p className="font-cairo text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
                </div>
                <span className="font-cairo text-xs font-bold text-foreground/60 block border-t border-foreground/5 pt-3">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. نموذج الحجز الذكي المبدئي (Booking Section) */}
      <section id="booking" className="py-20 px-4 max-w-xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl p-8 border border-gold/20 shadow-2xl">
          <h3 className="font-amiri text-3xl font-bold text-foreground text-center mb-2">سجل بياناتك للحجز</h3>
          <p className="font-cairo text-sm text-foreground/60 text-center mb-8">سيتم التواصل معكم لتحديد موعد الحصة التمهيدية مجاناً</p>
          
          <form className="space-y-4 text-right">
            <div>
              <label className="font-cairo text-sm font-semibold text-foreground/80 block mb-1">اسم الطالب ثلاثياً</label>
              <input type="text" className="w-full p-3 rounded-xl border border-foreground/10 focus:outline-none focus:border-gold font-cairo bg-background text-sm" placeholder="مثال: محمد أحمد علي" required />
            </div>
            <div>
              <label className="font-cairo text-sm font-semibold text-foreground/80 block mb-1">رقم هاتف ولي الأمر (واتساب)</label>
              <input type="tel" className="w-full p-3 rounded-xl border border-foreground/10 focus:outline-none focus:border-gold font-cairo bg-background text-sm text-left" placeholder="01xxxxxxxxx" required />
            </div>
            <div>
              <label className="font-cairo text-sm font-semibold text-foreground/80 block mb-1">المرحلة الدراسية</label>
              <select className="w-full p-3 rounded-xl border border-foreground/10 focus:outline-none focus:border-gold font-cairo bg-background text-sm">
                <option>المرحلة الإعدادية (عام / أزهر)</option>
                <option>الصف الأول الثانوي</option>
                <option>الصف الثاني الثانوي</option>
                <option>الصف الثالث الثانوي (شهادة)</option>
                <option>تأسيس عام (صفوف النقل)</option>
              </select>
            </div>
            <button type="submit" className="w-full py-4 bg-foreground text-background font-cairo font-bold rounded-xl shadow-lg hover:bg-foreground/90 transition-all text-center mt-4">
              إرسال طلب الحجز والتثبيت
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}