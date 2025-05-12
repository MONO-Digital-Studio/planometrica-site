
import React from 'react';

const CapabilitiesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Возможности Planometrica
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4">3D-визуализация</h3>
            <p className="text-gray-700 mb-6">
              Моментально преобразуйте вашу планировку в полноценную трехмерную модель.
              Просматривайте проект с разных ракурсов и в разное время суток.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Фотореалистичная визуализация интерьера и экстерьера</li>
              <li>Возможность виртуальной прогулки по помещениям</li>
              <li>Настройка материалов и освещения в реальном времени</li>
              <li>Экспорт изображений в высоком разрешении</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4">Автоматическая оптимизация</h3>
            <p className="text-gray-700 mb-6">
              Искусственный интеллект анализирует ваши требования и предлагает оптимальные решения
              для использования каждого квадратного метра пространства.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Оптимизация планировки с учётом инсоляции</li>
              <li>Эргономичное размещение мебели и техники</li>
              <li>Улучшение энергоэффективности проекта</li>
              <li>Снижение затрат на строительство и отделку</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 bg-primary text-white rounded-md hover:bg-accent transition-colors">
            Попробовать бесплатно
          </button>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
