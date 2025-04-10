const moment = require("moment-timezone");
const fs = require("fs");
const path = require("path");

const linkFilePath = path.join(__dirname, "autotimerLinks.json");

module.exports.config = {
  name: "timer2",
  version: "3.6",
  role: 0,
  author: "XroTick",
  description: "Send time-based messages to all groups with video support",
  category: "utility",
  usages: "[addlink/on/off/currenttime]",
  countDown: 3
};

// Helpers
function loadJSON(file, fallback = {}) {
  if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify(fallback, null, 2));
  return JSON.parse(fs.readFileSync(file));
}

function saveJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

const timerData = {
  "12:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n12:00:00 AM\n━━━━━━━━━━━━━━━\nঘুমোতে মন চায় না নাকি? Netflix শেষ হয় না বুঝি? 😴📺\n━━━━━━━━━━━━━━━"
  },
  "01:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n01:00:00 AM\n━━━━━━━━━━━━━━━\nএই রাতের বেলা রোমাঞ্চ না করে ঘুমা 🫣🌌\n━━━━━━━━━━━━━━━"
  },
  "02:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n02:00:00 AM\n━━━━━━━━━━━━━━━\nভাই! তোর Gf এখন ঘুমায়, তুইও ঘুমা 😪❤\n━━━━━━━━━━━━━━━"
  },
  "03:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n03:00:00 AM\n━━━━━━━━━━━━━━━\nতুই কি Owl নাকি? এখনো জাগোস? 🦉\n━━━━━━━━━━━━━━━"
  },
  "04:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n04:00:00 AM\n━━━━━━━━━━━━━━━\nসবাই ঘুমায়, আর আমি? মশা মারি 🦟😑\n━━━━━━━━━━━━━━━"
  },
  "05:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n05:00:00 AM\n━━━━━━━━━━━━━━━\nওই ঘুমকাতুরে! সকাল হইছে, উঠে পড়! ⏰🔥\n━━━━━━━━━━━━━━━"
  },
  "06:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n06:00:00 AM\n━━━━━━━━━━━━━━━\nছাত্র ভাই/বোনেরা, উঠে বই নাও! 📖\n━━━━━━━━━━━━━━━"
  },
  "07:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n07:00:00 AM\n━━━━━━━━━━━━━━━\nনাস্তা করবা না? না করলে রাগ করবো 😤🥪\n━━━━━━━━━━━━━━━"
  },
  "08:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n08:00:00 AM\n━━━━━━━━━━━━━━━\nঅফিসে দেরি হইতেছে! Boss রেডি বাইরায় 😅💼\n━━━━━━━━━━━━━━━"
  },
  "09:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n09:00:00 AM\n━━━━━━━━━━━━━━━\nতুই আর আমি ছাড়া সবাই ব্যস্ত 😔 আমাকেও ভুলে যাস না\n━━━━━━━━━━━━━━━"
  },
  "10:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n10:00:00 AM\n━━━━━━━━━━━━━━━\nআমারও একটু ঘুম দরকার... ডাক দিস 💤\n━━━━━━━━━━━━━━━"
  },
  "11:00:00 AM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n11:00:00 AM\n━━━━━━━━━━━━━━━\nঘুমে তলিয়ে যাচ্ছি... হালকা হালকা চায়ে মন বসে 🍵\n━━━━━━━━━━━━━━━"
  },
  "12:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n12:00:00 PM\n━━━━━━━━━━━━━━━\nকলেজ যাও ভাই! প্রেম পরে করিস, আগে CGPA সামলাস 😎📚\n━━━━━━━━━━━━━━━"
  },
  "01:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n01:00:00 PM\n━━━━━━━━━━━━━━━\nবাচ্চারা স্কুল থেকে ফিরতেছে... মা রেডি হ!\n━━━━━━━━━━━━━━━"
  },
  "02:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n02:00:00 PM\n━━━━━━━━━━━━━━━\nLunch করসো তো? না হলে এক চড় খাবা 🥲🍛\n━━━━━━━━━━━━━━━"
  },
  "03:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n03:00:00 PM\n━━━━━━━━━━━━━━━\nএকটু ঘুমিয়ে নেই... কেউ miss করিস না 😴\n━━━━━━━━━━━━━━━"
  },
  "04:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n04:00:00 PM\n━━━━━━━━━━━━━━━\nমোবাইল ফেলে মাঠে যা! খেলা ধর দাদারা ⚽🛝\n━━━━━━━━━━━━━━━"
  },
  "05:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n05:00:00 PM\n━━━━━━━━━━━━━━━\nক্লাস শেষ! বাসায় ফিরে চা বানাও ☕🏠\n━━━━━━━━━━━━━━━"
  },
  "06:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n06:00:00 PM\n━━━━━━━━━━━━━━━\nEvening vibes 🌇\n━━━━━━━━━━━━━━━"
  },
  "07:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n07:00:00 PM\n━━━━━━━━━━━━━━━\nপড়তে বসো নইলে পরীক্ষায় কুইজের দুঃস্বপ্ন আসবে 😭\n━━━━━━━━━━━━━━━"
  },
  "08:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n08:00:00 PM\n━━━━━━━━━━━━━━━\nআমি ঘুমাই, তুমি পড়, দরকারে knock দিস 🌙📱\n━━━━━━━━━━━━━━━"
  },
  "09:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n09:00:00 PM\n━━━━━━━━━━━━━━━\nDinner করো... না হলে মা রেগে যাবে 🍽🥲\n━━━━━━━━━━━━━━━"
  },
  "10:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n10:00:00 PM\n━━━━━━━━━━━━━━━\nডিনার শেষ তো? এবার হালকা গল্প হোক 🛋\n━━━━━━━━━━━━━━━"
  },
  "11:00:00 PM": {
    "message": "━━━━━━━━━━━━━━━\n𝗡𝗼𝘄 𝘁𝗶𝗺𝗲 𝗶𝘀 \n11:00:00 PM\n━━━━━━━━━━━━━━━\nসবাই ঘুমায়...\nআমাকেও কেউ goodnight বলে না 😔💤\n━━━━━━━━━━━━━━━"
  }

};

