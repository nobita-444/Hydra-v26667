module.exports.config = {
  name: "autotimer",
  version: "2.0",
  role: 0,
  author: "Dipto",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3,
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
      "12:00:00 PM": {
        message: "ঘুমাবা না নাকি হে?",
        url: null
      },
      "01:00:00 AM": {
        message: "রোমাঞ্চকর পরিবেশে আর কত থাকবি ভাই ঘুমা এখন একটু 🥲🫣",
        url: null
      },
      "02:00:00 AM": {
        message: " ওরে ভাই তোর gf টা রে একটু ঘুমাইতে দে 🌟",
        url: null
      },
      "03:00:00 AM": {
        message: "ভাই সেবাই ঘুমাইয়া গেস নাকি? ",
        url: null
      },
      "04:00:00 AM": {
        message: "সবাই ঘুমাইয়া গেসে আর আমি একা একা বসে থেকে মসার কামোর খাই 😏 ",
        url: null
      },
      "05:00:00 AM": {
        message: "অই উঠ সবাই নাইলে তোদের কপালে খারাপি আছে ",
        url: null
      },
      "06:00:00 AM": {
        message: "সবাই উঠে পরতে বস আর জাদের কলেজ আছে তারা কলেজে উদ্দেশ্যে বের হও😇",
        url: null
      },
      "07:00:00 AM": {
        message: "সকালের নাস্তা করসো তো?? 🌟",
        url: null
      },
      "08:00:00 AM": {
        message: "অফিস টাইম হয়ে গেসে তো 🌟",
        url: null
      },
      "09:00:00 AM": {
        message: "সবাই চলে গেসে 😅 আমাকে ভুলে যেও না ",
        url: null
      },
      "10:00:00 AM": {
        message: "আমি ঘুমাই তুমরা এসে জাগিয়ে দিও",
        url: null
      },
      "11:00:00 AM": {
        message: "",
        url: null
      },
      "12:00:00 PM": {
        message: "ছেলেরা কলেজে জাও মেয়ে নিয়ে ঘুর কেন?",
        url: null
      },
      "01:00:00 PM": {
        message: "বাচ্চারা স্কুল থেকে ফিরার সময় হয়ে গিয়েছে",
        url: null
      },
      "02:00:00 PM": {
        message: "lunch করসো তো? 🌟",
        url: null
      },
      "03:00:00 PM": {
        message: "আমি আবার একটু ঘুমাই তুমাদের দরকার হলে মেসেজ দিও",
        url: null
      },
      "04:00:00 PM": {
        message: "বাচ্চারা মোবাইল রেখে মাঠে জাও খেলা ধুলা করো।🌟",
        url: null
      },
      "05:00:00 PM": {
        message: "কলেজ তো ছুটি বাসাউ জাও তারাতারি",
        url: null
      },
      "06:00:00 PM": {
        message: "নাস্তা করসো তো?",
        url: null
      },
      "07:00:00 PM": {
        message: "বাচ্চারা সবাই পরতে বসো🌟",
        url: null
      },
      "08:00:00 PM": {
        message: "আমি ঘুমা দরকারে মেসেজ দিও🌟",
        url: null
      },
      "09:00:00 PM": {
        message: "সবাই ডিনার করে নেও",
        url: null
      },
      "10:00:00 PM": {
        message: "ডিনার সেস করসো তো?",
        url: null
      },
      "11:00:00 PM": {
        message: "সবাই ঘুমানোর আয়োজন করেছে আমাকে কেও নেয় না  
😎😔😔😔",
        url: null
      }
  };
  if(timerData){
const checkTimeAndSendMessage = async() => { 
  const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).split(',').pop().trim(); 
  // const attachment = await global.utils.getStreamFromURL(timerData[currentTime].url);
  
    if (timerData[currentTime]) global.GoatBot.config.whiteListModeThread.whiteListThreadIds.forEach(async threadID => await api.sendMessage({body: timerData[currentTime].message/*, attachment*/}, threadID)); 
    setTimeout(checkTimeAndSendMessage, 1200 - new Date().getMilliseconds()); 
   }; 
  checkTimeAndSendMessage();
 }
};

module.exports.onStart = ({}) => {};
