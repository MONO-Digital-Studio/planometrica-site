import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { openTelegramBot } from "@/utils/telegramUtils";

export default function CTASection() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Open Telegram bot
    openTelegramBot("planometrica_bot");
    
    toast({
      title: "Переход в Telegram",
      description: "Открываем чат с нашим ботом для демонстрации.",
      variant: "default"
    });
  };
  
  return <section className="py-16 md:py-24 bg-gradient-to-br from-primary/80 to-accent/90 text-white" id="demo">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">Готовы начать строить и продавать ИЖС по новому?</h2>
          <p className="text-base md:text-xl opacity-90 mb-6 md:mb-8 px-4">
            Запросите демо и узнайте, как Planometrica может улучшить эффективность вашего бизнеса
          </p>
          
          <form onSubmit={handleSubmit} className="flex justify-center max-w-md mx-auto">
            <Button type="submit" size="lg" className="bg-white text-accent hover:bg-white/90 transition-colors w-full sm:w-auto px-8">
              Запросить демо
            </Button>
          </form>
          
          <p className="mt-4 md:mt-6 text-xs md:text-sm opacity-80 px-4">
            Мы свяжемся с вами в течение 24 часов для организации демонстрации.
          </p>
        </div>
      </div>
    </section>;
}
