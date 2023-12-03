
export default async function sendMessageToTelegram(message: string) {
  const BOT_TOKEN = import.meta.env.VITE_REACT_APP_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_REACT_APP_CHAT_ID;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });
    } catch (error) {
      console.error(
        "There was an error when sending a notification to Telegram:",
        error
      );
    }
}
