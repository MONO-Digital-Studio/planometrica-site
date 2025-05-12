/**
 * Opens the specified Telegram bot URL in a new tab
 * @param botUsername The username of the Telegram bot (without the @ symbol)
 * @param startParam Optional start parameter for the bot
 */
export const openTelegramBot = (botUsername: string, startParam?: string): void => {
  let url = `https://t.me/${botUsername}`;
  
  if (startParam) {
    url += `?start=${encodeURIComponent(startParam)}`;
  }
  
  window.open(url, '_blank', 'noopener,noreferrer');
};
