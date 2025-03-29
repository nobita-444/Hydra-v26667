module.exports = {
	config: {
		name: "onlyadminbox",
		aliases: ["onlyadbox", "adboxonly", "adminboxonly"],
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		shortDescription: {
			vi: "bật/tắt chỉ admin box sử dụng bot",
			en: "turn on/off only admin box can use bot"
		},
		longDescription: {
			vi: "bật/tắt chế độ chỉ quản trị của viên nhóm mới có thể sử dụng bot",
			en: "turn on/off only admin box can use bot"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} [on | off]: bật/tắt chế độ chỉ quản trị viên nhóm mới có thể sử dụng bot"
				+ "\n   {pn} noti [on | off]: bật/tắt thông báo khi người dùng không phải là quản trị viên nhóm sử dụng bot",
			en: "   {pn} [on | off]: turn on/off the mode only admin of group can use bot"
				+ "\n   {pn} noti [on | off]: turn on/off the notification when user is not admin of group use bot"
		}
	},

	langs: {
		vi: {
			turnedOn: "Đã bật chế độ chỉ quản trị viên nhóm mới có thể sử dụng bot",
			turnedOff: "Đã tắt chế độ chỉ quản trị viên nhóm mới có thể sử dụng bot",
			turnedOnNoti: "Đã bật thông báo khi người dùng không phải là quản trị viên nhóm sử dụng bot",
			turnedOffNoti: "Đã tắt thông báo khi người dùng không phải là quản trị viên nhóm sử dụng bot",
			syntaxError: "Sai cú pháp, chỉ có thể dùng {pn} on hoặc {pn} off"
		},
		en: {
			turnedOn: "\n┏━━━━━━━━━━━━━━🔒━━━━━━━━━━━━━━┓\n┃ ✅ **𝐌𝐨𝐝𝐞 𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝:** Only **𝐀𝐝𝐦𝐢𝐧𝐬** of the group can use the bot.\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			
			turnedOff: "\n┏━━━━━━━━━━━━━━🔓━━━━━━━━━━━━━━┓\n┃ ❎ **𝐌𝐨𝐝𝐞 𝐃𝐞𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝:** All members can use the bot.\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			
			turnedOnNoti: "\n┏━━━━━━━━━━━━━━🔔━━━━━━━━━━━━━━┓\n┃ ✅ **𝐍𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝:** Alert when a non-admin tries to use the bot.\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			
			turnedOffNoti: "\n┏━━━━━━━━━━━━━━🔕━━━━━━━━━━━━━━┓\n┃ ❎ **𝐍𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐃𝐞𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝:** No alerts for non-admin bot usage.\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
			
			syntaxError: "\n┏━━━━━━━━━━━━━━🚫━━━━━━━━━━━━━━┓\n┃ ⚠️ **𝐒𝐲𝐧𝐭𝐚𝐱 𝐄𝐫𝐫𝐨𝐫:** Please use **{pn} on** or **{pn} off** only.\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"
		      }
		      
	},

	onStart: async function ({ args, message, event, threadsData, getLang }) {
		let isSetNoti = false;
		let value;
		let keySetData = "data.onlyAdminBox";
		let indexGetVal = 0;

		if (args[0] == "noti") {
			isSetNoti = true;
			indexGetVal = 1;
			keySetData = "data.hideNotiMessageOnlyAdminBox";
		}

		if (args[indexGetVal] == "on")
			value = true;
		else if (args[indexGetVal] == "off")
			value = false;
		else
			return message.reply(getLang("syntaxError"));

		await threadsData.set(event.threadID, isSetNoti ? !value : value, keySetData);

		if (isSetNoti)
			return message.reply(value ? getLang("turnedOnNoti") : getLang("turnedOffNoti"));
		else
			return message.reply(value ? getLang("turnedOn") : getLang("turnedOff"));
	}
};