import React, { useState, useEffect } from "react";
import { scrollToSection } from "../utils/commonUtils";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getFullYear() !== currentYear) {
        setCurrentYear(now.getFullYear());
      }
    }, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [currentYear]);
  
  return (
    <footer className="text-white py-8 md:py-12 bg-[#1a2c54]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              alt="Planometrica Logo" 
              className="h-8 md:h-10 w-auto" 
              src="/lovable-uploads/199bd1e4-0f01-4bf6-9447-937d224029fb.png" 
              loading="lazy"
            />
            <span className="ml-3 text-xl md:text-2xl font-bold">planometrica</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a 
              href="#capabilities" 
              className="hover:text-primary transition-colors px-2 py-1"
              onClick={e => {
                e.preventDefault();
                scrollToSection("capabilities");
              }}
            >
              Возможности
            </a>
            <a 
              href="#audience" 
              className="hover:text-primary transition-colors px-2 py-1"
              onClick={e => {
                e.preventDefault();
                scrollToSection("audience");
              }}
            >
              Для кого
            </a>
            <a 
              href="#technology" 
              className="hover:text-primary transition-colors px-2 py-1"
              onClick={e => {
                e.preventDefault();
                scrollToSection("technology");
              }}
            >
              Технологии
            </a>
            <a 
              href="#advantages" 
              className="hover:text-primary transition-colors px-2 py-1"
              onClick={e => {
                e.preventDefault();
                scrollToSection("advantages");
              }}
            >
              Преимущества
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 md:pt-8 mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
            © {currentYear} Planometrica. Все права защищены.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Политика конфиденциальности</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
