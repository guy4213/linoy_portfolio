import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900 text-stone-50">
      {/* Background Image - High End Kitchen/Living */}
      <div className="absolute inset-0 z-0">
        <motion.div 
           initial={{ scale: 1.15 }}
           animate={{ scale: 1 }}
           transition={{ duration: 12, ease: "easeOut" }}
           className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Interior Design" 
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-transparent to-stone-950/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Top Tagline */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 md:w-16 bg-bronze-500/60"></div>
            <span className="uppercase tracking-[0.2em] text-bronze-100 text-xs md:text-sm font-light">
              Interior Design & Home Styling
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-bronze-500/60"></div>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium mb-6 leading-[1.1] tracking-tight">
            <span className="block text-white">עיצוב פנים</span>
            <span className="block text-stone-400 text-4xl md:text-6xl lg:text-7xl mt-2 italic font-serif">בסטנדרט אחר</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-200 mb-10 font-light leading-relaxed tracking-wide">
            לינוי ארץ קדושה.
            <br />
            התמחות בתכנון מטבחים, עיצוב חללי מגורים ופתרונות אדריכליים מתקדמים.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
            <a 
              href="#portfolio" 
              className="group relative px-12 py-4 bg-stone-50 text-stone-900 overflow-hidden transition-all duration-300 hover:bg-stone-200"
            >
              <span className="relative z-10 font-medium tracking-widest text-sm">לצפייה בפרויקטים</span>
            </a>
            
            <a 
              href="#contact" 
              className="group px-12 py-4 border border-stone-500/50 text-stone-100 hover:border-bronze-400 hover:text-bronze-400 transition-all duration-300 backdrop-blur-sm"
            >
               <span className="font-medium tracking-widest text-sm">תיאום פגישת ייעוץ</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-stone-400 hover:text-white transition-colors opacity-70 hover:opacity-100">
          <span className="text-[10px] uppercase tracking-widest">גלו עוד</span>
          <ArrowDown size={20} className="animate-bounce font-light" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;