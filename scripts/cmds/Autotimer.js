module.exports.config = {
  name: "autotimer",
  version: "2.6",
  role: 0,
  author: "Xrotick",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3,
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
    "12:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  ঘুমোতে মন চায় না নাকি? Netflix শেষ হয় না বুঝি? 😴📺
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "01:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  এই রাতের বেলা রোমাঞ্চ না করে ঘুমা 🫣🌌
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "02:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  ভাই! তোর Gf এখন ঘুমায়, তুইও ঘুমা 😪❤️
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "03:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  তুই কি Owl নাকি? এখনো জাগোস? 🦉
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "04:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  সবাই ঘুমায়, আর আমি? মশা মারি 🦟😑
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "05:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  ওই ঘুমকাতুরে! সকাল হইছে, উঠে পড়! ⏰🔥
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "06:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  ছাত্র ভাই/বোনেরা, উঠে বই নাও! 📖
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "07:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  নাস্তা করবা না? না করলে রাগ করবো 😤🥪
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "08:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  অফিসে দেরি হইতেছে! Boss রেডি বাইরায় 😅💼
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "09:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  তুই আর আমি ছাড়া সবাই ব্যস্ত 😔 আমাকেও ভুলে যাস না
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "10:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  আমারও একটু ঘুম দরকার... ডাক দিস 💤
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "11:00:00 AM": {
      message: `━━━━━━━━━━━━━━━
  ঘুমে তলিয়ে যাচ্ছি... হালকা হালকা চায়ে মন বসে 🍵
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "12:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  কলেজ যাও ভাই! প্রেম পরে করিস, আগে CGPA সামলাস 😎📚
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "01:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  বাচ্চারা স্কুল থেকে ফিরতেছে... মা রেডি হ!
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "02:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  Lunch করসো তো? না হলে এক চড় খাবা 🥲🍛
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "03:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  একটু ঘুমিয়ে নেই... কেউ miss করিস না 😴
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "04:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  মোবাইল ফেলে মাঠে যা! খেলা ধর দাদারা ⚽🛝
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "05:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  ক্লাস শেষ! বাসায় ফিরে চা বানাও ☕🏠
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "06:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  Evening snack time! Singara কোথায়? 🥟✨
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "07:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  পড়তে বসো নইলে পরীক্ষায় কুইজের দুঃস্বপ্ন আসবে 😭
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "08:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  আমি ঘুমাই, তুমি পড়, দরকারে knock দিস 🌙📱
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "09:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  Dinner করো... না হলে মা রেগে যাবে 🍽️🥲
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "10:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  ডিনার শেষ তো? এবার হালকা গল্প হোক 🛋️
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    "11:00:00 PM": {
      message: `━━━━━━━━━━━━━━━
  সবাই ঘুমায়... আমাকেও কেউ goodnight বলে না 😔💤
  ━━━━━━━━━━━━━━━`,
      url: null
    },
    defaultMessage: (time) => `━━━━━━━━━━━━━━━
  এই মুহূর্তে কিছু বলার নাই 🫠
  🕒 সময়: ${time}
  ━━━━━━━━━━━━━━━`
  };

  if (timerData) {
    const checkTimeAndSendMessage = async () => {
      const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      }).split(",").pop().trim();

      if (timerData[currentTime]) {
        global.GoatBot.config.whiteListModeThread.whiteListThreadIds.forEach(async (threadID) => {
          await api.sendMessage(
            { body: timerData[currentTime].message },
            threadID
          );
        });
      }

      setTimeout(checkTimeAndSendMessage, 1200 - new Date().getMilliseconds());
    };

    checkTimeAndSendMessage();
  }
};

module.exports.onStart = ({}) => {};