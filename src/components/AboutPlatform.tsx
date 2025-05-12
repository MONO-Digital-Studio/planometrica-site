
import { FeatureCard } from "../components/platforms/FeatureCard";
import { SectionTitle } from "../components/platforms/SectionTitle";
import { ProjectDesignIcon, VisualizationIcon, AutomationIcon } from "../components/icons/PlatformIcons";

export default function AboutPlatform() {
  const features = [
    {
      icon: <ProjectDesignIcon />,
      title: "Проектирование",
      description:
        "Создание и модификация проектов домов благодаря интеллектуальным инструментам кастомизации."
    },
    {
      icon: <VisualizationIcon />,
      title: "Визуализация",
      description:
        "Рендеринг проектов с настройкой строительных и отделочных материалов для реалистичного представления будущего дома."
    },
    {
      icon: <AutomationIcon />,
      title: "Автоматизация",
      description:
        "Генерация полного комплекта строительных чертежей, спецификаций материалов и сметы в пару кликов."
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="О платформе"
          description={
            <p>
              Planometrica - платформа для проектирования, 3D-моделирования и автоматизации
              процессов производства, строительства и продаж на рынке ИЖС
            </p>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
