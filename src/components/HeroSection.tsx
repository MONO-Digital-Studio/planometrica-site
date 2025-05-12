import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/components/ui/use-toast";
import { openTelegramBot } from "@/utils/telegramUtils";

export default function HeroSection() {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const handleDemoRequest = () => {
    openTelegramBot("planometrica_bot");
    
    toast({
      title: "Переход в Telegram",
      description: "Открываем чат с нашим ботом для демонстрации.",
      variant: "default"
    });
  };
  
  // Функция для прокрутки к секции (оставлена для совместимости)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // На мобильных устройствах переупорядочиваем контент
  if (isMobile) {
    return (
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 items-center">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Инновация</span>
                <br />
                <span className="text-[#1a2c54]">в строительстве индивидуальных жилых домов</span>
              </h1>
              <p className="text-base max-w-2xl mx-auto text-[#1a2c54]">Для производителей, строителей и покупателей ИЖС</p>
            </div>
            
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative z-10 aspect-video">
                <img 
                  src="/lovable-uploads/0342db7c-3222-4b93-9e72-68fdab919f72.png" 
                  alt="Planometrica Interface" 
                  className="w-full h-full rounded-xl shadow-2xl object-cover" 
                  loading="eager" 
                />
              </div>
              <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-gradient-to-r from-primary to-accent rounded-xl -z-10 opacity-20 blur-xl"></div>
            </div>
            
            <div className="w-full pt-2">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-base w-full" 
                onClick={handleDemoRequest}
              >
                Запросить демо
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Десктопная версия остается без изменений
  return (
    <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Инновация</span>
              <br />
              <span className="text-[#1a2c54]">в строительстве индивидуальных жилых домов</span>
            </h1>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 text-[#1a2c54]">Для производителей, строителей и покупателей ИЖС</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg w-full sm:w-auto" onClick={handleDemoRequest}>
                Запросить демо
              </Button>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative z-10 aspect-video">
              <img 
                src="/lovable-uploads/0342db7c-3222-4b93-9e72-68fdab919f72.png" 
                alt="Planometrica Interface" 
                className="w-full h-full rounded-xl shadow-2xl object-cover" 
                loading="eager" 
              />
            </div>
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-gradient-to-r from-primary to-accent rounded-xl -z-10 opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
