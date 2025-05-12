import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("parametric");
  const isMobile = useIsMobile();
  const features = {
    parametric: {
      title: "Параметрическое 3D-моделирование",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      items: [
        "Интеллектуальная кастомизация базовых проектов с соблюдением строительных норм",
        "Библиотека 'умных' компонентов, автоматически адаптирующихся к изменениям",
        "Автоматическая валидация конструктивной логики здания"
      ]
    },
    visualization: {
      title: "Визуализация и представление",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      items: [
        "Мгновенный рендеринг моделей с настройкой материалов и освещения",
        "Создание интерактивных виртуальных туров по спроектированным пространствам",
        "Интеграция с мобильными устройствами для демонстрации проектов"
      ]
    },
    documentation: {
      title: "Автоматизация документации",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      items: [
        "Автоматическое создание полного комплекта строительных чертежей",
        "Генерация точных ведомостей материалов с автоматическим подсчетом объемов",
        "Проверка соответствия проекта актуальным строительным нормам"
      ]
    },
    cost: {
      title: "Расчет стоимости",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      items: [
        "Динамический расчет стоимости проекта в реальном времени",
        "Учет региональных различий в стоимости материалов и работ",
        "Предложения по оптимизации стоимости с сохранением ключевых характеристик"
      ]
    }
  };

  const renderTabContent = tabKey => {
    const feature = features[tabKey];
    return (
      <Card className="border-none overflow-hidden">
        <CardContent className="p-0">
          <div className={`flex flex-col ${isMobile ? "" : "md:flex-row"}`}>
            <div className={`${isMobile ? "h-64" : "md:w-1/2"} relative overflow-hidden`}>
              <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent flex items-center justify-center">
                <h3 className="text-white text-2xl md:text-3xl font-bold p-6 md:hidden">{feature.title}</h3>
              </div>
            </div>
            <div className={`${isMobile ? "" : "md:w-1/2"} p-8`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 hidden md:block">{feature.title}</h3>
              <ul className="space-y-4">
                {feature.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2c54]">Функциональные возможности</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Planometrica предлагает широкий набор инструментов для эффективного проектирования, визуализации и управления строительными проектами.
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {Object.keys(features).map(key => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-3 py-1.5 rounded-sm font-medium text-sm transition-colors ${
                  activeTab === key
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {key === "parametric" && "Моделирование"}
                {key === "visualization" && "Визуализация"}
                {key === "documentation" && "Документация"}
                {key === "cost" && "Расчет стоимости"}
              </button>
            ))}
          </div>
          {renderTabContent(activeTab)}
        </div>
      </div>
    </section>
  );
}