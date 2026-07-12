import "./globals.css";
import { Cairo, Amiri } from "next/font/google";

// تهيئة الخطوط بالطريقة الرسمية لـ Next.js لضمان أسرع أداء وسيو ممتاز
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata = {
  title: {
    default: "سِحْرُ البَيَان | الأستاذ محمد البطاوي",
    template: "%s | سِحْرُ البَيَان"
  },
  description: "تعليم اللغة العربية لجميع المراحل الأزهرية والعامة، وتأسيس النحو والبلاغة والأدب بأحدث الطرق التعليمية مع الأستاذ محمد البطاوي.",
  keywords: ["مدرس لغة عربية", "معلم لغة عربية أزهري", "سحر البيان", "محمد البطاوي", "نحو وبلاغة", "تأسيس لغة عربية", "شرح الآجرومية", "ألفية ابن مالك"],
  authors: [{ name: "الأستاذ محمد البطاوي" }],
  metadataBase: new URL("https://sehr-albayan.com"), // استبدله برابط موقعك الحقيقي لاحقاً لتفعيل الصور المصغرة
  openGraph: {
    title: "سِحْرُ البَيَان | الأستاذ محمد البطاوي",
    description: "رحلة متميزة في تعلم اللغة العربية بأسلوب مبسط واحترافي لجميع المراحل الدراسية.",
    type: "website",
    locale: "ar_EG",
    images: [
      {
        url: "/profile.png", // الصورة التي ستظهر عند مشاركة رابط الموقع على واتساب أو فيسبوك
        width: 800,
        height: 600,
        alt: "الأستاذ محمد البطاوي - معلم لغة عربية",
      },
    ],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "سِحْرُ البَيَان",
    "description": "تعليم اللغة العربية لجميع المراحل الأزهرية والعامة",
    "url": "https://sehr-albayan.com", // استبدله برابط موقعك الحقيقي
    "image": "https://sehr-albayan.com/profile.png",
    "provider": {
      "@type": "Person",
      "name": "الأستاذ محمد البطاوي",
      "jobTitle": "معلم لغة عربية ومحفظ قرآن كريم",
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "جامعة الأزهر الشريف"
      }
    },
    "telephone": "+201123962871",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EG"
    }
  };

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.variable} ${amiri.variable} bg-[#FAF7F2] text-[#2C251E] font-cairo antialiased min-h-screen relative`}>
        {/* حقن بيانات السيو المنظمة لعناكب بحث جوجل */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}