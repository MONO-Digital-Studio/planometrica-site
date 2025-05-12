export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const openTelegramBot = (botUsername: string, startParam?: string): void => {
  let url = `https://t.me/${botUsername}`;
  if (startParam) {
    url += `?start=${encodeURIComponent(startParam)}`;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}; 