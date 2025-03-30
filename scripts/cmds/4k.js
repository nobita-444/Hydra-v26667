const axios = require("axios");

module.exports = {
  config: {
    name: "4k",
    aliases: ["upscale"],
    version: "3.0",
    role: 0,
    author: "Team_Calyx | Fahim_Noob",
    countDown: 5,
    longDescription: "Upscale images to 4K resolution.",
    category: "tools",
    guide: {
      en: "${pn} reply to an image to upscale it to 4K resolution."
    }
  },
  onStart: async function ({ message, event }) {
    if (!event.messageReply || !event.messageReply.attachments || !event.messageReply.attachments[0]) {
      return message.reply("❌| Image deli na je ??");
    }
    const imgurl = encodeURIComponent(event.messageReply.attachments[0].url);
    const noobs = 'onrender.com';
    const upscaleUrl = `https://smfahim.${noobs}/4k?url=${imgurl}`;
    
    message.reply("🔄| Processing... Please wait a moment.", async (err, info) => {
      try {
        const { data: { image } } = await axios.get(upscaleUrl);
        const attachment = await global.utils.getStreamFromURL(image, "upscaled-image.png");

        message.reply({
          body: "✅| Here is your 4K image:",
          attachment: attachment
        });
        let processingMsgID = info.messageID;
        message.unsend(processingMsgID);

      } catch (error) {
        console.error(error);
        message.reply("❌| There was an error upscaling your image.");
      }
    });
  }
};