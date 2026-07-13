"use client";

import React, { useState, useEffect } from 'react';

// أسئلة الاختبار المخصصة (علامات الإعراب والمعرب والمبني)
const quizQuestions = [
  { q: "الاسم 'هؤلاءِ' يعتبر من الأسماء:", options: ["المعربة", "المبنية"], correct: 1 },
  { q: "علامة رفع جمع المذكر السالم هي:", options: ["الضمة", "الواو", "الألف"], correct: 1 },
  { q: "الفعل المضارع 'يذاكرُ' يعتبر فعلاً:", options: ["معرباً", "مبنياً"], correct: 0 },
  { q: "علامة نصب جمع المؤنث السالم هي:", options: ["الفتحة", "الكسرة", "الياء"], correct: 1 },
  { q: "الفعل الماضي دائماً يكون:", options: ["مبنياً", "معرباً"], correct: 0 },
  { q: "الأسماء الخمسة تُرفع وعلامة رفعها:", options: ["الضمة", "الألف", "الواو"], correct: 2 },
  { q: "كلمة 'الذي' من الأسماء الموصولة وهي:", options: ["معربة", "مبنية"], correct: 1 },
  { q: "علامة رفع المثنى هي:", options: ["الضمة", "الألف", "الواو"], correct: 1 },
  { q: "الضمائر المنفصلة (أنا، هو، أنت) كلها:", options: ["مبنية", "معربة"], correct: 0 },
  { q: "علامة جر الاسم المفرد هي الكسرة، وهو اسم:", options: ["معرب", "مبني"], correct: 0 },
];

