module.exports = {
	config: {
		name: "checkwarn",
		version: "1.3",
		author: "NTKhang",
		category: "events"
	},

	langs: {
		vi: {
			warn: "Thành viên %1 đã bị cảnh cáo đủ 3 lần trước đó và bị ban khỏi box chat\n- Name: %1\n- Uid: %2\n- Để gỡ ban vui lòng sử dụng lệnh \"%3warn unban <uid>\" (với uid là uid của người muốn gỡ ban)",
			needPermission: "Bot cần quyền quản trị viên để kick thành viên bị ban"
		},
		en: {
			warn: "\n┏━━━━━━━━━━━━━━⚠️━━━━━━━━━━━━━━┓\n┃ 🚫 **𝐖𝐚𝐫𝐧𝐢𝐧𝐠:** Member %1 has been warned 3 times and has been **𝐛𝐚𝐧𝐧𝐞𝐝** from the chat box.\n┃ 📝 **𝐍𝐚𝐦𝐞:** %1\n┃ 🆔 **𝐔𝐢𝐝:** %2\n┃ 💡 **𝐓𝐨 𝐮𝐧𝐛𝐚𝐧:** Use the command:\n┃ \"%3warn unban <uid>\" (replace `<uid>` with the person’s ID)\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
    
			needPermission: "\n┏━━━━━━━━━━━━━━🔐━━━━━━━━━━━━━━┓\n┃ ❌ **𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐄𝐫𝐫𝐨𝐫:** Bot needs **𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐭𝐨𝐫 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧** to kick banned members.\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"
		      }
	},

	onStart: async ({ threadsData, message, event, api, client, getLang }) => {
		if (event.logMessageType == "log:subscribe")
			return async function () {
				const { threadID } = event;
				const { data } = await threadsData.get(event.threadID);
				const { warn: warnList } = data;
				if (!warnList)
					return;
				const { addedParticipants } = event.logMessageData;
				for (const user of addedParticipants) {
					const findUser = warnList.find(user => user.userID == user.userID);
					if (findUser && findUser.list >= 3) {
						const userName = user.fullName;
						const uid = user.userFbId;
						message.send({
							body: getLang("warn", userName, uid, client.getPrefix(threadID)),
							mentions: [{
								tag: userName,
								id: uid
							}]
						}, function () {
							api.removeUserFromGroup(uid, threadID, (err) => {
								if (err)
									return message.send(getLang("needPermission"));
							});
						});
					}
				}
			};
	}
};