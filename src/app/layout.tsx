import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebBuilder | طراحی لندینگ‌پیج‌های حرفه‌ای برای بیزینس کوچ‌ها",
  description: "تبدیل دانش تخصصی شما به یک ویترین دیجیتال سطح جهانی در کمتر از ۴۸ ساعت با قدرت هوش مصنوعی.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
          body {
            font-family: 'Vazirmatn', 'Inter', sans-serif;
          }
        ` }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
