const { config } = global.GoatBot;
const { writeFileSync } = require("fs-extra");

module.exports = {
	config: {
		name: "admin",
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "Thêm, xóa, sửa quyền admin",
			en: "Add, remove, edit admin role"
		},
		longDescription: {
			vi: "Thêm, xóa, sửa quyền admin",
			en: "Add, remove, edit admin role"
		},
		category: "tools",
		guide: {
			vi: '   {pn} [add | -a] <uid | @tag>: Thêm quyền admin cho người dùng'
				+ '\n	  {pn} [remove | -r] <uid | @tag>: Xóa quyền admin của người dùng'
				+ '\n	  {pn} [list | -l]: Liệt kê danh sách admin',
			en: '   {pn} [add | -a] <uid | @tag>: Add admin role for user'
				+ '\n	  {pn} [remove | -r] <uid | @tag>: Remove admin role of user'
				+ '\n	  {pn} [list | -l]: List all admins'
		}
	},

	langs: {
		vi: {
			added: "✅ | Đã thêm quyền admin cho %1 người dùng:\n%2",
			alreadyAdmin: "\n⚠ | %1 người dùng đã có quyền admin từ trước rồi:\n%2",
			missingIdAdd: "⚠ | Vui lòng nhập ID hoặc tag người dùng muốn thêm quyền admin",
			removed: "✅ | Đã xóa quyền admin của %1 người dùng:\n%2",
			notAdmin: "⚠ | %1 người dùng không có quyền admin:\n%2",
			missingIdRemove: "⚠ | Vui lòng nhập ID hoặc tag người dùng muốn xóa quyền admin",
			listAdmin: "👑 | Danh sách admin:\n%1"
		},
		en: {
			added: "\n┏━━━━━━━━━━━━━━👑━━━━━━━━━━━━━━┓\n┃ ✅ **𝐀𝐝𝐦𝐢𝐧 𝐑𝐨𝐥𝐞 𝐀𝐬𝐬𝐢𝐠𝐧𝐞𝐝**\n┃ 🔹 **Users Added:** %1\n%2\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			
			alreadyAdmin: "\n┏━━━━━━━━━━━━━━⚠️━━━━━━━━━━━━━━┓\n┃ ⚠ **𝐀𝐥𝐫𝐞𝐚𝐝𝐲 𝐀𝐝𝐦𝐢𝐧𝐬**\n┃ 🔹 **Users:** %1\n%2\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			
			missingIdAdd: "\n┏━━━━━━━━━━━━━━🚨━━━━━━━━━━━━━━┓\n┃ ⚠ **𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐀𝐜𝐭𝐢𝐨𝐧**\n┃ 🔹 Please enter **𝐈𝐃** or tag a user to add admin role.\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			
			removed: "\n┏━━━━━━━━━━━━━━🔻━━━━━━━━━━━━━━┓\n┃ ✅ **𝐀𝐝𝐦𝐢𝐧 𝐑𝐨𝐥𝐞 𝐑𝐞𝐦𝐨𝐯𝐞𝐝**\n┃ 🔹 **Users Removed:** %1\n%2\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			
			notAdmin: "\n┏━━━━━━━━━━━━━━❌━━━━━━━━━━━━━━┓\n┃ ⚠ **𝐍𝐨𝐭 𝐀𝐧 𝐀𝐝𝐦𝐢𝐧**\n┃ 🔹 **Users:** %1\n%2\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			
			missingIdRemove: "\n┏━━━━━━━━━━━━━━🚨━━━━━━━━━━━━━━┓\n┃ ⚠ **𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐀𝐜𝐭𝐢𝐨𝐧**\n┃ 🔹 Please enter **𝐈𝐃** or tag a user to remove admin role.\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			
			listAdmin: "\n┏━━━━━━━━━━━━━━📑━━━━━━━━━━━━━━┓\n┃ ♔ **𝐀𝐝𝐦𝐢𝐧𝐬 𝐋𝐢𝐬𝐭 - 𝗞𝗶𝗻𝗴 & 𝗤𝘂𝗲𝗲𝗻♕︎**\n%1\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"
		      }
		      
	},

	onStart: async function ({ message, args, usersData, event, getLang }) {
		switch (args[0]) {
			case "add":
			case "-a": {
				if (args[1]) {
					let uids = [];
					if (Object.keys(event.mentions).length > 0)
						uids = Object.keys(event.mentions);
					else if (event.messageReply)
						uids.push(event.messageReply.senderID);
					else
						uids = args.filter(arg => !isNaN(arg));
					const notAdminIds = [];
					const adminIds = [];
					for (const uid of uids) {
						if (config.adminBot.includes(uid))
							adminIds.push(uid);
						else
							notAdminIds.push(uid);
					}

					config.adminBot.push(...notAdminIds);
					const getNames = await Promise.all(uids.map(uid => usersData.getName(uid).then(name => ({ uid, name }))));
					writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));
					return message.reply(
						(notAdminIds.length > 0 ? getLang("added", notAdminIds.length, getNames.map(({ uid, name }) => `• ${name} (${uid})`).join("\n")) : "")
						+ (adminIds.length > 0 ? getLang("alreadyAdmin", adminIds.length, adminIds.map(uid => `• ${uid}`).join("\n")) : "")
					);
				}
				else
					return message.reply(getLang("missingIdAdd"));
			}
			case "remove":
			case "-r": {
				if (args[1]) {
					let uids = [];
					if (Object.keys(event.mentions).length > 0)
						uids = Object.keys(event.mentions)[0];
					else
						uids = args.filter(arg => !isNaN(arg));
					const notAdminIds = [];
					const adminIds = [];
					for (const uid of uids) {
						if (config.adminBot.includes(uid))
							adminIds.push(uid);
						else
							notAdminIds.push(uid);
					}
					for (const uid of adminIds)
						config.adminBot.splice(config.adminBot.indexOf(uid), 1);
					const getNames = await Promise.all(adminIds.map(uid => usersData.getName(uid).then(name => ({ uid, name }))));
					writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));
					return message.reply(
						(adminIds.length > 0 ? getLang("removed", adminIds.length, getNames.map(({ uid, name }) => `• ${name} (${uid})`).join("\n")) : "")
						+ (notAdminIds.length > 0 ? getLang("notAdmin", notAdminIds.length, notAdminIds.map(uid => `• ${uid}`).join("\n")) : "")
					);
				}
				else
					return message.reply(getLang("missingIdRemove"));
			}
			case "list":
			case "-l": {
				const getNames = await Promise.all(config.adminBot.map(uid => usersData.getName(uid).then(name => ({ uid, name }))));
				return message.reply(getLang("listAdmin", getNames.map(({ uid, name }) => `• ${name} (${uid})`).join("\n")));
			}
			default:
				return message.SyntaxError();
		}
	}
};