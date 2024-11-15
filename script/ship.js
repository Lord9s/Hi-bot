module.exports.config = {
    name: "ship",
    version: "2.2",
    hasPermssion: 0,
    credits: "zach",
    description: "( ship𝚒 )",
    commandCategory: "𝚗𝚘 𝚙𝚛𝚎𝚏𝚒𝚡",
    usages: "(ih )",
    cooldowns: 20,
  };

  module.exports.run = async function({ api, args, Users, event}) {
  const axios=global["nodemodule"]["axios"];
  const request=global["nodemodule"]["request"];
  const fs=global["nodemodule"]["fs-extra"];
  var mention=Object["keys"](event["mentions"])[0];

  if(!mention){return api["sendMessage"]("Need to tag 1 CRUSH who wants to see the matching ratio",event["threadID"])};
  var name=( await Users["getData"](mention))["name"];
  var namee=( await Users["getData"](event["senderID"]))["name"];
  var tle=Math["floor"](Math["random"]()* 101);
  var arraytag=[];arraytag["push"]({id:mention,tag:name});arraytag["push"]({id:event["senderID"],tag:namee});
  var mentions=Object["keys"](event["mentions"]);

  let Avatar=( await axios["get"](`${"https://graph.facebook.com/"}${mentions}${"/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"}`,{responseType:"arraybuffer"}))["data"];
  fs["writeFileSync"](__dirname+ "/cache2/avt.png",Buffer["from"](Avatar,"utf-8"));

  let Avatar2=( await axios["get"](`${"https://graph.facebook.com/"}${event["senderID"]}${"/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"}`,{responseType:"arraybuffer"}))["data"];

  fs["writeFileSync"](__dirname+ "/cache2/avt2.png",Buffer["from"](Avatar2,"utf-8"));
  
  var imglove=[];imglove["push"](fs["createReadStream"](__dirname+ "/cache/avt2.png"));
  imglove["push"](fs["createReadStream"](__dirname+ "/cache2/avt.png"));
  var msg={body:`${"cooldown: 20s\n💟Odds go between "}${namee}${" 🤍 "}${name}${" l "}${tle}${"%🤭😳 "}`,mentions:arraytag,attachment:imglove};
  return api["sendMessage"](msg,event["threadID"],event["messageID"])
  }