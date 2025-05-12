
export const generateStructuredData = (type: string) => {
  if (type === "WebSite") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Planometrica",
      url: "https://planometrica.ru/",
      description: "Инновационная платформа для 3D-проектирования домов, использующая параметрическое моделирование и ИИ",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://planometrica.ru/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
  }
  
  if (type === "Organization") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Planometrica",
      url: "https://planometrica.ru/",
      logo: "https://planometrica.ru/planometrica_logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+7-XXX-XXX-XXXX",
        contactType: "customer service"
      },
      sameAs: [
        "https://www.facebook.com/planometrica",
        "https://www.instagram.com/planometrica",
        "https://twitter.com/planometrica"
      ]
    };
  }
  
  return {};
};

export const measurePageLoad = () => {
  if (typeof window !== "undefined") {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.navigationStart;
    const firstPaint = performance.getEntriesByType("paint")[0] 
      ? performance.getEntriesByType("paint")[0].startTime 
      : 0;
      
    return {
      pageLoadTime,
      domContentLoaded,
      firstPaint,
      isGoodPerformance: pageLoadTime < 3000
    };
  }
  return null;
};
