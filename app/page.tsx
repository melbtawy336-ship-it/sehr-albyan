"use client";

import React, { useState, useEffect } from 'react';

// هيكل بيانات الأسئلة
const quizQuestions = [
  { q: "ما إعراب كلمة 'العلم' في جملة 'العلمُ نورٌ'؟", options: ["مبتدأ مرفوع", "خبر مرفوع", "فاعل مرفوع", "مفعول به"], correct: 0 },
  { q: "نوع كلمة 'استغفار' من حيث المصدر:", options: ["خماسي", "سداسي", "رباعي", "ثلاثي"], correct: 1 },
  { q: "أي من هذه الأفعال مبني؟", options: ["يكتبُ", "سعى", "يرسمان", "تذهبين"], correct: 1 },
  { q: "ما إعراب الفاعل في 'جاء الحقُّ'؟", options: ["الحقُ", "جاء", "ضمير مستتر", "لا يوجد فاعل"], correct: 0 },
  { q: "نوع المنادى في 'يا طالبًا اجتهد'؟", options: ["مضاف", "شبيه بالمضاف", "نكرة غير مقصودة", "نكرة مقصودة"], correct: 2 },
  { q: "ما علامة جزم الفعل المضارع المعتل الآخر؟", options: ["السكون", "حذف النون", "حذف حرف العلة", "الفتحة"], correct: 2 },
  { q: "الاسم المجرور بعد 'كأنّ' يعرب:", options: ["اسم كأن منصوب", "خبر كأن مرفوع", "مضاف إليه", "فاعل"], correct: 0 },
  { q: "ما نوع 'الواو' في 'خرجتُ والشمسَ طالعةٌ'؟", options: ["واو العطف", "واو المعية", "واو الحال", "واو القسم"], correct: 2 },
  { q: "الاسم الذي يقع بعد 'لولا' يعرب دائماً:", options: ["خبراً", "مبتدأ خبره محذوف", "مضافاً إليه", "مفعولاً به"], correct: 1 },
  { q: "أي من الكلمات الآتية ممنوع من الصرف؟", options: ["كتاب", "مساجد", "قلم", "رجل"], correct: 1 },
];

