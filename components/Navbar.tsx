import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'אודות', href: '#about' },
    { name: 'כישורים', href: '#skills' },
    { name: 'תיק עבודות', href: '#portfolio' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-stone-50/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-200' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <div className={`w-10 h-10 border flex items-center justify-center transition-colors duration-300 ${isScrolled ? 'border-stone-900 text-stone-900' : 'border-white text-white'}`}>
                <span className="font-serif font-bold text-xl">L</span>
             </div>
             <div className="flex flex-col">
                <span className={`font-serif text-lg font-bold tracking-wide transition-colors duration-300 leading-none ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
                    לינוי
                </span>
                <span className={`text-xs uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-stone-500' : 'text-stone-300'}`}>
                    ארץ קדושה
                </span>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative group py-2 ${isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-stone-300 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-px transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${isScrolled ? 'bg-stone-900' : 'bg-white'}`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 absolute w-full h-screen top-0 left-0 flex flex-col items-center justify-center space-y-8 z-50">
           <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-stone-900 p-2"
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-900 text-2xl font-serif font-bold hover:text-bronze-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;