const axios = require('axios');
const request = require('request');
const fs = require('fs-extra');

module.exports.config = {
  name: "instruction",
  version: "1.0.0",
  role: 0,
  hasPrefix: true,
  description: "guide",
  usage: "insult",
  credits: "zach",
  cooldown: 0
};

module.exports.run = async function({ api, event, args, client, Users, Threads }) {
  // Use the globally required modules
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  
  // Link to the image
  var link = ["https://i.imgur.com/3WDucTM.jpg"];
  
  // Callback function to send the message
  var callback = () => api.sendMessage({
    body: `
[ 𝗜𝗡𝗦𝗧𝗥𝗨𝗖𝗧𝗜𝗢𝗡 𝗢𝗙 𝗧𝗛𝗜𝗦 𝗕𝗢𝗧 ]

1. Use prefix “commandtext” to respond to the bot.
2. If you want to search any history, use command prefix “robot text”.
3. If you have any problem with the bot, use prefix “callad” to contact a developer or admin.
4. If you want to talk to the bot, use prefix “sim”.
5. To see more commands, use prefix “help”.

Enjoy using my bot!`,
    attachment: fs.createReadStream(__dirname + "/cache/ken.jpg")
  }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ken.jpg"));
  
  // Download the image and execute the callback once finished
  return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
    .pipe(fs.createWriteStream(__dirname + "/cache/ken.jpg"))
    .on("close", () => callback());
};
