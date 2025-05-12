import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AdvantagesSection() {
  const isMobile = useIsMobile();
  
  const advantages = [
    {
      title: "Простота использования",
      description: "Planometrica разработана с фокусом на простоту и удобство использования.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    },
    {
      title: "Скорость работы",
      description: "Благодаря оптимизированной облачной архитектуре, система обеспечивает высокую производительность.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Точность расчетов",
      description: "Динамические алгоритмы позволяют получать точные оценки затрат на строительство с учетом актуальных цен.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Интеграция всего процесса",
      description: "Все этапы ИЖС от концептуального проектирования до подготовки строительной документации в едином интерфейсе.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];
  
  return <section className="py-20 bg-gray-50" id="advantages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2c54]">Преимущества Planometrica</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Planometrica обеспечивает уникальное сочетание технологий и подхода к процессам проектирования, производства и строительства</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                {isMobile ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                      <div className="bg-primary/10 p-3 rounded-lg mr-3">
                        {advantage.icon}
                      </div>
                      <h3 className="text-xl font-bold">{advantage.title}</h3>
                    </div>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
}
