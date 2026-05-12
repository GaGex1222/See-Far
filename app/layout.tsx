import type { Metadata } from "next";
import { Heebo } from "next/font/google"; // ייבוא הפונט מגוגל
import "./globals.css";

// הגדרת הפונט עם המשקלים הנפוצים ותמיכה בעברית
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo", // הגדרת משתנה CSS לשימוש ב-Tailwind
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "האפליקציה שלי",
  description: "נבנה עם Next.js ופונט Heebo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // הגדרת כיוון הכתיבה לימין (rtl) ושפה לעברית (he)
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className={`${heebo.className} min-h-screen bg-white antialiased`}>
        {/* תוכן האתר */}
        <main>{children}</main>
      </body>
    </html>
  );
}