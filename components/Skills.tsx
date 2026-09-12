import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Box, LayoutTemplate, PenTool, CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-stone-500 font-medium uppercase tracking-widest text-sm mb-4 block">ארגז הכלים שלי</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 mb-6">טכנולוגיה פוגשת עיצוב</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              השליטה בתוכנות המתקדמות ביותר מאפשרת לי להעניק ללקוח ביטחון מלא.
              לראות את התוצאה הסופית עוד לפני תחילת השיפוץ, ולדעת שכל סנטימטר מתוכנן בקפידה.
            </p>
          </motion.div>
        </div>

        {/* Featured Software Skills - Elegant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AutoCAD */}
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-white p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-stone-200 hover:border-bronze-500 group"
          >
            <div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mb-8 text-stone-800 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
               <Layers size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 tracking-wide text-stone-900">AutoCAD</h3>
            <p className="text-stone-500 leading-relaxed mb-8 font-light">
              תוכניות עבודה אדריכליות ברמה הגבוהה ביותר. חשמל, אינסטלציה, מיזוג ונגרות. השפה המשותפת שלי עם הקבלן בשטח.
            </p>
             <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-stone-600 font-medium">
                   <div className="w-1.5 h-1.5 bg-bronze-500 rounded-full"></div> <span>דיוק מילימטרי</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600 font-medium">
                   <div className="w-1.5 h-1.5 bg-bronze-500 rounded-full"></div> <span>פריסות קיר מפורטות</span>
                </li>
             </ul>
          </motion.div>

          {/* SketchUp */}
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-white p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-stone-200 hover:border-bronze-500 group"
          >
            <div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mb-8 text-stone-800 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
               <Box size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 tracking-wide text-stone-900">SketchUp</h3>
            <p className="text-stone-500 leading-relaxed mb-8 font-light">
              בניית מודל תלת-מימדי ריאליסטי. מאפשרת לכם להרגיש את החלל, להבין את הנפחים ולראות איך האור נופל על החומרים.
            </p>
             <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-stone-600 font-medium">
                   <div className="w-1.5 h-1.5 bg-bronze-500 rounded-full"></div> <span>הדמיה מוחשית</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600 font-medium">
                   <div className="w-1.5 h-1.5 bg-bronze-500 rounded-full"></div> <span>בחינת חלופות בזמן אמת</span>
                </li>
             </ul>
          </motion.div>

          {/* RoomPlan */}
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
             className="bg-white p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-stone-200 hover:border-bronze-500 group"
          >
             <div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mb-8 text-stone-800 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
               <LayoutTemplate size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 tracking-wide text-stone-900">RoomPlan</h3>
            <p className="text-stone-500 leading-relaxed mb-8 font-light">
              תכנון פונקציונלי ומהיר של העמדת ריהוט. פתרון אידיאלי לבחינת זרימה בחלל ובדיקת היתכנות של רעיונות עיצוביים.
            </p>
             <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-stone-600 font-medium">
                   <div className="w-1.5 h-1.5 bg-bronze-500 rounded-full"></div> <span>ניצול חלל מקסימלי</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600 font-medium">
                   <div className="w-1.5 h-1.5 bg-bronze-500 rounded-full"></div> <span>תכנון העמדה</span>
                </li>
             </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;