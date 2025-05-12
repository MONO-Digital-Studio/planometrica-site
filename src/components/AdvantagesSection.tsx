
import React from 'react';

const AdvantagesSection = () => {
  const advantages = [
    {
      title: 'Параметрическое моделирование',
      description: 'Автоматическое создание планировок с учетом ваших требований и ограничений',
      icon: '📐',
    },
    {
      title: 'Искусственный интеллект',
      description: 'Оптимизация пространства с помощью передовых алгоритмов машинного обучения',
      icon: '🧠',
    },
    {
      title: 'Быстрая визуализация',
      description: 'Мгновенный рендеринг 3D-моделей вашего проекта в высоком качестве',
      icon: '🏠',
    },
    {
      title: 'Экономия времени',
      description: 'Сокращение процесса проектирования с месяцев до нескольких дней',
      icon: '⏱️',
    },
  ];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Преимущества Planometrica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