export default function HomePage() {
  const phoneNumber = "201123962871";
  
  // States للاختبار
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [archive, setArchive] = useState<{name: string, score: number}[]>([]);

  // تحميل الأرشيف من التخزين المحلي
  useEffect(() => {
    const savedResults = localStorage.getItem('sehrAlByanResults');
    if (savedResults) setArchive(JSON.parse(savedResults));
  }, []);

  const handleAnswer = (index: number) => {
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const saveToArchive = () => {
    if (!studentName) return alert("من فضلك اكتب اسمك لحفظ النتيجة");
    const newEntry = { name: studentName, score: (score / 10) * 100 };
    const updatedArchive = [newEntry, ...archive].slice(0, 10); // حفظ آخر 10 نتائج
    setArchive(updatedArchive);
    localStorage.setItem('sehrAlByanResults', JSON.stringify(updatedArchive));
    alert("تم حفظ درجتك في أرشيف المتفوقين");
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#2D241E] selection:bg-[#C5A059] selection:text-white scroll-smooth" dir="rtl">
      
      {/* 1. مقدمة الحديث الشريف */}
      <section className="pt-24 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-amiri text-2xl md:text-3xl text-[#C5A059] leading-relaxed mb-6 border-b border-[#C5A059]/20 pb-6 animate-fade-in">
            قَالَ رَسُولُ اللَّهِ ﷺ: <br className="md:hidden" />
            <span className="font-bold italic">" مَنْ سَلَكَ طريقًا يلتمسُ فِيْهِ علمًا سَهَّلَ اللهُ لهُ بِهِ طريقًا إلىٰ الجنَّةِ "</span>
          </p>
          <h1 className="font-amiri text-7xl md:text-8xl font-black mb-4 text-[#1a1a1a]">سحر البيان</h1>
          <p className="font-cairo text-xl text-gray-500 mb-10">منصة الأستاذ محمد البطاوي لعلوم اللغة والقرآن</p>
        </div>
      </section>

      {/* 2. التعريف بالأستاذ */}
      <section id="about" className="py-16 bg-white shadow-sm border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <img src="/profile.png" alt="الأستاذ محمد البطاوي" className="rounded-[3rem] shadow-2xl w-full max-w-md mx-auto" />
          <div className="text-right">
            <h2 className="font-amiri text-4xl font-bold mb-6 text-[#1a1a1a]">عن المعلم</h2>
            <p className="font-cairo text-xl text-[#C5A059] font-bold mb-4">الأستاذ محمد البطاوي</p>
            <p className="font-cairo text-lg text-gray-600 leading-[2]">
              حاصل على درجة <span className="text-[#1a1a1a] font-bold">الليسانس في التربية قسم اللغة العربية من رحاب جامعة الأزهر الشريف</span>. 
              نعمل على غرس حب اللغة العربية والقرآن الكريم في نفوس أبنائنا بأسلوب تربوي يجمع بين الحداثة والأصالة.
            </p>
          </div>
        </div>
      </section>

      {/* 3. قسم الاختبار التفاعلي */}
      <section className="py-20 px-4 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border-t-8 border-[#C5A059]">
          <h2 className="font-amiri text-4xl text-center mb-8 font-bold text-[#1a1a1a]">اختبر مستواك في النحو</h2>
          
          {!quizStarted ? (
            <div className="text-center">
              <p className="font-cairo mb-8 text-gray-500 text-lg">اختبار مكون من 10 أسئلة لقياس ملكتك اللغوية.</p>
              <button onClick={() => setQuizStarted(true)} className="px-12 py-4 bg-[#1a1a1a] text-white font-bold rounded-2xl hover:bg-[#C5A059] transition-all">ابدأ الاختبار الآن</button>
            </div>
          ) : !showResult ? (
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="font-cairo text-[#C5A059] font-bold">السؤال {currentQuestion + 1} من 10</span>
                <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#C5A059] transition-all" style={{ width: `${(currentQuestion + 1) * 10}%` }}></div>
                </div>
              </div>
              <h3 className="font-cairo text-xl font-bold mb-8">{quizQuestions[currentQuestion].q}</h3>
              <div className="grid gap-4">
                {quizQuestions[currentQuestion].options.map((opt, i) => (
                  <button key={i} onClick={() => handleAnswer(i)} className="p-4 text-right border-2 border-gray-100 rounded-2xl hover:border-[#C5A059] hover:bg-[#C5A059]/5 transition-all font-cairo">
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="font-amiri text-4xl mb-4 text-[#C5A059]">انتهى الاختبار!</h3>
              <p className="font-cairo text-2xl mb-8">درجتك هي: <span className="font-bold text-3xl">{(score/10)*10} من 10</span></p>
              
              <div className="space-y-4 max-w-sm mx-auto">
                <input 
                  type="text" 
                  placeholder="اكتب اسمك لتسجيل النتيجة" 
                  className="w-full p-4 border rounded-2xl text-center outline-none focus:ring-2 ring-[#C5A059]"
                  onChange={(e) => setStudentName(e.target.value)}
                />
                <button onClick={saveToArchive} className="w-full py-4 bg-[#C5A059] text-white font-bold rounded-2xl">حفظ النتيجة في الأرشيف</button>
                <button onClick={() => window.location.reload()} className="w-full py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl">إعادة الاختبار</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. أرشيف نتائج الطلاب (لوحة الشرف) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-amiri text-4xl font-bold text-[#1a1a1a]">لوحة شرف المتفوقين</h2>
            <p className="font-cairo text-gray-400 mt-2">آخر الطلاب الذين اجتازوا الاختبار بنجاح</p>
          </div>
          
          <div className="bg-[#FDFCFB] rounded-[2rem] overflow-hidden border border-gray-100">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-[#1a1a1a] text-[#C5A059] font-cairo">
                  <th className="p-6">اسم الطالب</th>
                  <th className="p-6">الدرجة</th>
                  <th className="p-6">التقدير</th>
                </tr>
              </thead>
              <tbody>
                {archive.length > 0 ? archive.map((entry, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-[#C5A059]/5 transition-colors font-cairo">
                    <td className="p-6 font-bold">{entry.name}</td>
                    <td className="p-6">{entry.score}/100</td>
                    <td className="p-6">
                      <span className={`px-4 py-1 rounded-full text-xs ${entry.score >= 80 ? 'bg-green-100 text-green-700' : 'bg-[#C5A059]/10 text-[#C5A059]'}`}>
                        {entry.score >= 90 ? 'ممتاز' : entry.score >= 70 ? 'جيد جداً' : 'مجتهد'}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={3} className="p-12 text-center text-gray-400 font-cairo">لا توجد نتائج مسجلة حتى الآن.. كن أول المتفوقين!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-gray-100">
        <h3 className="font-amiri text-2xl text-[#C5A059] mb-4">سحر البيان</h3>
        <p className="font-cairo text-sm text-gray-400">تواصل مباشر: {phoneNumber}</p>
      </footer>

    </main>
  );
}