import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Ruler, Sparkles, BoxSelect } from 'lucide-react';

const KitchenSpecialty: React.FC = () => {
  return (
    <section className="py-32 bg-stone-900 text-stone-50 overflow-hidden relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-bronze-500/50 rounded-full text-bronze-400 text-xs tracking-widest uppercase mb-6">
                    <ChefHat size={14} />
                    <span>התמחות ראשית</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-6xl font-medium text-white mb-8 leading-tight">
                    תכנון ועיצוב<br/>
                    <span className="text-bronze-500 italic">מטבחים</span>
                </h2>

                <p className="text-stone-300 text-lg font-light leading-relaxed mb-10">
                    המטבח הוא הלב הפועם של הבית. המקום שבו האסתטיקה פוגשת את הפרקטיקה בצורה האינטנסיבית ביותר.
                    אני מתמחה בתכנון מטבחים מדויקים, ארגונומיים ועוצרי נשימה, תוך ירידה לפרטים הטכניים המורכבים ביותר.
                </p>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center border border-stone-700 text-bronze-400">
                             <Ruler size={20} />
                        </div>
                        <div>
                            <h4 className="font-serif text-xl text-white mb-2">תכנון ארגונומי חכם</h4>
                            <p className="text-stone-400 text-sm font-light">משולש העבודה, גבהים מותאמים אישית וזרימה נכונה בחלל.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center border border-stone-700 text-bronze-400">
                             <BoxSelect size={20} />
                        </div>
                        <div>
                            <h4 className="font-serif text-xl text-white mb-2">פתרונות אחסון מתקדמים</h4>
                            <p className="text-stone-400 text-sm font-light">ניצול מקסימלי של פינות, מזווים נשלפים ופרזול מתקדם.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center border border-stone-700 text-bronze-400">
                             <Sparkles size={20} />
                        </div>
                        <div>
                            <h4 className="font-serif text-xl text-white mb-2">בחירת חומרים וגמרים</h4>
                            <p className="text-stone-400 text-sm font-light">התאמת משטחי עבודה (שיש, גרניט, דקטון) וחזיתות עמידות ויפהפיות.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[600px] w-full"
            >
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-stone-800 overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop" 
                        alt="Kitchen Detail" 
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-stone-800 overflow-hidden border-4 border-stone-900 shadow-2xl">
                     <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
                        alt="Modern Kitchen" 
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                </div>
                {/* Decorative Frame */}
                <div className="absolute top-10 left-10 right-10 bottom-10 border border-bronze-500/30 -z-10"></div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KitchenSpecialty;