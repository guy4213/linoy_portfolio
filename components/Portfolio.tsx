import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "פנטהאוז בסגנון נורדי",
      category: "תכנון מטבח וסלון",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1200&auto=format&fit=crop",
      description: "מטבח רחב ידיים עם אי מרכזי באורך 4 מטר, בשילוב עץ אלון טבעי ושיש קררה. חיבור הרמוני לחלל האירוח."
    },
    {
      id: 2,
      title: "דירת גן בוטיק",
      category: "עיצוב פנים מלא",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      description: "שיפוץ מקיף לדירת קבלן. יצירת חלל מודרני, מואר ומינימליסטי עם נגיעות של בטון חשוף וברזל."
    },
    {
      id: 3,
      title: "סוויטת הורים",
      category: "הום סטיילינג",
      image: "https://images.unsplash.com/photo-1616594039964-40891a909d99?q=80&w=1200&auto=format&fit=crop",
      description: "עיצוב חדר שינה באווירת ריזורט יוקרתי. שימוש בטקסטיל עשיר, וילונות נשפכים ותאורה נסתרת."
    },
    {
      id: 4,
      title: "חלל עבודה יוקרתי",
      category: "עיצוב מסחרי",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      description: "משרד ביתי המשלב פונקציונליות מקסימלית עם אסתטיקה עסקית. נגרות בהתאמה אישית לניצול כל סנטימטר."
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-bronze-600 font-medium uppercase tracking-widest text-sm mb-4">פרויקטים נבחרים</span>
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-stone-900 leading-tight mb-6">
            אומנות המגורים
          </h2>
          <p className="text-stone-500 text-lg font-light max-w-2xl leading-relaxed">
             אוסף של חללים שעברו טרנספורמציה. מתכנון ראשוני ועד להנחת האגרטל האחרון.
          </p>
        </div>

        {/* Gallery Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group cursor-pointer flex flex-col ${index % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6 shadow-lg">
                <div className="absolute inset-0 bg-stone-900/0 z-10 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Overlay Text on Hover */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 md:hidden">
                    <span className="text-white text-lg font-serif">{project.title}</span>
                </div>
              </div>
              
              <div className="mt-2 pr-2 border-r-2 border-transparent group-hover:border-bronze-500 transition-colors duration-300">
                 <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest font-semibold text-bronze-600 mb-2">
                        {project.category}
                    </span>
                    <h3 className="text-3xl font-serif font-medium text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-stone-500 font-light leading-relaxed max-w-md">
                        {project.description}
                    </p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
             <a href="#contact" className="inline-block px-12 py-4 bg-stone-900 text-stone-50 hover:bg-bronze-600 transition-all duration-300 tracking-widest text-sm font-medium">
              התחילו את הפרויקט שלכם
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;