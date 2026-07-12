"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const socialLinks = {
    // تم إصلاح تشفير الرسالة لتظهر بشكل صحيح: (أهلاً أستاذ محمد، أود الاستفسار عن درس اللغة العربية)
    whatsapp: "https://api.whatsapp.com/send?phone=201123962871&text=%D8%A3%D9%87%D2%BB%D8%A7%D9%8B%20%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D9%85%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D9%85%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AF%D8%B1%D8%B3%20%D8%A7%D9%84%D9%84%D8%BA%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9",
    facebook: "https://www.facebook.com/profile.php?id=61573253834343", 
    telegram: "https://t.me/Mohamedelbtawy", 
    tiktok: "https://www.tiktok.com/@ebt24_?_r=1&_t=ZS-97xIUHUwn3c", 
  };

  const avatarUrl = "/profile.png";

  const scientists = [
    { name: "أبو الأسود الدؤلي", title: "واضع اللبنة الأولى للنحو بطلب من الإمام علي", period: "القرن 1 هـ", level: "مرحلة التأسيس والتقعيد", bg: "from-[#8C2D19]/10 to-transparent", border: "border-[#8C2D19]" },
    { name: "الإمام سيبويه", title: "إمام المدرسة البصرية وصاحب (الكتاب) الخالد", period: "القرن 2 هـ", level: "مدرسة البصرة النحوية", bg: "from-[#8C2D19]/10 to-transparent", border: "border-[#8C2D19]" },
    { name: "المبرد", title: "ثعلب النحو وإمام البغداديين وصاحب كتاب المقتضب", period: "القرن 3 هـ", level: "مدرسة الكوفة وبغداد", bg: "from-[#5C4D3C]/10 to-transparent", border: "border-[#5C4D3C]" },
    { name: "أبو علي الفارسي", title: "صاحب الحُجّة والمسائل العسكرية والحلبيات", period: "القرن 4 هـ", level: "مرحلة النضج والاتساع", bg: "from-[#5C4D3C]/10 to-transparent", border: "border-[#5C4D3C]" },
    { name: "ابن جني", title: "عبقري فقه اللغة وصاحب كتاب الخصائص وسر الصناعة", period: "القرن 4 هـ", level: "التعليل والمنطق النحوي", bg: "from-[#5C4D3C]/10 to-transparent", border: "border-[#5C4D3C]" },
    { name: "عبد القاهر الجرجاني", title: "مؤسس علم البلاغة وصاحب دلائل الإعجاز", period: "القرن 5 هـ", level: "الربط البلاغي والبياني", bg: "from-[#5C4D3C]/10 to-transparent", border: "border-[#5C4D3C]" },
    { name: "ابن مالك الجياني", title: "ناظم الألفية الخالدة التي جمعت خلاصة النحو", period: "القرن 7 هـ", level: "المدرسة الأندلسية المتطورة", bg: "from-[#2C251E]/10 to-transparent", border: "border-[#2C251E]" },
    { name: "ابن هشام الأنصاري", title: "صاحب قطر الندى ومغني اللبيب (أنحى من سيبويه)", period: "القرن 8 هـ", level: "المدرسة المصرية والتيسير", bg: "from-[#2C251E]/10 to-transparent", border: "border-[#2C251E]" },
    { name: "ابن عقيل", title: "الشارح الحكيم والمبسط الرائع لألفية ابن مالك", period: "القرن 8 هـ", level: "شروح المتون الكبرى", bg: "from-[#2C251E]/10 to-transparent", border: "border-[#2C251E]" },
    { name: "خالد الأزهري", title: "زين الدين وموضح مسالك الألفية والآجرومية", period: "القرن 9 هـ", level: "المدرسة الأزهرية العريقة", bg: "from-[#2C251E]/10 to-transparent", border: "border-[#2C251E]" },
    { name: "محمد محي الدين بن عبدالحميد", title: "المحقق اللغوي النحرير الذي أحيا التراث النحوي المعاصر", period: "القرن 14 هـ", level: "عصر التحقيق والتجديد الحديث", bg: "from-[#8C2D19]/15 to-transparent", border: "border-[#8C2D19] border-2" }
  ];

  const quizQuestions = [
    { question: "ما هي علامة الرفع الأصلية في الأسماء والأفعال؟", options: ["الضمة", "الألف", "الواو", "ثبوت النون"], correct: 0, explain: "الضمة هي علامة الرفع الأصلية، وما عداها يُعد علامة فرعية نائبة عنها." },
    { question: "كلمة (هؤلاءِ) في جملة 'جاء هؤلاءِ الطلاب'، هل هي معربة أم مبنية؟", options: ["مبنية على الكسر", "معربة بالضمة المقدرة", "مبنية على السكون", "معربة بالألف"], correct: 0, explain: "(هؤلاء) اسم إشارة، وأسماء الإشارة مبنية عدا المثنى منها." },
    { question: "ما هي علامة نصب جمع المؤنث السالم النائبة عن الفتحة？", options: ["الكسرة", "الياء", "حذف النون", "الألف"], correct: 0, explain: "ينفرد جمع المؤنث السالم بنصبه بالكسرة نيابة عن الفتحة." },
    { question: "الفعل الماضي (كَتَبُوا) في جملة 'الطلاب كتبوا دروسهم'، هل هو معرب أم مبني؟", options: ["مبني على الضم", "معرب مرفوع بثبوت النون", "مبني على السكون", "معرب مجزوم بحذف النون"], correct: 0, explain: "يبنى الفعل الماضي على الضم إذا اتصلت به واو الجماعة." },
    { question: "بماذا تُرفع الأسماء الخمسة (أبوك، أخوك...) إذا كانت مضافة؟", options: ["الواو", "بالألف", "بالضمة الظاهرة", "بثبوت النون"], correct: 0, explain: "تُرفع الأسماء الخمسة بالواو نيابة عن الضمة كعلامة إعراب فرعية." },
    { question: "الاسم الموصول (اللذان) في جملة 'حضر اللذان فازا'، هل هو معرب أم مبني؟", options: ["معرب (يُعرب إعراب المثنى)", "مبني على الألف", "مبني على السكون", "معرب بالضمة المقدرة"], correct: 0, explain: "الأسماء الموصولة مبنية كلها ما عدا المثنى منها (اللذان واللتان) فإنهما يعربان إعراب المثنى." },
    { question: "ما هي علامة جزم الفعل المضارع معتل الآخر؟", options: ["حذف حرف العلة", "السكون", "حذف النون", "الكسرة المقدرة"], correct: 0, explain: "يجزم الفعل المضارع معتل الآخر بحذف حرف العلة من آخره." },
    { question: "الفعل المضارع (يَكْتُبْنَ) في جملة 'الطالبات يكتبنَ دروسهنّ'، هل هو معرب أم مبني？", options: ["مبني على السكون", "معرب مرفوع بثبوت النون", "مبني على الفتح", "معرب مرفوع بالضمة"], correct: 0, explain: "يبنى المضارع على السكون إذا اتصلت به نون النسوة." },
    { question: "ما هي علامة جر الاسم الممنوع من الصرف إذا تجرد من (أل) والإضافة؟", options: ["الفتحة", "الكسرة", "الياء", "السكون"], correct: 0, explain: "يُجر الممنوع من الصرف بالفتحة نيابة عن الكسرة." },
    { question: "الحروف كلها في اللغة العربية (مثل: في، لن، إنّ)، هل هي معربة أم مبنية؟", options: ["مبنية كلها ولا محل لها من الإعراب", "معربة حسب موقعها في الجملة", "مبنية ولها محل من الإعراب", "بعضها معرب وبعضها مبني"], correct: 0, explain: "القاعدة المستقرة: الحروف كلها مبنية ولا محل لها من الإعراب." }
  ];

  const [studentName, setStudentName] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showGameReset, setShowGameReset] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim().length >= 3) setIsRegistered(true);
  };

  const handleOptionClick = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    if (optionIndex === quizQuestions[currentQuestionIndex].correct) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // إصلاح مشكلة قراءة الـ State المباشرة لحفظ النتيجة بدقة تامة
      const finalScore = score;
      const newRecord = {
        name: studentName,
        score: finalScore,
        total: quizQuestions.length,
        date: new Date().toLocaleDateString("ar-EG", { hour: "2-digit", minute: "2-digit" })
      };
      
      const savedArchive = localStorage.getItem("sehr_albayan_archive");
      const currentArchive = savedArchive ? JSON.parse(savedArchive) : [];
      const updatedArchive = [newRecord, ...currentArchive];
      localStorage.setItem("sehr_albayan_archive", JSON.stringify(updatedArchive));
      
      setShowGameReset(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowGameReset(false);
    setIsRegistered(false);
    setStudentName("");
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2C251E] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      
      {/* زر ينقل لصفحة الإدارة المنفصلة */}
      <div className="fixed top-4 right-4 z-40">
        <Link 
          href="/admin"
          className="bg-[#8C2D19] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg hover:bg-[#8C2D19]/90 transition-all flex items-center gap-1.5 border border-white/20"
        >
          🔒 صفحة الإدارة
        </Link>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative">
        
        <header className="text-center space-y-4">
          <div className="relative w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-[#8C2D19] shadow-xl bg-white transition-transform hover:scale-105 duration-300">
            <img src={avatarUrl} alt="الأستاذ محمد البطاوي" className="object-cover w-full h-full" />
          </div>
          <div className="space-y-2">
            <h1 className="font-amiri text-6xl sm:text-7xl font-bold text-[#8C2D19] drop-shadow-md">سِحْرُ البَيَان</h1>
            <p className="text-2xl font-bold tracking-wide text-[#5C4D3C]">الأستاذ محمد البطاوي</p>
            <p className="text-xs text-[#8C2D19]/80 font-bold bg-[#8C2D19]/5 inline-block px-4 py-1.5 rounded-full border border-[#8C2D19]/10">
              ليسانس التربية قسم اللغة العربية - جامعة الأزهر الشريف
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur border-r-4 border-[#8C2D19] rounded-xl p-4 text-sm italic text-[#8C2D19] shadow-sm font-medium">
             "مَنْ سَلَكَ طريقًا يلتمسُ فِيْهِ علمًا سَهَّلَ اللهُ لهُ بِهِ طريقًا إلىٰ الجنَّةِ" ﷺ
          </div>
        </header>

        <section className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-[#2C251E]/10 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-3 h-full bg-[#8C2D19]" />
          <div className="flex items-center gap-3 border-b border-[#8C2D19]/10 pb-4">
            <span className="text-2xl">✒️</span>
            <h2 className="font-amiri text-3xl font-bold text-[#8C2D19]">السيرة الذاتية والرسالة التربوية</h2>
          </div>
          <div className="text-md leading-relaxed text-[#2C251E] font-medium space-y-4">
            <p className="font-amiri text-xl text-[#5C4D3C]">
              من رحاب <strong className="text-[#8C2D19]">جامعة الأزهر الشريف</strong>، انطلقت مسيرتنا لخدمة لغة الضاد وحفظ لسان الأمة. نؤمن بأن النحو ليس قواعد جافة، بل هو أداة فهم كتاب الله وتذوق أسرار البيان.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#2C251E]/5">
                <span className="text-[#8C2D19] font-bold block mb-1">🎯 غايتنا الأصيلة:</span>
                تأسيس اللسان في ضبط حروف المباني وإيضاح علوم النحو والبلاغة بالمتون والتحقيقات المعتمدة.
              </div>
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#2C251E]/5">
                <span className="text-[#8C2D19] font-bold block mb-1">📖 تحفيظ القرآن الكريم:</span>
                ربط دراسة القواعد بالتطبيق المباشر ترتيلاً وتجويداً لآيات التنزيل الحكيم.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-[#2C251E]/10 shadow-xl space-y-6 relative">
          <div className="absolute top-0 right-0 w-3 h-full bg-[#5C4D3C]" />
          <div className="flex items-center gap-3 border-b border-[#8C2D19]/10 pb-4">
            <span className="text-2xl">🎯</span>
            <h2 className="font-amiri text-3xl font-bold text-[#8C2D19]">منهجي المتكامل في تدريس علوم العربية</h2>
          </div>
          <p className="text-xs text-[#5C4D3C] -mt-2">خارطة طريق مدروسة لتأسيس الملكة النحوية عبر المتون والتحقيقات الرصينة:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-gradient-to-b from-[#FAF7F2] to-white p-6 rounded-2xl border-t-4 border-[#8C2D19] shadow-sm relative group hover:shadow-md transition-all">
              <span className="absolute left-4 top-4 text-3xl font-extrabold text-[#8C2D19]/10">01</span>
              <h3 className="font-bold text-lg text-[#8C2D19] mb-2 font-amiri">المقدمة الآجرومية</h3>
              <p className="text-xs text-[#5C4D3C] leading-relaxed">
                مرحلة **ضبط حروف المباني** ومعرفة علامات الإعراب الأساسية والفرعية، والتمييز الواضح بين المعرب والمبني في الأسماء والأفعال.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#FAF7F2] to-white p-6 rounded-2xl border-t-4 border-[#5C4D3C] shadow-sm relative group hover:shadow-md transition-all">
              <span className="absolute left-4 top-4 text-3xl font-extrabold text-[#5C4D3C]/10">02</span>
              <h3 className="font-bold text-lg text-[#5C4D3C] mb-2 font-amiri">قطر الندى وبل الصدى</h3>
              <p className="text-xs text-[#5C4D3C] leading-relaxed">
                الانتقال لمتن الإمام **ابن هشام الأنصاري**، وتوسيع المدارك الإعرابية، وربط القواعد بالشواهد القرآنية والأشعار العربية الفصيحة.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#FAF7F2] to-white p-6 rounded-2xl border-t-4 border-[#2C251E] shadow-sm relative group hover:shadow-md transition-all">
              <span className="absolute left-4 top-4 text-3xl font-extrabold text-[#2C251E]/10">03</span>
              <h3 className="font-bold text-lg text-[#2C251E] mb-2 font-amiri">ألفية ابن مالك بشروحها</h3>
              <p className="text-xs text-[#5C4D3C] leading-relaxed">
                دراسة الألفية بشرح **ابن هشام** و**ابن عقيل**، القائمة على تحقيق العلامة **محمد محي الدين بن عبدالحميد** لبناء ملكة تفكير نحوي مستقل.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-[#2C251E]/10 shadow-xl space-y-6 relative">
          <div className="absolute top-0 right-0 w-3 h-full bg-[#8C2D19]" />
          <div className="flex items-center gap-3 border-b border-[#8C2D19]/10 pb-4">
            <span className="text-2xl">📈</span>
            <h2 className="font-amiri text-3xl font-bold text-[#8C2D19]">مخطط التدرج الزمني لأئمة علوم النحو</h2>
          </div>
          <p className="text-xs text-[#5C4D3C] -mt-2">مخطط هيكلي صاعد بالتدريج يوضح تسلسل المدارس النحوية وتطور التأصيل اللغوي عبر العصور الإسلامية حتى العصر الحديث:</p>
          
          <div className="space-y-4 pt-4 relative before:absolute before:right-6 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#8C2D19]/20">
            {scientists.map((sc, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 bg-gradient-to-r ${sc.bg} p-4 rounded-2xl border-r-4 ${sc.border} shadow-sm hover:shadow-md transition-all duration-300 relative group`}
                style={{ marginRight: `${index * 8}px` }}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#2C251E]/10 flex flex-col items-center justify-center font-bold text-xs shadow-inner shrink-0">
                  <span className="text-[#8C2D19]">#{index + 1}</span>
                  <span className="text-[9px] text-[#5C4D3C]">{sc.period}</span>
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-bold text-sm md:text-base text-[#2C251E] font-amiri">{sc.name}</h4>
                    <span className="text-[10px] bg-white text-[#2C251E] border border-[#2C251E]/10 px-2 py-0.5 rounded-md font-bold">
                      {sc.level}
                    </span>
                  </div>
                  <p className="text-xs text-[#5C4D3C] font-medium leading-relaxed">{sc.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border-2 border-[#8C2D19]/20 shadow-xl space-y-6 relative overflow-hidden">
          {!isRegistered && !showGameReset && (
            <div className="space-y-6 text-center py-6">
              <div className="space-y-2">
                <span className="bg-[#8C2D19] text-white text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full">بوابة الاختبارات التفاعلية 🖋️</span>
                <h3 className="font-amiri text-3xl font-bold text-[#8C2D19]">تحدي الإعراب والبناء وعلامات المكلفين</h3>
                <p className="text-xs text-[#5C4D3C]">اكتب اسمك الكريم للبدء في اختبار قياس الملكة النحوية (١٠ أسئلة)</p>
              </div>
              <form onSubmit={handleRegisterSubmit} className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="اكتب اسمك الثلاثي هنا..."
                  className="w-full text-center bg-white border border-[#2C251E]/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C2D19]"
                />
                <button type="submit" className="w-full bg-[#8C2D19] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#8C2D19]/90 transition-all shadow-sm">
                  دخول التحدي وانطلاق الاختبار 🚀
                </button>
              </form>
            </div>
          )}

          {isRegistered && !showGameReset && (
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-[#FAF7F2] p-3 rounded-xl border text-xs">
                <span className="font-bold text-[#8C2D19]">👤 الطالب: {studentName}</span>
                <span className="text-[#5C4D3C] font-semibold">السؤال {currentQuestionIndex + 1} من ١٠</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#8C2D19]/10 text-center shadow-sm">
                <p className="font-amiri text-lg font-bold text-[#2C251E] leading-relaxed">
                  {quizQuestions[currentQuestionIndex].question}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quizQuestions[currentQuestionIndex].options.map((option, idx) => {
                  let buttonStyle = "bg-white hover:bg-[#FAF7F2] text-[#2C251E] border-[#2C251E]/10";
                  if (isAnswered) {
                    if (idx === quizQuestions[currentQuestionIndex].correct) {
                      buttonStyle = "bg-green-500 text-white border-green-600 font-bold shadow-sm";
                    } else if (selectedOption === idx) {
                      buttonStyle = "bg-red-500 text-white border-red-600 opacity-90";
                    } else {
                      buttonStyle = "bg-white text-[#2C251E]/40 border-[#2C251E]/5 pointer-events-none";
                    }
                  }
                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(idx)}
                      disabled={isAnswered}
                      className={`w-full text-right p-4 rounded-xl border text-sm font-medium transition-all ${buttonStyle}`}
                    >
                      <span className="inline-block w-5 h-5 rounded-full bg-[#FAF7F2] text-[#8C2D19] text-center ml-2 font-bold text-xs">{idx + 1}</span>
                      {option}
                    </button>
                  );
                })}
              </div>
              {isAnswered && (
                <div className="bg-white p-4 rounded-xl border-r-4 border-[#8C2D19] space-y-2 text-xs">
                  <p className="font-bold text-[#8C2D19]">💡 البيان والشاهد النحوي:</p>
                  <p className="text-[#5C4D3C] leading-relaxed">{quizQuestions[currentQuestionIndex].explain}</p>
                  <button onClick={handleNextQuestion} className="mt-2 bg-[#8C2D19] text-white px-4 py-2 rounded-lg font-bold text-xs block mr-auto">
                    {currentQuestionIndex + 1 === quizQuestions.length ? "إرسال ورقة الإجابة" : "السؤال التالي ⬅️"}
                  </button>
                </div>
              )}
            </div>
          )}

          {showGameReset && (
            <div className="text-center p-6 bg-[#FAF7F2] rounded-2xl border border-[#8C2D19]/10 space-y-4">
              <span className="text-4xl">🎉</span>
              <h4 className="font-amiri text-2xl font-bold text-[#8C2D19]">تم تسليم ورقة الإجابة!</h4>
              <p className="text-sm text-[#2C251E]">بارك الله فيك يا <span className="font-bold text-[#8C2D19]">{studentName}</span>، درجتك هي <strong className="text-xl text-[#8C2D19]">{score}</strong> من أصل ١٠ درجات.</p>
              <button onClick={resetGame} className="bg-[#8C2D19] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#8C2D19]/90 transition-all shadow-md">عودة للرئيسية 🔄</button>
            </div>
          )}
        </section>

        <footer className="text-center space-y-6 pt-6">
          <div className="space-y-2">
            <p className="text-lg font-bold text-[#2C251E]">للحجز والاستعلام المباشر مع الأستاذ:</p>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-[#8C2D19] hover:underline direction-ltr inline-block">01123962871</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow">واتساب مباشر</a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow">فيسبوك</a>
            <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="bg-[#0088cc] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow">تليجرام</a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="bg-[#000000] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow">تيك توك</a>
          </div>
        </footer>

      </div>
    </main>
  );
}