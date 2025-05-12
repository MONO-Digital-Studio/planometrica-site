
import { useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { HardHatIcon } from "./icons/PlatformIcons";
import { useIsMobile } from "@/hooks/use-mobile";

export default function TargetAudience() {
  const isMobile = useIsMobile();
  
  // Добавление структурированных данных Schema.org для SEO
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Planometrica",
      description:
        "Инновационная платформа для 3D-проектирования домов, использующая параметрическое моделирование и искусственный интеллект",
      provider: {
        "@type": "Organization",
        name: "Planometrica",
        url: "https://planometrica.ru/"
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Строители",
          name: "Застройщики и строительные компании"
        },
        {
          "@type": "Audience",
          audienceType: "Архитекторы",
          name: "Архитектурные бюро и специалисты"
        },
        {
          "@type": "Audience",
          audienceType: "Производители",
          name: "Производители домокомплектов"
        },
        {
          "@type": "Audience",
          audienceType: "Покупатели",
          name: "Потребители ИЖС"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const audienceCategories = [
    {
      icon: <HardHatIcon aria-hidden="true" />,
      title: "Строители",
      description:
        "Застройщики, работающие с типовыми проектами, которые хотят предлагать клиентам качественные модификации базовых проектов."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 text-primary"
          aria-hidden="true"
          role="img"
        >
          <title>Иконка архитектора</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      title: "Архитекторы",
      description:
        "Команды и специалисты, которым требуются эффективные инструменты для быстрого создания качественных проектов."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 text-primary"
          aria-hidden="true"
          role="img"
        >
          <title>Иконка производителя</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
      title: "Производители",
      description:
        "Компании, производящие типовые домокомплекты, материалы и комплектующие для ИЖС."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 text-primary"
          aria-hidden="true"
          role="img"
        >
          <title>Иконка покупателя</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "Покупатели",
      description:
        "Покупатели желающие увидеть свой будущий дом в 3D и внести изменения в проект еще до начала строительства."
    }
  ];
  
  return (
    <section
      className="py-20 bg-gray-50"
      id="audience"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl mb-4 font-bold text-[#1a2c54]"
            itemProp="name"
          >
            Для кого
          </h2>
          <p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            itemProp="description"
          >
            Planometrica предоставляет решения для различных категорий пользователей, обеспечивая эффективность на каждом этапе строительства ИЖС
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audienceCategories.map((category, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              itemScope
              itemType="https://schema.org/Audience"
            >
              <CardContent className="p-0">
                {isMobile ? (
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/5 p-3 rounded-lg mr-3">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold" itemProp="audienceType">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-600" itemProp="description">
                      {category.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="bg-primary/5 p-6 flex items-center justify-center md:w-1/3">
                      {category.icon}
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-bold mb-2" itemProp="audienceType">
                        {category.title}
                      </h3>
                      <p className="text-gray-600" itemProp="description">
                        {category.description}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
