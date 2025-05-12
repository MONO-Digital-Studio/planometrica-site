
export const openTelegramBot = (botUsername: string) => {
  const telegramUrl = `https://t.me/${botUsername}`;
  window.open(telegramUrl, '_blank');
};
