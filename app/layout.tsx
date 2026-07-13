import type { Metadata } from "next";
import { Cairo, Amiri } from "next/font/google";
import NextTopLoader from 'nextjs-toploader'; // يجب تثبيت المكتبة: npm install nextjs-toploader
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "منصة سحر البيان | الأستاذ محمد البطاوي",
  description: "المنصة التعليمية الرائدة للأستاذ محمد البطاوي، متخصص في تدريس اللغة العربية والعلوم الشرعية وتأسيس طلاب المراحل الإعدادية والثانوية العامة والأزهرية بأسلوب تربوي حديث.",
  keywords: ["سحر البيان", "محمد البطاوي", "لغة عربية", "علوم شرعية", "ثانوية أزهرية", "نحو", "بلاغة", "تأسيس لغة عربية", "مدرس لغة عربية"],
  authors: [{ name: "الأستاذ محمد البطاوي" }],
  metadataBase: new URL("https://sehr-albyan.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "منصة سحر البيان | الأستاذ محمد البطاوي",
    description: "تأسيس شامل ونواتج تعلم حقيقية في النحو والصرف والبلاغة والعلوم الشرعية للمرحلتين الإعدادية والثانوية.",
    url: "https://sehr-albyan.vercel.app/",
    siteName: "سحر البيان",
    images: [
      {
        url: "/profile.png", // تأكد من وجود صورة للمشاركة في السوشيال ميديا
        width: 1200,
        height: 630,
        alt: "منصة سحر البيان التعليمية",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "منصة سحر البيان | الأستاذ محمد البطاوي",
    description: "تعلم اللغة العربية والعلوم الشرعية مع معلم أزهري متخصص.",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // بيانات السيو المنظمة المتقدمة (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "منصة سحر البيان التعليمية",
    "description": "منصة متخصصة في تدريس اللغة العربية والعلوم الشرعية للمراحل الإعدادية والثانوية.",
    "url": "https://sehr-albyan.vercel.app/",
    "logo": "https://sehr-albyan.vercel.app/profile.png",
    "telephone": "+201123962871",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EG",
      "addressRegion": "Cairo"
    },
    "founder": {
      "@type": "Person",
      "name": "الأستاذ محمد البطاوي",
      "jobTitle": "معلم لغة عربية وعلوم شرعية بالأزهر الشريف",
      "image": "https://sehr-albyan.vercel.app/profile.png",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "جامعة الأزهر الشريف"
      }
    },
    "knowsAbout": ["اللغة العربية", "النحو والصرف", "البلاغة العربية", "العلوم الشرعية الإسلامية", "تحفيظ القرآن الكريم"]
  };

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${cairo.variable} ${amiri.variable} antialiased min-h-screen relative font-sans selection:bg-[#C5A059] selection:text-white`}
      >
        {/* شريط تحميل ذكي في أعلى الصفحة */}
        <NextTopLoader color="#C5A059" showSpinner={false} shadow="0 0 10px #C5A059,0 0 5px #C5A059" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* الطبقة المزخرفة - الخلفية الجمالية */}
        <div className="fixed inset-0 arabic-pattern pointer-events-none opacity-[0.03] z-0" />
        
        <div className="relative z-10">
          {children}
        </div>

        {/* كود الـ CSS المدمج للزخرفة العربية وتعديلات عامة */}
        <style dangerouslySetInnerHTML={{ __html: `
          .arabic-pattern {
            background-image: url("https://www.transparenttextures.com/patterns/islamic-exercise.png");
            background-repeat: repeat;
          }
          /* تحسين شكل السكرول بار */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #C5A059;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #A68648;
          }
        `}} />
      </body>
    </html>
  );
}