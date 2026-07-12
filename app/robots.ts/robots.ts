import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/'], // حجب لوحة التحكم من الظهور في بحث جوجل العام لحماية الأمان
    },
    sitemap: 'https://sehr-albyan.vercel.app/sitemap.xml',
  };
}