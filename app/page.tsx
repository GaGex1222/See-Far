"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Camera, ShieldCheck, Smartphone, Lock, 
  ChevronLeft, Eye, Activity, Menu, 
  Zap, ShieldAlert, Wifi, Cpu
} from 'lucide-react';

export default function RoimRachokFinalV3() {
const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" // כעת TS יזהה את זה כערך תקין
    }
  }
} as const; // ה-as const חיוני למניעת שגיאת ה-string הכללי
  

  return (
    <div className="min-h-screen bg-[#020305] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden" dir="rtl">
      
      {/* --- שכבת רקע --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-slate-800/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* --- ניווט --- */}
      <nav className="fixed top-0 w-full z-[100] bg-[#020305]/80 backdrop-blur-2xl border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                <Eye size={24} className="text-white" />
             </div>
             <span className="text-2xl font-[1000] italic tracking-tighter uppercase">רואים רחוק</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-12 text-[11px] font-black uppercase tracking-widest text-slate-400">
            <a href="#solutions" className="hover:text-orange-500 transition-colors">פתרונות טכנולוגיים</a>
            <a href="#why-us" className="hover:text-orange-500 transition-colors">למה אנחנו?</a>
            <a href="#process" className="hover:text-orange-500 transition-colors">תהליך העבודה</a>
            <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-orange-600 hover:text-white transition-all font-bold uppercase italic tracking-widest">
              ייעוץ אישי
            </button>
          </div>
          <Menu className="lg:hidden text-orange-500" />
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-48 md:pt-64 pb-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-8 text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/5 border border-orange-500/20 text-orange-500 text-xs font-black uppercase tracking-[0.2em] italic">
                <Activity size={14} className="animate-pulse" /> מערכת מבצעית פעילה 2026
              </div>

              <h1 className="text-6xl md:text-[110px] font-[1000] leading-[0.85] italic tracking-tighter uppercase">
                בינה <br />
                <span className="text-transparent italic" style={{ WebkitTextStroke: '1.5px #f97316' }}>מבצעית.</span>
              </h1>

              <p className="max-w-xl text-slate-400 text-xl md:text-2xl font-light italic leading-relaxed">
                אנחנו לא רק מתקינים מצלמות. אנחנו בונים ארכיטקטורת הגנה חכמה שרואה את מה שאחרים מפספסים. פתרונות קצה למגזר היוקרה והעסקים.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="px-12 py-6 bg-orange-600 text-white font-[1000] italic text-2xl rounded-[2rem] shadow-[0_20px_50px_rgba(249,115,22,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-4 group">
                  קבל אפיון שטח חינם
                  <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* רדאר טכנולוגי */}
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="relative w-72 h-72 md:w-[500px] md:h-[500px] border border-white/10 rounded-full flex items-center justify-center"
              >
                <div className="absolute inset-[15%] border border-orange-500/20 rounded-full" />
                <div className="absolute inset-[35%] border border-white/5 rounded-full" />
                
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-500 rounded-full animate-ping" />
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
                
                <div className="p-10 bg-[#050608] border border-white/10 rounded-[3rem] shadow-2xl relative z-10">
                   <ShieldCheck size={80} className="text-orange-500" />
                </div>
              </motion.div>

              <div className="absolute -right-4 top-0 md:top-20 p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl">
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">זמן תגובה</p>
                <p className="text-2xl font-black italic text-orange-500 tracking-tighter">0.4ms</p>
              </div>
              <div className="absolute -left-10 bottom-10 md:bottom-32 p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl">
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">דיוק אנליטיקה</p>
                <p className="text-2xl font-black italic text-white tracking-tighter">99.9%</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY US / FEATURES --- */}
        <section id="why-us" className="py-40 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Cpu />, t: "חומרה צבאית", d: "ציוד קצה עמיד בתנאים קיצוניים בסטנדרט הגבוה ביותר." },
              { icon: <Wifi />, t: "שליטה מלאה", d: "גישה מוצפנת וניהול המערכות מכל מקום בעולם." },
              { icon: <ShieldAlert />, t: "זיהוי מבוסס AI", d: "ניתוח וידאו חכם בזמן אמת למניעת אירועים מראש." },
              { icon: <Zap />, t: "התקנה נקייה", d: "ביצוע מוקפד, ללא כבלים חשופים ובזמינות מיידית." }
            ].map((f, i) => (
              <div key={i} className="space-y-4 p-8 border-r border-white/5 group hover:bg-orange-500/5 transition-all">
                <div className="text-orange-500 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="text-xl font-black italic uppercase">{f.t}</h4>
                <p className="text-slate-500 text-sm italic">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SOLUTIONS GRID --- */}
        <section id="solutions" className="py-40 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl md:text-[120px] font-[1000] italic leading-[0.8] uppercase">חומרת <br /><span className="text-orange-500 italic">קצה.</span></h2>
            <p className="max-w-md text-slate-400 font-bold italic border-r-4 border-orange-500 pr-8 py-2 text-xl leading-relaxed">
              איכות ללא פשרות. כל רכיב נבחר כדי להבטיח אמינות מוחלטת ושקט נפשי לאורך שנים.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Camera />, t: "מצלמות חכמות", d: "רזולוציית 4K, צילום לילה מלא בצבע ואנליטיקה מתקדמת." },
              { icon: <Smartphone />, t: "מערכות אינטרקום", d: "ניהול כניסות מהנייד עם מסכי מגע יוקרתיים ואיכות שמע HD." },
              { icon: <Lock />, t: "בקרת גישה", d: "מנעולים ביומטריים, קודנים חסיני ונדליזם ופתרונות ענן." }
            ].map((item, i) => (
              <motion.div 
                key={i} whileInView="visible" initial="hidden" variants={fadeInUp}
                className="group p-12 rounded-[4rem] border border-white/5 bg-[#08090b] hover:bg-orange-500/[0.03] transition-all relative overflow-hidden"
              >
                <div className="text-orange-500 mb-10 group-hover:scale-110 transition-transform duration-700">{item.icon}</div>
                <h3 className="text-3xl font-black italic mb-6 uppercase tracking-tighter">{item.t}</h3>
                <p className="text-slate-500 text-lg italic leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section id="process" className="py-40 px-6">
          <div className="max-w-5xl mx-auto">
             <div className="text-center space-y-4 mb-24">
                <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase tracking-widest">פרוטוקול עבודה</h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto" />
             </div>

             <div className="space-y-4">
                {[
                  { n: "01", t: "סקירת שטח", d: "ניתוח פיזי של המבנה וזיהוי פרצות אבטחה פוטנציאליות." },
                  { n: "02", t: "תכנון הנדסי", d: "בניית מעטפת הגנה דיגיטלית ותשתיות תקשורת מותאמות אישית." },
                  { n: "03", t: "יישום בשטח", d: "התקנה יסודית על ידי צוות מומחים עם דגש על אסתטיקה ודיוק." },
                  { n: "04", t: "ליווי ומבצעיות", d: "הדרכת משתמש ותמיכה טכנית רציפה להבטחת תקינות המערכת." }
                ].map((step, i) => (
                  <div key={i} className="group flex items-center gap-8 p-10 border border-white/5 rounded-[2.5rem] hover:bg-white/[0.02] transition-all">
                    <span className="text-5xl font-black text-orange-500/20 group-hover:text-orange-500 transition-colors">{step.n}</span>
                    <div>
                       <h4 className="text-2xl font-black italic mb-2 uppercase">{step.t}</h4>
                       <p className="text-slate-500 italic leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="relative pt-40 pb-20 border-t border-white/5 bg-[#010204] px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
          
          <div className="space-y-6 text-center md:text-right">
            <h3 className="text-5xl font-[1000] italic uppercase">תמיד <span className="text-orange-500">מוגן.</span></h3>
            <p className="text-slate-500 max-w-sm italic">רואים רחוק - המומחים שלך לפתרונות תקשורת ואבטחה מתקדמים. זמינות מלאה ושירות ללא תחרות.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start gap-4">
             <p className="text-4xl md:text-6xl font-[1000] italic tracking-tighter" dir="ltr">055-970-5013</p>
             <button className="px-10 py-4 border-2 border-orange-500 text-orange-500 font-black rounded-full hover:bg-orange-600 hover:text-white transition-all uppercase italic text-sm tracking-widest">
                שלחו הודעה עכשיו
             </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row justify-between items-center opacity-30 text-[9px] font-black uppercase tracking-[0.5em]">
          <p>© 2026 ROIM RACHOK SECURITY SOLUTIONS</p>
          <div className="flex gap-10 mt-6 md:mt-0 italic">
            <span>Built by Alsec Marketing</span>
            <span>Security Terminal v3.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}