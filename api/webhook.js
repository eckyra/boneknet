const axios = require('axios');

export default async (req, res) => {
  if (req.method === 'POST') {
    const { message } = req.body;
    const BOT_TOKEN = process.env.BOT_TOKEN; // Masukkan token di settings Vercel
    const URL_MINI_APP = "https://boneknet.vercel.app"; // URL Vercel Mas Ecky

    if (message && message.text === '/start') {
      const chatId = message.chat.id;
      const text = "Halo! Silakan klik tombol di bawah untuk input data.";

      try {
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: chatId,
          text: text,
          reply_markup: {
            inline_keyboard: [[
              { text: "Buka Form Input", web_app: { url: URL_MINI_APP } }
            ]]
          }
        });
      } catch (error) {
        console.error("Error kirim pesan:", error);
      }
    }
    return res.status(200).send('OK');
  }
  return res.status(405).send('Method Not Allowed');
};