module.exports.onStart = async ({ api, args, event }) => {
  const { threadID, messageID } = event;
  const prefix = global.utils.getPrefix(threadID);
  const links = loadJSON(linkFilePath, []);

  const subCommand = args[0];

  // Add video link
  if (subCommand === "addlink") {
    const link = args[1];
    if (!link || !link.startsWith("https://i.imgur.com") || !link.endsWith(".mp4")) {
      return api.sendMessage("❌ Valid Imgur .mp4 link required.", threadID, messageID);
    }

    if (links.includes(link)) {
      return api.sendMessage("⚠️ This link already exists.", threadID, messageID);
    }

    links.push(link);
    saveJSON(linkFilePath, links);
    return api.sendMessage(`✅ Link added! Total saved: ${links.length}`, threadID, messageID);
  }

  // Show current time and video for all groups
  if (subCommand === "currenttime") {
    const currentTime = moment().tz("Asia/Dhaka").format("hh:mm:ss A");
    const randomVideo = links.length > 0
      ? links[Math.floor(Math.random() * links.length)]
      : null;

    let message = `⏰ Current time: ${currentTime}`;

    if (randomVideo) {
      message += `\n🎥 Here's a video: ${randomVideo}`;
      try {
        const attachment = await global.utils.getStreamFromURL(randomVideo);
        return api.sendMessage({ body: message, attachment }, threadID, messageID);
      } catch (e) {
        console.error("⚠️ Failed to fetch video:", e.message);
        return api.sendMessage(`${message}\n❌ Failed to fetch video.`, threadID, messageID);
      }
    }

    return api.sendMessage(message, threadID, messageID);
  }

  return api.sendMessage(
    `📘 AutoTimer Commands:\n\n` +
    `• ${prefix}autotimer addlink <imgur_link> → Add video\n` +
    `• ${prefix}autotimer currenttime → Get current time in format used for scheduling\n\n` +
    `🧠 Video must be direct .mp4 Imgur link (like: https://i.imgur.com/abc123.mp4)`,
    threadID,
    messageID
  );
};

module.exports.onLoad = async ({ api }) => {
  const sendScheduledMessages = async () => {
    const now = moment().tz("Asia/Dhaka").format("hh:mm:ss A");

    if (timerData[now]) {
      const links = loadJSON(linkFilePath, []);
      const msgText = timerData[now].message;
      const randomLink = links.length > 0
        ? links[Math.floor(Math.random() * links.length)]
        : null;

      let msgData = { body: msgText };
      if (randomLink) {
        try {
          msgData.attachment = await global.utils.getStreamFromURL(randomLink);
        } catch (e) {
          console.error("⚠️ Failed to fetch video:", e.message);
        }
      }

      // Send message to all groups
      const allGroups = await api.getThreadList(100, null, ["INBOX"]);
      for (const group of allGroups) {
        await api.sendMessage(msgData, group.threadID);
      }
    }

    setTimeout(sendScheduledMessages, 1000);
  };

  sendScheduledMessages();
};