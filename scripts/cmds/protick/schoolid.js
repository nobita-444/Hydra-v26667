const fs = require("fs-extra");
const axios = require("axios");
const { loadImage, createCanvas } = require("canvas");

module.exports = {
  config: {
    name: "schoolid",
    version: "1.0.0",
    author: "Priyansh Rajput",
    countDown: 0,
    role: 0,
    shortDescription: "Fake School ID",
    longDescription: "Generate a fake school ID with a user's name and profile picture.",
    category: "image",
    guide: {
      en: "{pn} @mention"
    }
  },

  wrapText: async function (ctx, name, maxWidth) {
    return new Promise(resolve => {
      if (ctx.measureText(name).width < maxWidth) return resolve([name]);
      if (ctx.measureText('W').width > maxWidth) return resolve(null);
      const words = name.split(' ');
      const lines = [];
      let line = '';
      while (words.length > 0) {
        let split = false;
        while (ctx.measureText(words[0]).width >= maxWidth) {
          const temp = words[0];
          words[0] = temp.slice(0, -1);
          if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
          else {
            split = true;
            words.splice(1, 0, temp.slice(-1));
          }
        }
        if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
        else {
          lines.push(line.trim());
          line = '';
        }
        if (words.length === 0) lines.push(line.trim());
      }
      return resolve(lines);
    });
  },

  onStart: async function ({ event, api, usersData }) {
    let pathImg = `${__dirname}/cache/background.png`;
    let pathAvt1 = `${__dirname}/cache/Avtmot.png`;

    let id = Object.keys(event.mentions)[0] || event.senderID;
    let name = await usersData.getName(id);

    let background = ["https://i.imgur.com/xJRXL3l.png"];
    let rd = background[Math.floor(Math.random() * background.length)];

    try {
      let getAvtmot = (
        await axios.get(
          `https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
          { responseType: "arraybuffer" }
        )
      ).data;
      fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));

      let getBackground = (await axios.get(rd, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(pathImg, Buffer.from(getBackground, "utf-8"));

      let baseImage = await loadImage(pathImg);
      let baseAvt1 = await loadImage(pathAvt1);

      let canvas = createCanvas(baseImage.width, baseImage.height);
      let ctx = canvas.getContext("2d");
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
      ctx.font = "400 23px Arial";
      ctx.fillStyle = "#1878F3";
      ctx.textAlign = "start";

      const lines = await this.wrapText(ctx, name, 200);
      ctx.fillText(lines.join('\n'), 270, 790);

      ctx.drawImage(baseAvt1, 168, 225, 360, 360);

      const imageBuffer = canvas.toBuffer();
      fs.writeFileSync(pathImg, imageBuffer);
      fs.removeSync(pathAvt1);

      return api.sendMessage(
        { body: "", attachment: fs.createReadStream(pathImg) },
        event.threadID,
        () => fs.unlinkSync(pathImg),
        event.messageID
      );
    } catch (error) {
      console.error(error);
      return api.sendMessage("An error occurred while generating the school ID.", event.threadID);
    }
  }
};