import React from "react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useIsMobile } from "../hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { scrollToSection, openTelegramBot } from "../utils/commonUtils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDemoRequest = () => {
    openTelegramBot("planometrica_bot");
    toast({
      title: "Переход в Telegram",
      description: "Открываем чат с нашим ботом для демонстрации.",
      variant: "default"
    });
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: "capabilities", title: "Возможности" },
    { id: "audience", title: "Для кого" },
    { id: "technology", title: "Технологии" },
    { id: "advantages", title: "Преимущества" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/lovable-uploads/4ee30181-1400-4e9a-9fee-ab98f5d430d5.png"
            alt="Planometrica Logo"
            className="h-10 w-auto"
          />
          <span className="ml-3 text-2xl font-bold font-aileron bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            planometrica
          </span>
        </div>
        {!isMobile ? (
          <div className="flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm font-medium hover:text-accent transition-colors"
                      onClick={e => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90"
              onClick={handleDemoRequest}
            >
              Запросить демо
            </Button>
          </div>
        ) : (
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        )}
      </div>
      {/* Мобильное меню */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col space-y-4 animate-fade-in">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={e => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.title}
            </a>
          ))}
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 w-full"
            onClick={() => {
              handleDemoRequest();
              closeMenu();
            }}
          >
            Запросить демо
          </Button>
        </div>
      )}
    </header>
  );
}
