
import React from 'react';

const TargetAudience = () => {
  const audiences = [
    {
      title: 'Для частных лиц',
      description: 'Создавайте индивидуальные проекты домов и квартир, отражающие ваш стиль жизни и предпочтения',
      image: '/lovable-uploads/199bd1e4-0f01-4bf6-9447-937d224029fb.png',
    },
    {
      title: 'Для архитекторов',
      description: 'Ускорьте проектирование и предложите клиентам больше вариантов планировок в короткие сроки',
      image: '/lovable-uploads/0342db7c-3222-4b93-9e72-68fdab919f72.png',
    },
    {
      title: 'Для строительных компаний',
      description: 'Оптимизируйте типовые проекты и создавайте уникальные предложения для повышения продаж',
      image: '/lovable-uploads/4ee30181-1400-4e9a-9fee-ab98f5d430d5.png',
    },
  ];

  return (
    <section id="audience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
          Для кого создана Planometrica
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Наша платформа помогает каждому создать идеальное жилое пространство, независимо от профессиональных навыков
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
