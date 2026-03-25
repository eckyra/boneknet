
  const axios = require('axios');

module.exports = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { message } = req.body;
      const BOT_TOKEN = process.env.BOT_TOKEN; 
      const URL_MINI_APP = "https://https://boneknet.vercel.app"; // Ganti URL ini

      if (message && message.text === '/start') {
        const chatId = message.chat.id;
        
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: chatId,
          text: "Halo Mas Ecky! Klik tombol di bawah untuk input data Bonek Net.",
          reply_markup: {
            inline_keyboard: [[
              { text: "Buka Form Input", web_app: { url: URL_MINI_APP } }
            ]]
          }
        });
      }
      return res.status(200).send('OK');
    }
    return res.status(405).send('Method Not Allowed');
  } catch (error) {
    console.error("DETAIL ERROR:", error.response ? error.response.data : error.message);
    return res.status(500).send('Error: ' + error.message);
  }
};
