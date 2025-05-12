
import React from 'react';

const HeroSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Инновационная платформа для проектирования жилых пространств
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Planometrica использует параметрическое моделирование и искусственный интеллект 
              для создания оптимальных архитектурных решений для домов и квартир.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-white rounded-md hover:bg-accent transition-colors">
                Попробовать бесплатно
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-md hover:bg-gray-100 transition-colors">
                Узнать больше
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img 
              src="/lovable-uploads/e30ca1a1-6067-4c39-b049-c6c1d34527a7.png" 
              alt="Planometrica 3D Model" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
