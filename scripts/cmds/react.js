module.exports = {
    config: {
        name: "autoreact",
		      version: "1.0",
	       	author: "Loid Butter",
		      countDown: 5,
	       	role: 0,
		      shortDescription: "",
	       	longDescription: "",
		       category: "dont know ",
    },
	onStart: async function (){},
	onChat: async function ({ event ,api}) {
		if (event.body.toLowerCase().indexOf("iloveyou") !== -1) return api.setMessageReaction("💗", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("good night") !== -1) return api.setMessageReaction("💗", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("good morning") !== -1) return api.setMessageReaction("😆", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("good afternoon") !== -1) return api.setMessageReaction("❤", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("good evening") !== -1) return api.setMessageReaction("❤", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("pakyo") !== -1) return api.setMessageReaction("🤬", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("tangina") !== -1) return api.setMessageReaction("😡", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("gago") !== -1) return api.setMessageReaction("😡", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("mahal") !== -1) return api.setMessageReaction("💗", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("mwa") !== -1) return api.setMessageReaction("💗", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("😢") !== -1) return api.setMessageReaction("😢", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("😆") !== -1) return api.setMessageReaction("😆", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("😂") !== -1) return api.setMessageReaction("😆", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("🤣") !== -1) return api.setMessageReaction("😆", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("congrats") !== -1) return api.setMessageReaction("🎉", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("happy birthday") !== -1) return api.setMessageReaction("🎂", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("sad") !== -1) return api.setMessageReaction("😢", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("lol") !== -1) return api.setMessageReaction("😂", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("hahaha") !== -1) return api.setMessageReaction("🤣", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("wow") !== -1) return api.setMessageReaction("😲", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("thank you") !== -1) return api.setMessageReaction("🙏", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("thanks") !== -1) return api.setMessageReaction("🙏", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("sorry") !== -1) return api.setMessageReaction("😔", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("love you") !== -1) return api.setMessageReaction("💖", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("miss you") !== -1) return api.setMessageReaction("😢", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("angry") !== -1) return api.setMessageReaction("😡", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("no way") !== -1) return api.setMessageReaction("😱", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("damn") !== -1) return api.setMessageReaction("😳", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("hell no") !== -1) return api.setMessageReaction("😡", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("beautiful") !== -1) return api.setMessageReaction("😍", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("ugly") !== -1) return api.setMessageReaction("😒", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("hello") !== -1) return api.setMessageReaction("👋", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("hi") !== -1) return api.setMessageReaction("👋", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("bye") !== -1) return api.setMessageReaction("👋", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("goodbye") !== -1) return api.setMessageReaction("👋", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("lit") !== -1) return api.setMessageReaction("🔥", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("cool") !== -1) return api.setMessageReaction("😎", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("lmao") !== -1) return api.setMessageReaction("🤣", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("omg") !== -1) return api.setMessageReaction("😱", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("wtf") !== -1) return api.setMessageReaction("🤯", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("bro") !== -1) return api.setMessageReaction("😎", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("sis") !== -1) return api.setMessageReaction("😇", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("ouch") !== -1) return api.setMessageReaction("😖", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("wow") !== -1) return api.setMessageReaction("😲", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("bored") !== -1) return api.setMessageReaction("🥱", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("tired") !== -1) return api.setMessageReaction("😴", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("help") !== -1) return api.setMessageReaction("🆘", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("yawn") !== -1) return api.setMessageReaction("🥱", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("clap") !== -1) return api.setMessageReaction("👏", event.messageID, event.threadID);

if (event.body.toLowerCase().indexOf("damn") !== -1) return api.setMessageReaction("😳", event.messageID, event.threadID);
}
};