const { getTime } = global.utils;

module.exports = {
	config: {
		name: "user",
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "Quản lý người dùng",
			en: "Manage users"
		},
		longDescription: {
			vi: "Quản lý người dùng trong hệ thống bot",
			en: "Manage users in bot system"
		},
		category: "owner",
		guide: {
			vi: "   {pn} [find | -f | search | -s] <tên cần tìm>: tìm kiếm người dùng trong dữ liệu bot bằng tên"
				+ "\n"
				+ "\n   {pn} [ban | -b] [<uid> | @tag | reply tin nhắn] <reason>: để cấm người dùng mang id <uid> hoặc người được tag hoặc người gửi của tin nhắn được reply sử dụng bot"
				+ "\n"
				+ "\n   {pn} unban [<uid> | @tag | reply tin nhắn]: để bỏ cấm người dùng sử dụng bot",
			en: "   {pn} [find | -f | search | -s] <name to find>: search for users in bot data by name"
				+ "\n"
				+ "\n   {pn} [ban | -b] [<uid> | @tag | reply message] <reason>: to ban user with id <uid> or tagged user or sender of message replied using bot"
				+ "\n"
				+ "\n   {pn} unban [<uid> | @tag | reply message]: to unban user using bot"
		}
	},

	langs: {
		vi: {
			noUserFound: "❌ Không tìm thấy người dùng nào có tên khớp với từ khóa: \"%1\" trong dữ liệu của bot",
			userFound: "🔎 Tìm thấy %1 người dùng có tên trùng với từ khóa \"%2\" trong dữ liệu của bot:\n%3",
			uidRequired: "Uid của người cần ban không được để trống, vui lòng nhập uid hoặc tag hoặc reply tin nhắn của 1 người theo cú pháp user ban <uid> <lý do>",
			reasonRequired: "Lý do ban người dùng không được để trống, vui lòng nhập uid hoặc tag hoặc reply tin nhắn của 1 người theo cú pháp user ban <uid> <lý do>",
			userHasBanned: "Người dùng mang id [%1 | %2] đã bị cấm từ trước:\n» Lý do: %3\n» Thời gian: %4",
			userBanned: "Đã cấm người dùng mang id [%1 | %2] sử dụng bot.\n» Lý do: %3\n» Thời gian: %4",
			uidRequiredUnban: "Uid của người cần unban không được để trống",
			userNotBanned: "Hiện tại người dùng mang id [%1 | %2] không bị cấm sử dụng bot",
			userUnbanned: "Đã bỏ cấm người dùng mang id [%1 | %2], hiện tại người này có thể sử dụng bot"
		},
		en: {
			border: "──────────────────",
		      
			noUserFound: "──────────────────\n❌ | 𝐍𝐨 𝐮𝐬𝐞𝐫 𝐟𝐨𝐮𝐧𝐝 𝐰𝐢𝐭𝐡 𝐧𝐚𝐦𝐞 𝐦𝐚𝐭𝐜𝐡𝐢𝐧𝐠 𝐤𝐞𝐲𝐰𝐨𝐫𝐝: \"%1\"\n──────────────────",
		      
			userFound: "──────────────────\n🔎 | 𝐅𝐨𝐮𝐧𝐝 %1 𝐮𝐬𝐞𝐫𝐬 𝐰𝐢𝐭𝐡 𝐧𝐚𝐦𝐞 𝐦𝐚𝐭𝐜𝐡𝐢𝐧𝐠 𝐤𝐞𝐲𝐰𝐨𝐫𝐝 \"%2\":\n%3\n──────────────────",
		      
			uidRequired: "──────────────────\n⚠️ | 𝐔𝐢𝐝 𝐨𝐟 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐛𝐚𝐧 𝐜𝐚𝐧𝐧𝐨𝐭 𝐛𝐞 𝐞𝐦𝐩𝐭𝐲. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐮𝐢𝐝 𝐨𝐫 𝐭𝐚𝐠 𝐨𝐫 𝐫𝐞𝐩𝐥𝐲 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐨𝐟 𝐨𝐧𝐞 𝐮𝐬𝐞𝐫 𝐛𝐲 𝐮𝐬𝐢𝐧𝐠: user ban <𝐮𝐢𝐝> <𝐫𝐞𝐚𝐬𝐨𝐧>\n──────────────────",
		      
			reasonRequired: "──────────────────\n⚠️ | 𝐑𝐞𝐚𝐬𝐨𝐧 𝐭𝐨 𝐛𝐚𝐧 𝐮𝐬𝐞𝐫 𝐜𝐚𝐧𝐧𝐨𝐭 𝐛𝐞 𝐞𝐦𝐩𝐭𝐲. 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐮𝐢𝐝 𝐨𝐫 𝐭𝐚𝐠 𝐨𝐫 𝐫𝐞𝐩𝐥𝐲 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐨𝐟 𝐨𝐧𝐞 𝐮𝐬𝐞𝐫 𝐛𝐲 𝐮𝐬𝐢𝐧𝐠: user ban <𝐮𝐢𝐝> <𝐫𝐞𝐚𝐬𝐨𝐧>\n──────────────────",
		      
			userHasBanned: "──────────────────\n🚫 | 𝐔𝐬𝐞𝐫 𝐰𝐢𝐭𝐡 𝐢𝐝 [%1 | %2] 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐛𝐚𝐧𝐧𝐞𝐝 𝐛𝐞𝐟𝐨𝐫𝐞:\n» 𝐑𝐞𝐚𝐬𝐨𝐧: %3\n» 𝐃𝐚𝐭𝐞: %4\n──────────────────",
		      
			userBanned: "──────────────────\n🚫 | 𝐔𝐬𝐞𝐫 𝐰𝐢𝐭𝐡 𝐢𝐝 [%1 | %2] 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐛𝐚𝐧𝐧𝐞𝐝:\n» 𝐑𝐞𝐚𝐬𝐨𝐧: %3\n» 𝐃𝐚𝐭𝐞: %4\n──────────────────",
		      
			uidRequiredUnban: "──────────────────\n⚠️ | 𝐔𝐢𝐝 𝐨𝐟 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐮𝐧𝐛𝐚𝐧 𝐜𝐚𝐧𝐧𝐨𝐭 𝐛𝐞 𝐞𝐦𝐩𝐭𝐲.\n──────────────────",
		      
			userNotBanned: "──────────────────\n✅ | 𝐔𝐬𝐞𝐫 𝐰𝐢𝐭𝐡 𝐢𝐝 [%1 | %2] 𝐢𝐬 𝐧𝐨𝐭 𝐛𝐚𝐧𝐧𝐞𝐝.\n──────────────────",
		      
			userUnbanned: "──────────────────\n✅ | 𝐔𝐬𝐞𝐫 𝐰𝐢𝐭𝐡 𝐢𝐝 [%1 | %2] 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐮𝐧𝐛𝐚𝐧𝐧𝐞𝐝.\n──────────────────"
		      }
		      
	},

	onStart: async function ({ args, usersData, message, event, prefix, getLang }) {
		const type = args[0];
		switch (type) {
			// find user
			case "find":
			case "-f":
			case "search":
			case "-s": {
				const allUser = await usersData.getAll();
				const keyWord = args.slice(1).join(" ");
				const result = allUser.filter(item => (item.name || "").toLowerCase().includes(keyWord.toLowerCase()));
				const msg = result.reduce((i, user) => i += `\n╭Name: ${user.name}\n╰ID: ${user.userID}`, "");
				message.reply(result.length == 0 ? getLang("noUserFound", keyWord) : getLang("userFound", result.length, keyWord, msg));
				break;
			}
			// ban user
			case "ban":
			case "-b": {
				let uid, reason;
				if (event.type == "message_reply") {
					uid = event.messageReply.senderID;
					reason = args.slice(1).join(" ");
				}
				else if (Object.keys(event.mentions).length > 0) {
					const { mentions } = event;
					uid = Object.keys(mentions)[0];
					reason = args.slice(1).join(" ").replace(mentions[uid], "");
				}
				else if (args[1]) {
					uid = args[1];
					reason = args.slice(2).join(" ");
				}
				else return message.SyntaxError();

				if (!uid)
					return message.reply(getLang("uidRequired"));
				if (!reason)
					return message.reply(getLang("reasonRequired", prefix));
				reason = reason.replace(/\s+/g, ' ');

				const userData = await usersData.get(uid);
				const name = userData.name;
				const status = userData.banned.status;

				if (status)
					return message.reply(getLang("userHasBanned", uid, name, userData.banned.reason, userData.banned.date));
				const time = getTime("DD/MM/YYYY HH:mm:ss");
				await usersData.set(uid, {
					banned: {
						status: true,
						reason,
						date: time
					}
				});
				message.reply(getLang("userBanned", uid, name, reason, time));
				break;
			}
			// unban user
			case "unban":
			case "-u": {
				let uid;
				if (event.type == "message_reply") {
					uid = event.messageReply.senderID;
				}
				else if (Object.keys(event.mentions).length > 0) {
					const { mentions } = event;
					uid = Object.keys(mentions)[0];
				}
				else if (args[1]) {
					uid = args[1];
				}
				else
					return message.SyntaxError();
				if (!uid)
					return message.reply(getLang("uidRequiredUnban"));
				const userData = await usersData.get(uid);
				const name = userData.name;
				const status = userData.banned.status;
				if (!status)
					return message.reply(getLang("userNotBanned", uid, name));
				await usersData.set(uid, {
					banned: {}
				});
				message.reply(getLang("userUnbanned", uid, name));
				break;
			}
			default:
				return message.SyntaxError();
		}
	}
};