import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-500 py-8 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} לינוי ארץ קדושה - עיצוב פנים והום סטיילינג. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

export default Footer;