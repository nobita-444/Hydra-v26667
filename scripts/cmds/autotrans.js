const axios = require("axios");

module.exports = {
  config: {
    name: "bangla",
    aliases: ["bn", "transbn"],
    version: "1.0.1",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭(modify by Xrotick)",
    description: "Text translation",
    category: "media",
    usages: "{pn} [text] -> [language]",
    cooldowns: 5
  },

  onStart: async function ({ api, event, args }) {
    const content = args.join(" ");
    if (!content && event.type !== "message_reply") {
      return api.sendMessage("❌ Please provide text to translate.", event.threadID, event.messageID);
    }

    let translateThis, lang;

    // Determine input text and target language
    if (event.type === "message_reply") {
      translateThis = event.messageReply.body;
      lang = content.includes("->") ? content.split("->")[1].trim() : "bn";
    } else if (content.includes("->")) {
      translateThis = content.split("->")[0].trim();
      lang = content.split("->")[1].trim();
    } else {
      translateThis = content;
      lang = "bn"; // Default to Bengali
    }

    // Translation API Call
    try {
      const url = encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${translateThis}`);
      const response = await axios.get(url);
      const retrieve = response.data;

      // Extract translation result
      let translatedText = "";
      retrieve[0].forEach(item => (item[0]) ? translatedText += item[0] : '');

      const fromLang = retrieve[2] === retrieve[8][0][0] ? retrieve[2] : retrieve[8][0][0];
      api.sendMessage(`🌐 ${translatedText}\n- 🍂 ${fromLang} to ${lang.toUpperCase()} 🍂`, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage("⚠️ An error occurred while translating.", event.threadID, event.messageID);
    }
  }
};
