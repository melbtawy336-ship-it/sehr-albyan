import type { Metadata } from "next";
import { Cairo, Amiri } from "next/font/google";
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

// إعدادات الـ SEO الفائقة والميتا داتا الكاملة للمنصة
export const metadata: Metadata = {
  title: "منصة سحر البيان | الأستاذ محمد البطاوي لمعلم اللغة العربية والعلوم الشرعية",
  description: "المنصة التعليمية الرائدة للأستاذ محمد البطاوي، متخصص في تدريس اللغة العربية والعلوم الشرعية وتأسيس طلاب المراحل الإعدادية والثانوية العامة والأزهرية بأسلوب تربوي حديث.",
  keywords: ["سحر البيان", "محمد البطاوي", "لغة عربية", "علوم شرعية", "ثانوية أزهرية", "نحو", "بلاغة", "تأسيس لغة عربية"],
  authors: [{ name: "الأستاذ محمد البطاوي" }],
  alternates: {
    canonical: "https://sehr-albyan.vercel.app/",
  },
  openGraph: {
    title: "منصة سحر البيان | الأستاذ محمد البطاوي",
    description: "تأسيس شامل ونواتج تعلم حقيقية في النحو والصرف والبلاغة والعلوم الشرعية للمرحلتين الإعدادية والثانوية.",
    url: "https://sehr-albyan.vercel.app/",
    siteName: "سحر البيان",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "منصة سحر البيان | الأستاذ محمد البطاوي",
    description: "تعلم اللغة العربية والعلوم الشرعية مع معلم أزهري متخصص.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // بيانات السيو المنظمة المتقدمة (JSON-LD Schema) لتوثيق المؤسسة والمعلم لدى جوجل
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "منصة سحر البيان التعليمية",
    "description": "منصة متخصصة في تدريس اللغة العربية والعلوم الشرعية للمراحل الإعدادية والثانوية.",
    "url": "https://sehr-albyan.vercel.app/",
    "logo": "https://sehr-albyan.vercel.app/favicon.ico",
    "founder": {
      "@type": "Person",
      "name": "الأستاذ محمد البطاوي",
      "jobTitle": "معلم لغة عربية وعلوم شرعية بالأزهر الشريف",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "جامعة الأزهر الشريف"
      }
    },
    "knowsAbout": ["اللغة العربية", "النحو والصرف", "البلاغة العربية", "العلوم الشرعية الإسلامية"]
  };

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${cairo.variable} ${amiri.variable} antialiased min-h-screen relative font-sans`}
      >
        {/* حقن السكيمـا الاحترافية لجوجل */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* الطبقة المزخرفة خفيفة الظل الممتدة في الخلفية */}
        <div className="absolute inset-0 arabic-pattern pointer-events-none z-0" />
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}