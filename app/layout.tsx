import "./globals.css";
import Script from "next/script";
export const metadata = {
  title: {
    default: "سِحْرُ البَيَان | الأستاذ محمد البطاوي",
    template: "%s | سِحْرُ البَيَان"
  },
  description: "تعليم اللغة العربية لجميع المراحل الأزهرية والعامة، وتأسيس النحو والبلاغة والأدب بأحدث الطرق التعليمية مع الأستاذ محمد البطاوي.",
  keywords: ["مدرس لغة عربية", "معلم لغة عربية أزهري", "سحر البيان", "محمد البطاوي", "نحو وبلاغة", "تأسيس لغة عربية"],
  authors: [{ name: "الأستاذ محمد البطاوي" }],
  openGraph: {
    title: "سِحْرُ البَيَان | الأستاذ محمد البطاوي",
    description: "رحلة متميزة في تعلم اللغة العربية بأسلوب مبسط واحترافي لجميع المراحل الدراسية.",
    type: "website",
    locale: "ar_EG",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "سِحْرُ البَيَان",
    "description": "تعليم اللغة العربية لجميع المراحل الأزهرية والعامة",
    "provider": {
      "@type": "Person",
      "name": "الأستاذ محمد البطاوي",
      "jobTitle": "معلم لغة عربية ومحفظ قرآن كريم"
    },
    "telephone": "+201123962871"
  };

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FAF7F2] text-[#2C251E] font-cairo antialiased min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}