export default function HomePage() {
  const phoneNumber = "201123962871";
  
  // States الاختبار
  const [quizStage, setQuizStage] = useState<'name' | 'test' | 'result'>('name'); // مراحل الاختبار
  const [studentFullName, setStudentFullName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [archive, setArchive] = useState<{name: string, score: number, date: string}[]>([]);

  // تحميل الأرشيف عند فتح الصفحة
  useEffect(() => {
    const savedResults = localStorage.getItem('sehrAlByanArchive');
    if (savedResults) setArchive(JSON.parse(savedResults));
  }, []);

  const startTest = () => {
    if (studentFullName.trim().split(" ").length < 3) {
      alert("من فضلك أدخل اسمك الثلاثي للمتابعة");
      return;
    }
    setQuizStage('test');
  };

  const handleAnswer = (index: number) => {
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setQuizStage('result');
    const finalGrade = (score / 10) * 100;
    const newEntry = { 
      name: studentFullName, 
      score: score, 
      date: new Date().toLocaleDateString('ar-EG') 
    };
    const updatedArchive = [newEntry, ...archive].slice(0, 15);
    setArchive(updatedArchive);
    localStorage.setItem('sehrAlByanArchive', JSON.stringify(updatedArchive));
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#2D241E] selection:bg-[#C5A059] selection:text-white scroll-smooth" dir="rtl">
      
      {/* 1. مقدمة الحديث الشريف */}
      <section className="pt-24 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-amiri text-2xl md:text-3xl text-[#C5A059] leading-relaxed mb-6 border-b border-[#C5A059]/20 pb-6">
            قَالَ رَسُولُ اللَّهِ ﷺ: <br />
            <span className="font-bold italic">" مَنْ سَلَكَ طريقًا يلتمسُ فِيْهِ علمًا سَهَّلَ اللهُ لهُ بِهِ طريقًا إلىٰ الجنَّةِ "</span>
          </p>
          <h1 className="font-amiri text-7xl md:text-8xl font-black mb-4 text-[#1a1a1a]">سحر البيان</h1>
          <p className="font-cairo text-xl text-gray-500 mb-10 tracking-widest uppercase">منصة الأستاذ محمد البطاوي</p>
        </div>
      </section>

      {/* 2. التعريف بالأستاذ */}
      <section id="about" className="py-16 bg-white shadow-sm border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#C5A059]/10 rounded-[3rem] rotate-3 transition-transform group-hover:rotate-0"></div>
            <img src="/profile.png" alt="الأستاذ محمد البطاوي" className="relative rounded-[2.5rem] shadow-2xl w-full max-w-sm mx-auto" />
          </div>
          <div className="text-right">
            <h2 className="font-amiri text-4xl font-bold mb-6 text-[#1a1a1a]">عن المعلم</h2>
            <p className="font-cairo text-lg text-gray-600 leading-[2]">
              نتشرف بخدمة لغة القرآن الكريم، معكم <span className="text-[#C5A059] font-bold">الأستاذ محمد البطاوي</span>، 
              حاصل على درجة <span className="text-[#1a1a1a] font-bold underline decoration-[#C5A059]">الليسانس في التربية قسم اللغة العربية من رحاب جامعة الأزهر الشريف</span>. 
              نسعى لتبسيط النحو والصرف وبناء جيل يعتز بهويته اللغوية.
            </p>
          </div>
        </div>
      </section>

      {/* 3. نظام الاختبار التفاعلي */}
      <section id="test" className="py-24 px-4 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border-t-8 border-[#C5A059]">
          <h2 className="font-amiri text-4xl text-center mb-8 font-bold text-[#1a1a1a]">اختبار النحو الدوري</h2>
          
          {quizStage === 'name' && (
            <div className="text-center space-y-6">
              <p className="font-cairo text-gray-500 text-lg italic">يرجى كتابة الاسم الثلاثي لبدء اختبار (المعرب والمبني وعلامات الإعراب)</p>
              <input 
                type="text" 
                placeholder="أدخل اسمك الثلاثي هنا..." 
                className="w-full p-5 border-2 border-gray-50 rounded-2xl text-center outline-none focus:border-[#C5A059] transition-all font-cairo text-xl"
                value={studentFullName}
                onChange={(e) => setStudentFullName(e.target.value)}
              />
              <button 
                onClick={startTest}
                className="w-full py-5 bg-[#1a1a1a] text-white font-bold rounded-2xl hover:bg-[#C5A059] transition-all transform active:scale-95 shadow-xl"
              >
                دخول الاختبار
              </button>
            </div>
          )}

          {quizStage === 'test' && (
            <div>
              <div className="flex justify-between items-center mb-10">
                <span className="font-cairo text-[#C5A059] font-bold">الطالب: {studentFullName}</span>
                <span className="font-cairo text-gray-400">سؤال {currentQuestion + 1} / 10</span>
              </div>
              <h3 className="font-cairo text-2xl font-bold mb-10 text-center leading-relaxed">
                {quizQuestions[currentQuestion].q}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {quizQuestions[currentQuestion].options.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleAnswer(i)}
                    className="p-5 text-center border-2 border-gray-50 rounded-2xl hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all font-cairo text-lg"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {quizStage === 'result' && (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">🏆</div>
              <h3 className="font-amiri text-4xl text-[#C5A059] font-bold">أحسنت يا {studentFullName.split(" ")[0]}!</h3>
              <p className="font-cairo text-2xl">درجتك هي: <span className="text-4xl font-black text-[#1a1a1a]">{score} من 10</span></p>
              <p className="font-cairo text-gray-400">تم تسجيل نتيجتك في أرشيف المنصة بنجاح.</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-10 py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition-all"
              >
                خروج وإعادة
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. أرشيف لوحة الشرف */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-amiri text-5xl font-bold text-[#1a1a1a]">أرشيف المتفوقين</h2>
            <div className="h-1 w-24 bg-[#C5A059] mx-auto mt-4"></div>
          </div>
          
          <div className="overflow-x-auto rounded-[2.5rem] shadow-2xl border border-gray-50">
            <table className="w-full text-right bg-white">
              <thead>
                <tr className="bg-[#1a1a1a] text-[#C5A059] font-cairo">
                  <th className="p-6">اسم الطالب</th>
                  <th className="p-6 text-center">الدرجة</th>
                  <th className="p-6 text-center">التاريخ</th>
                </tr>
              </thead>
              <tbody className="font-cairo">
                {archive.length > 0 ? archive.map((item, index) => (
                  <tr key={index} className="border-b border-gray-50 hover:bg-[#FDFCFB]">
                    <td className="p-6 font-bold">{item.name}</td>
                    <td className="p-6 text-center">
                      <span className={`px-4 py-1 rounded-full ${item.score >= 8 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {item.score} / 10
                      </span>
                    </td>
                    <td className="p-6 text-center text-gray-400 text-sm">{item.date}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={3} className="p-12 text-center text-gray-300 italic">الأرشيف فارغ حالياً.. كن أول من يسجل اسمه!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-gray-100 font-cairo text-gray-400 text-sm">
        جميع الحقوق محفوظة لمنصة سحر البيان © {new Date().getFullYear()} <br />
        الأستاذ محمد البطاوي | {phoneNumber}
      </footer>

    </main>
  );
}