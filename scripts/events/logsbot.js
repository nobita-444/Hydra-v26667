const { getTime } = global.utils;

module.exports = {
	config: {
		name: "logsbot",
		isBot: true,
		version: "1.4",
		author: "NTKhang",
		envConfig: {
			allow: true
		},
		category: "events"
	},

	langs: {
		vi: {
			title: "====== Nhật ký bot ======",
			added: "\n✅\nSự kiện: bot được thêm vào nhóm mới\n- Người thêm: %1",
			kicked: "\n❌\nSự kiện: bot bị kick\n- Người kick: %1",
			footer: "\n- User ID: %1\n- Nhóm: %2\n- ID nhóm: %3\n- Thời gian: %4"
		},
		en: {
			title: "🌟✨ 𝕭𝖔𝖙 𝕷𝖔𝖌𝖘 ✨🌟",
			added: "\n┏━━━━━━━━━━━━━━━✅━━━━━━━━━━━━━━━┓\n┃ **𝐄𝐯𝐞𝐧𝐭:** 𝗕𝗼𝘁 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗮𝗱𝗱𝗲𝗱 𝘁𝗼 𝗮 𝗻𝗲𝘄 𝗴𝗿𝗼𝘂𝗽\n┃ 👤 **𝐀𝐝𝐝𝐞𝐝 𝐛𝐲:** %1\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			kicked: "\n┏━━━━━━━━━━━━━━━❌━━━━━━━━━━━━━━━┓\n┃ **𝐄𝐯𝐞𝐧𝐭:** 𝗕𝗼𝘁 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗸𝗶𝗰𝗸𝗲𝗱\n┃ 👢 **𝐊𝐢𝐜𝐤𝐞𝐝 𝐛𝐲:** %1\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			footer: "\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n┃ 🆔 **𝐔𝐬𝐞𝐫 𝐈𝐃:** %1\n┃ 🏷️ **𝐆𝐫𝐨𝐮𝐩:** %2\n┃ 🆔 **𝐆𝐫𝐨𝐮𝐩 𝐈𝐃:** %3\n┃ ⏰ **𝐓𝐢𝐦𝐞:** %4\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"
		      }
	},

	onStart: async ({ usersData, threadsData, event, api, getLang }) => {
		if (
			(event.logMessageType == "log:subscribe" && event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
			|| (event.logMessageType == "log:unsubscribe" && event.logMessageData.leftParticipantFbId == api.getCurrentUserID())
		) return async function () {
			let msg = getLang("title");
			const { author, threadID } = event;
			if (author == api.getCurrentUserID())
				return;
			let threadName;
			const { config } = global.GoatBot;

			if (event.logMessageType == "log:subscribe") {
				if (!event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
					return;
				threadName = (await api.getThreadInfo(threadID)).threadName;
				const authorName = await usersData.getName(author);
				msg += getLang("added", authorName);
			}
			else if (event.logMessageType == "log:unsubscribe") {
				if (event.logMessageData.leftParticipantFbId != api.getCurrentUserID())
					return;
				const authorName = await usersData.getName(author);
				const threadData = await threadsData.get(threadID);
				threadName = threadData.threadName;
				msg += getLang("kicked", authorName);
			}
			const time = getTime("DD/MM/YYYY HH:mm:ss");
			msg += getLang("footer", author, threadName, threadID, time);

			for (const adminID of config.adminBot)
				api.sendMessage(msg, adminID);
		};
	}
};