//https://list.ly/api/v4/meta?url=
//var a = res.data.name;
//var b = res.data.description;
//var c = res.data.image;
module.exports.config = {
  name: "infosite",
  version: "2.2",
  hasPermssion: 0,
  credits: "zach",
  description: "( info)",
  commandCategory: "𝚗𝚘 𝚙𝚛𝚎𝚏𝚒𝚡",
  usages: "(ih )",
  cooldowns: 2,
};
  module.exports.run = async (
  {
    api,
    event,
    args
  }) =>
  {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    var juswa = args.join(" ");
    if (!juswa) return api.sendMessage(`add url site`, event.threadID, event.messageID);
    else
    {
      axios.get(`https://list.ly/api/v4/meta?url=${encodeURIComponent(juswa)}`).then(res =>
      {
        let a = res.data.name,
          b = res.data.description,
          d = res.data.url
        var c = res.data.image;
        let callback = function ()
        {
          api.sendMessage(
          {
            body: `Name: ${a}\n\nDescription: ${b}\n\nRelease Date: ${date}\n\nUrl: ${d}`,
            attachment: fs.createReadStream(__dirname + `/cache2/juswa.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache2/juswa.png`), event.messageID);
        };
        request(encodeURI(c)).pipe(fs.createWriteStream(__dirname + `/cache2/juswa.png`)).on("close", callback);
      })
    }
  }