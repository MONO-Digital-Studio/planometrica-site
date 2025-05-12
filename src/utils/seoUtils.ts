
export const generateStructuredData = (type: string) => {
  if (type === "WebSite") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Planometrica",
      "url": "https://planometrica.ru/",
      "description": "Инновационная платформа для 3D-проектирования домов, использующая параметрическое моделирование и искусственный интеллект",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://planometrica.ru/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
  }
  
  if (type === "Organization") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Planometrica",
      "url": "https://planometrica.ru/",
      "logo": "https://planometrica.ru/planometrica_logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+7-XXX-XXX-XXXX",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://www.facebook.com/planometrica",
        "https://twitter.com/planometrica",
        "https://www.linkedin.com/company/planometrica"
      ]
    };
  }
  
  return {};
};

export const measurePageLoad = () => {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }
  
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  const dnsLookupTime = perfData.domainLookupEnd - perfData.domainLookupStart;
  const tcpConnectTime = perfData.connectEnd - perfData.connectStart;
  const serverResponseTime = perfData.responseEnd - perfData.requestStart;
  const domLoadTime = perfData.domComplete - perfData.domLoading;
  
  return {
    pageLoadTime,
    dnsLookupTime,
    tcpConnectTime,
    serverResponseTime,
    domLoadTime
  };
};
