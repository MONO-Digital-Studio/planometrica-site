import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Home } from "lucide-react";

export default function CapabilitiesSection() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("homebuyers");
  
  const capabilities = {
    homebuyers: {
      title: "Возможности для покупателей индивидуальных домов",
      modules: [{
        title: "Кастомизация проекта",
        icon: <Home className="w-6 h-6" />,
        features: ["Каталог базовых проектов индивидуальны жилых домов с возможностью фильтрации и поиска", "Интерактивный конфигуратор проекта дома с 3D-визуализацией", "Возможность изменения планировочных решений", "Выбор этажности, стиля отделки, дополнительных опций"]
      }, {
        title: "Привязка проекта к участку",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>,
        features: ["Интеграция с картографическими сервисами и данными кадастровой карты для выбора участка", "Возможность загрузки кадастрового номера или координат участка", "Проверка соответствия проекта дома параметрам выбранного участка", "Учет локальных строительных нормативов и ограничений"]
      }, {
        title: "Подготовка документов",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>,
        features: ["Автоматическое формирование договора", "Формирование сметы строительства", "Создание календарного плана строительных работ", "Генерация спецификаций и комплектов проектной документации"]
      }, {
        title: "Оформление и оплата заказа",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>,
        features: ["Расчет итоговой стоимости проекта", "Ипотека и проектное финансирование", "Электронное подписание документов", "Отслеживание статуса стройки"]
      }]
    },
    builders: {
      title: "Возможности для домостроительных компаний",
      modules: [{
        title: "Анализ земельного участка",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>,
        features: ["Инструменты для градостроительного анализа", "Анализ рынка и потенциального спроса в локации", "Формирование объемно-планировочных решений"]
      }, {
        title: "Разработка мастер-плана",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>,
        features: ["Инструменты для разработки концепции мастер-плана территории", "Оценка технико-экономических показателей (ТЭП)", "Расчет экономических параметров проекта"]
      }, {
        title: "Управление проектами",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.25v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>,
        features: ["Динамический расчет стоимости проекта", "Предложения по оптимизации расходов проекта", "Управление взаимодействием с производителями и подрядчиками"]
      }, {
        title: "Планирование СМР",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 0 13.5 15.75h-13.5A2.25 2.25 0 0 0 3 13.5v-11.25m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>,
        features: ["Формирование графиков работ", "Управление ресурсами", "Документация для сдачи готового дома"]
      }]
    },
    manufacturers: {
      title: "Возможности для производителей домокомплектов",
      modules: [{
        title: "Управление ассортиментом",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>,
        features: ["Актуализация каталога проектов и номенклатуры материалов", "Управление ценообразованием с учетом логистики и спроса", "Контроль доступности комплектующих"]
      }, {
        title: "Автоматизация производства",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>,
        features: ["Автоматическое формирование технических заданий на производство", "Интеграция с производственными системами", "Оптимизация логистики поставок на строительные площадки"]
      }]
    }
  };
  
  const renderTabContent = tabKey => {
    const tabData = capabilities[tabKey];
    if (isMobile) {
      return <div className="mt-6 space-y-4">
          <h3 className="text-2xl font-bold text-primary mb-4 text-center">{tabData.title}</h3>
          <Accordion type="single" collapsible className="w-full">
            {tabData.modules.map((module, index) => <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-medium">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-1.5 rounded-full">
                      {module.icon}
                    </div>
                    {module.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mt-2 pl-12">
                    {module.features.map((feature, fIndex) => <li key={fIndex} className="flex items-start">
                        <span className="inline-block bg-accent/10 text-accent p-0.5 rounded-full mr-2 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>;
    }
    
    return <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tabData.modules.map((module, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    {module.icon}
                  </div>
                  <h4 className="text-xl font-bold">{module.title}</h4>
                </div>
                <ul className="space-y-2 pl-4">
                  {module.features.map((feature, fIndex) => <li key={fIndex} className="flex items-start">
                      <span className="inline-block bg-accent/10 text-accent p-0.5 rounded-full mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
      </div>;
  };
  
  return <section className="py-20 bg-gray-50" id="capabilities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2c54]">Функциональные возможности</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Planometrica предлагает эффективные инструменты для проектирования, визуализации, управления и продаж новых домов на рынке ИЖС</p>
        </div>
        
        <Tabs defaultValue="homebuyers" value={activeTab} onValueChange={setActiveTab} className="w-full">
          {isMobile ? (
            <div className="flex flex-col space-y-2 mb-6">
              <TabsList className="flex w-full min-w-[200px]">
                <TabsTrigger 
                  value="homebuyers" 
                  className="flex-1 text-sm py-3 rounded-md data-[state=active]:bg-accent data-[state=active]:text-white"
                >
                  Покупателям
                </TabsTrigger>
              </TabsList>
              <TabsList className="flex w-full min-w-[200px]">
                <TabsTrigger 
                  value="builders" 
                  className="flex-1 text-sm py-3 rounded-md data-[state=active]:bg-accent data-[state=active]:text-white"
                >
                  Строителям
                </TabsTrigger>
              </TabsList>
              <TabsList className="flex w-full min-w-[200px]">
                <TabsTrigger 
                  value="manufacturers" 
                  className="flex-1 text-sm py-3 rounded-md data-[state=active]:bg-accent data-[state=active]:text-white"
                >
                  Производителям
                </TabsTrigger>
              </TabsList>
            </div>
          ) : (
            <TabsList className="grid grid-cols-3 w-full mb-6 p-0 bg-transparent gap-1">
              <TabsTrigger 
                value="homebuyers" 
                className="text-sm md:text-base py-3 rounded-md data-[state=active]:bg-accent data-[state=active]:text-white"
              >
                Покупателям
              </TabsTrigger>
              <TabsTrigger 
                value="builders" 
                className="text-sm md:text-base py-3 rounded-md data-[state=active]:bg-accent data-[state=active]:text-white"
              >
                Строителям
              </TabsTrigger>
              <TabsTrigger 
                value="manufacturers" 
                className="text-sm md:text-base py-3 rounded-md data-[state=active]:bg-accent data-[state=active]:text-white"
              >
                Производителям
              </TabsTrigger>
            </TabsList>
          )}
          <TabsContent value="homebuyers" className="mt-2">
            {renderTabContent("homebuyers")}
          </TabsContent>
          <TabsContent value="builders" className="mt-2">
            {renderTabContent("builders")}
          </TabsContent>
          <TabsContent value="manufacturers" className="mt-2">
            {renderTabContent("manufacturers")}
          </TabsContent>
        </Tabs>
      </div>
    </section>;
}
