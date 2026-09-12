import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowLeft } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-stone-950 text-stone-100 relative overflow-hidden">
        {/* Background Texture/Gradient */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-bronze-500 font-medium uppercase tracking-widest text-sm mb-4">יצירת קשר</h3>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              בואו נגשים<br/> <span className="text-stone-500">את החלום.</span>
            </h2>
            <p className="text-stone-400 text-xl mb-12 leading-relaxed font-light max-w-md">
              כל בית מתחיל בשיחה. אני מזמינה אתכם לקפה ופגישת היכרות, בה נבין יחד את הצרכים והרצונות שלכם.
            </p>

            <div className="space-y-10">
              <a href="tel:0527516308" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-sm border border-stone-800 flex items-center justify-center text-stone-400 group-hover:border-bronze-500 group-hover:text-bronze-500 transition-all duration-300">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-1">התקשרו אליי</p>
                  <p className="text-2xl font-serif font-medium text-stone-200 group-hover:text-white transition-colors">052-751-6308</p>
                </div>
              </a>

              <a href="mailto:linoy14332@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-sm border border-stone-800 flex items-center justify-center text-stone-400 group-hover:border-bronze-500 group-hover:text-bronze-500 transition-all duration-300">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-1">כתבו לי למייל</p>
                  <p className="text-2xl font-serif font-medium text-stone-200 group-hover:text-white transition-colors">linoy14332@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-sm border border-stone-800 flex items-center justify-center text-stone-400">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-1">אזור פעילות</p>
                  <p className="text-2xl font-serif font-medium text-stone-200">בת ים והמרכז</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-8">
               <a href="#" className="text-stone-500 hover:text-bronze-500 transition-colors"><Instagram size={28} /></a>
               <a href="#" className="text-stone-500 hover:text-bronze-500 transition-colors"><Facebook size={28} /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-sm text-stone-900 shadow-2xl lg:mt-10">
            <h3 className="text-3xl font-bold mb-8 font-serif">השאירו פרטים</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-stone-600">שם מלא</label>
                    <input 
                    type="text" 
                    id="name" 
                    className="w-full px-0 py-3 border-b border-stone-300 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-lg"
                    placeholder="ישראל ישראלי"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-stone-600">טלפון</label>
                    <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-0 py-3 border-b border-stone-300 bg-transparent focus:outline-none focus:border-stone-900 transition-colors text-lg"
                    placeholder="050-0000000"
                    />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-600">ספרו לי על החלום שלכם</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-4 mt-2 bg-stone-50 border border-stone-200 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                  placeholder="אני רוצה לעצב מחדש את הסלון..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-stone-900 text-white font-medium py-4 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group mt-4"
              >
                <span>שלח הודעה</span>
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;