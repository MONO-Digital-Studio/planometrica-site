
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="text-2xl font-bold text-primary flex items-center">
            <img src="/lovable-uploads/5ad57fe7-b1c4-4958-ae23-69a944a82b92.png" alt="Planometrica Logo" className="h-10 mr-2" />
            Planometrica
          </a>
          
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block absolute top-full left-0 w-full bg-white shadow-lg lg:static lg:shadow-none lg:bg-transparent lg:w-auto`}>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
              <li><a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a></li>
              <li><a href="#audience" className="text-gray-700 hover:text-primary transition-colors">Для кого</a></li>
              <li><a href="#capabilities" className="text-gray-700 hover:text-primary transition-colors">Возможности</a></li>
              <li><a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition-colors">Связаться</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
