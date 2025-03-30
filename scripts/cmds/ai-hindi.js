const axios = require("axios");

module.exports = {
  config: {
    name: "baby",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Arun ツ",
    description: "[ Baby AI ]",
    category: "no prefix",
    usages: "Ask a question from Baby AI",
    cooldowns: 0
  },

  onEvent: async function ({ api, event }) {
    const { threadID, messageID, senderID, body } = event;
    const lowerCaseBody = body.toLowerCase();

    // Trigger on specific keywords
    if (lowerCaseBody.startsWith("babu") || lowerCaseBody.startsWith("baby")) {
      const message = body.trim().split(" ");

      // Check if question is provided
      if (message.length < 2) {
        return api.sendMessage("✨ Hello, type 'Baby' followed by your question.", threadID, messageID);
      }

      try {
        api.sendMessage("🌠 Thinking...", threadID, messageID);

        // Prepare the question
        const question = message.slice(1).join(" ");
        const encodedQuestion = encodeURIComponent(question);

        // API request
        const response = await axios.get(`https://priyansh-ai.onrender.com/ai?prompt=${encodedQuestion}&uid=${senderID}&apikey=priyansh-here`);
        const reply = response.data.response;

        // Send the response
        api.sendMessage(`${reply}\n༺═──༻`, threadID, messageID);
      } catch (error) {
        console.error(error);
        api.sendMessage("❌ No response received from the server: " + error.message, threadID, messageID);
      }
    }
  },

  onStart: function () {
    // Currently empty, can be used if needed
  }
};
