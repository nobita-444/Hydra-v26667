const axios = require('axios'); 
const baseApiUrl = async () => {   
  return "https://www.noobs-api.rf.gd/dipto"; 
};

module.exports.config = {   
  name: "bby",   
  aliases: ["baby", "bbe", "babe"],   
  version: "6.9.0",   
  author: "dipto",   
  countDown: 0,   
  role: 0,   
  description: "better than all sim simi",   
  category: "chat",   
  guide: {     
    en: "{pn} [anyMessage] OR\nteach [YourMessage] - [Reply1], [Reply2], [Reply3]... OR\nteach [react] [YourMessage] - [react1], [react2], [react3]... OR\nremove [YourMessage] OR\nrm [YourMessage] - [indexNumber] OR\nmsg [YourMessage] OR\nlist OR \nall OR\nedit [YourMessage] - [NewMessage]"   
  } 
};

module.exports.onStart = async ({ api, event, args, usersData }) => {   
  const link = `${await baseApiUrl()}/baby`;   
  const dipto = args.join(" ").toLowerCase();   
  const uid = event.senderID;   
  let command, comd, final;    

  try {     
    if (!args[0]) {       
      const ran = ["Bolo baby", "hum", "type help baby", "type !baby hi"];       
      return api.sendMessage(ran[Math.floor(Math.random() * ran.length)], event.threadID, event.messageID);     
    }

    if (dipto.includes('amar name ki') || dipto.includes('amr nam ki') || dipto.includes('amar nam ki') || dipto.includes('amr name ki') || dipto.includes('whats my name')) {       
      const data = (await axios.get(`${link}?text=amar name ki&senderID=${uid}&key=intro`)).data.reply;       
      return api.sendMessage(data, event.threadID, event.messageID);     
    }

    const d = (await axios.get(`${link}?text=${dipto}&senderID=${uid}&font=1`)).data.reply;     
    api.sendMessage(d, event.threadID, (error, info) => {       
      global.GoatBot.onReply.set(info.messageID, {         
        commandName: this.config.name,         
        type: "reply",         
        messageID: info.messageID,         
        author: event.senderID,         
        d,          
        apiUrl: link       
      });     
    }, event.messageID);    

  } catch (e) {     
    console.log(e);     
    api.sendMessage("Check console for error", event.threadID, event.messageID);   
  } 
};

module.exports.onReply = async ({ api, event, Reply }) => {   
  try {   
    if (event.type == "message_reply") {     
      const a = (await axios.get(`${await baseApiUrl()}/baby?text=${encodeURIComponent(event.body?.toLowerCase())}&senderID=${event.senderID}&font=1`)).data.reply;     
      await api.sendMessage(a, event.threadID, (error, info) => {       
        global.GoatBot.onReply.set(info.messageID, {         
          commandName: this.config.name,         
          type: "reply",         
          messageID: info.messageID,         
          author: event.senderID,         
          a       
        });     
      }, event.messageID);   
    }   
  } catch (err) {     
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);   
  } 
};

module.exports.onChat = async ({ api, event }) => {   
  try {     
    const body = event.body ? event.body.toLowerCase() : "";     

    if (body.startsWith("bby") || body.startsWith("hi") || body.startsWith("janu") || body.startsWith("bot") || body.startsWith("hydra") || body.startsWith("kire")) {       
      const arr = body.replace(/^\S+\s*/, "");       

      const funnyLines = [
        "হ্যাঁরে ভাই, আমিতো এখানেই আছি, একটু হাওয়া খাচ্ছিলাম!",
        "বলো কী দরকার, আবার ভুলে যাবার আগেই বলো!",
        "ওই তো আছি, শুধু এক কাপ চা হলেই ভালো লাগতো!",
        "এতো ডাকছো কেন? কানে ফোন আছে, শুনতে পাচ্ছি!",
        "বলো বলো, আমি তো আর ভূত না যে হারিয়ে যাবো!"
      ];

      if (!arr) {         
        api.sendMessage(funnyLines[Math.floor(Math.random() * funnyLines.length)], event.threadID, (error, info) => {           
          global.GoatBot.onReply.set(info.messageID, {             
            commandName: this.config.name,             
            type: "reply",             
            messageID: info.messageID,             
            author: event.senderID           
          });         
        }, event.messageID);       
      } else {         
        const a = (await axios.get(`${await baseApiUrl()}/baby?text=${encodeURIComponent(arr)}&senderID=${event.senderID}&font=1`)).data.reply;         
        await api.sendMessage(a, event.threadID, (error, info) => {           
          global.GoatBot.onReply.set(info.messageID, {             
            commandName: this.config.name,             
            type: "reply",             
            messageID: info.messageID,             
            author: event.senderID,             
            a           
          });         
        }, event.messageID);       
      }     
    }   
  } catch (err) {     
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);   
  } 
};