import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Target, PenTool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-stone-50 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-10 h-full w-[1px] bg-stone-200 hidden xl:block"></div>
      <div className="absolute top-0 right-10 h-full w-[1px] bg-stone-200 hidden xl:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Image Area - Spans 5 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
                <div className="aspect-[3/4] overflow-hidden bg-stone-200 relative group">
                    <img 
                        src="https://images.unsplash.com/photo-1596245341659-424a1e9447c2?q=80&w=1200&auto=format&fit=crop" 
                        alt="Linoy Eretz Kedosha" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 saturate-[0.85] group-hover:saturate-100"
                    />
                    <div className="absolute inset-0 border-[1px] border-white/20 m-4"></div>
                </div>
            </div>
            {/* "Stamp" or badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-stone-900 text-stone-50 p-6 md:p-8 max-w-[280px] shadow-2xl z-20">
               <span className="block text-4xl font-serif text-bronze-500 mb-2">"</span>
               <p className="font-serif text-lg leading-relaxed italic opacity-90">
                 סינתזה מדויקת בין הנדסה לאומנות, בין פונקציונליות לרגש.
               </p>
            </div>
          </motion.div>

          {/* Text Area - Spans 7 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 pt-8"
          >
            <div className="mb-4 flex items-center gap-3">
                <div className="h-[1px] w-12 bg-bronze-500"></div>
                <span className="text-bronze-600 font-medium uppercase tracking-widest text-sm">הסיפור שלי</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-stone-900 mb-10 leading-tight">
              לינוי ארץ קדושה
            </h2>
            
            <div className="prose prose-lg text-stone-600 font-light mb-16 leading-relaxed max-w-none">
              <p>
                החזון העיצובי שלי הוא שילוב נדיר בין שני כוחות: דיוק טכנולוגי ורגישות אומנותית.
                הרקע שלי ביחידת העלית 81 צייד אותי במשמעת ברזל, ראייה מערכתית ויכולת לנהל פרויקטים מורכבים ללא דופי.
              </p>
              <p>
                אל מול העולם הטכני, הניסיון העשיר שלי באומנות ושזירת פרחים מעניק לי את היכולת להכניס לחלל נשמה, רכות ואיזון ויזואלי מושלם.
                אני מאמינה שעיצוב יוקרה אמיתי נמדד בפרטים הקטנים. אני כאן כדי להפוך את החלל שלכם ליצירה הרמונית שמשלבת פונקציונליות חכמה עם אסתטיקה עוצרת נשימה.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              {/* Feature 1 */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-stone-900">
                    <Target size={24} strokeWidth={1} className="text-bronze-600" />
                    <h4 className="font-serif text-xl font-bold">דיוק ואחריות (81)</h4>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed pl-9">
                  יוצאת היחידה הטכנולוגית המובחרת 81. ניהול פרויקטים מורכבים, ירידה לפרטים הקטנים ביותר ועבודה מול דרגים בכירים בסטנדרט הגבוה ביותר.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-stone-900">
                    <Flower size={24} strokeWidth={1} className="text-bronze-600" />
                    <h4 className="font-serif text-xl font-bold">אסתטיקה וצבע</h4>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed pl-9">
                   ניסיון עשיר בשזירת פרחים ועיצוב אירועים. הבנה עמוקה של קומפוזיציה, צבעים וטקסטורות שיוצרים רגש ואווירה בחלל.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3 text-stone-900">
                    <PenTool size={24} strokeWidth={1} className="text-bronze-600" />
                    <h4 className="font-serif text-xl font-bold">סטודיו 6B</h4>
                </div>
                 <p className="text-stone-500 text-sm leading-relaxed pl-9">
                  בוגרת בהצטיינות של המסלול לעיצוב פנים. שליטה מוחלטת בתוכנות שרטוט והדמיה להמחשה ויזואלית מדויקת ללקוח.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;