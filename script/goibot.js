module.exports.config = {
	name: "bot",
	version: "1.0.0",
	role: 0,
	credits: "John Arida",
	description: "Bot will rep ng tag admin or rep ng tagbot",
	usages: "",
	hasPrefix: false,
	cooldown: 5
};

module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = [`Hi this is ChatBotV5 autobot...\n${time}`, `ops What's your need sir?\n${time}`, `Hi, You want to see all commands?Type -help\n${time}`, `misskonasiya\n${time}`, `What can i help you?`, `Hi Sir im here 😊\n${time}`, `tawag ka ng tawag sakin🙄!`, `You're the cutest person on the planet\n${time}`, `Have a nice day User!\n${time}`, `yes?\n${time}`, `yes po?\n${time}`, `hindi ba kayu minahal\n${time}`, `Im here sir\n${time}`, `po?\n${time}`, `bakit po?\n${time}`, `Good luck :)))\n${time}`,`kung ako yan hindi kita gaganyanin...\n${time}`, `wag ako, tawagin mo yung developer ko\n${time}`, `ikaw ang pinaka pogi/ganda sa buong planeta\n${time}`, `wag spam hoi\n${time}`, `hey\n${time}`, `hindi kba minahal\n${time}`];
  var rand = tl[Math.floor(Math.random() * tl.length)]


  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "morning")) {
    return api.sendMessage("magandang umaga dn po sayo have a nice day🤗!", threadID);
  };

  if ((event.body.toLowerCase() == "no") || (event.body.toLowerCase() == "wag")) {
    return api.sendMessage("edi don't😠", threadID);
  };

  if ((event.body.toLowerCase() == "hatdog") || (event.body.toLowerCase() == "hotdog")) {
    return api.sendMessage("lah ang funny ni idol hahaha hatdog daw.", threadID);
  };

  if ((event.body.toLowerCase() == "sabog") || (event.body.toLowerCase() == "lutang")) {
    return api.sendMessage("kulang lang sa tulog lods", threadID);
  };

  if ((event.body.toLowerCase() == "ml") || (event.body.toLowerCase() == "arat ml")) {
    return api.sendMessage("puro ka ml chat mo naman yung gf mo hoi", threadID);
  };

  if ((event.body.toLowerCase() == "edit") || (event.body.toLowerCase() == "jedug jedag")) {
    return api.sendMessage("penge preset yung ma angas at trend sa TikTok", threadID);
  };

  if ((event.body.toLowerCase() == "wala lang") || (event.body.toLowerCase() == "wla lang")) {
    return api.sendMessage("edi wow", threadID);
  };

  if ((event.body.toLowerCase() == "love u") || (event.body.toLowerCase() == "labyu")) {
    return api.sendMessage("d kita lab bahala ka manigas ka jan!", threadID);
  };

  if ((event.body.toLowerCase() == "last chat") || (event.body.toLowerCase() == "lc")) {
    return api.sendMessage("Sagip kona kapatid dahil pogi ko naman today", threadID);
  };

  if ((event.body.toLowerCase() == "hahaha") || (event.body.toLowerCase() == "HAHAHA")) {
    return api.sendMessage("️Happy Siguro to", threadID);
  };

  if ((event.body.toLowerCase() == "WHAHAHAHA") || (event.body.toLowerCase() == "hahahaha")) {
    return api.sendMessage("️ Haystt Anong Nakakatawa?", threadID);
  };

  if ((event.body.toLowerCase() == "Pogi") || (event.body.toLowerCase() == "pogi")) {
    return api.sendMessage("pogi cge na replyan mona!", threadID);
  };

  if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "nalungkot")) {
    return api.sendMessage("🤸 BAT 🤸 MALUNGKOT 🤸 ANG 🤸 BESHIE 🤸 KO 🤸", threadID);
  };

  if ((event.body.toLowerCase() == "lesson learned") || (event.body.toLowerCase() == "lesson")) {
    return api.sendMessage("Missyoy balik kana ", threadID);
  };

  if ((event.body.toLowerCase() == "pota") || (event.body.toLowerCase() == "powtah")) {
    return api.sendMessage("hoii kupal bawal mag mura gago ayy jk HAHAHAHA", threadID);
  };

  if ((event.body.toLowerCase() == "Harold Hutchin") || (event.body.toLowerCase() == "Harold")) {
    return api.sendMessage("Yes? ano po yun", threadID);
  };

  if ((event.body.toLowerCase() == "jonell") || (event.body.toLowerCase() == "Jonell Magallanes")) {
    return api.sendMessage("Medyo busy si developer baka nag eedit pa", threadID);
  };

  if ((event.body.toLowerCase() == "HAHA") || (event.body.toLowerCase() == "HA-HA-HA")) {
    return api.sendMessage("haha natawa ako sobra :)", threadID);
  };

  if ((event.body.toLowerCase() == "edi wow") || (event.body.toLowerCase() == "ediwow")) {
    return api.sendMessage("pangit mo", threadID);
  };

  if ((event.body.toLowerCase() == "angas") || (event.body.toLowerCase() == "galing")) {
    return api.sendMessage("napa sheesh ako idol...", threadID);
  };

  if ((event.body.toLowerCase() == "nethan") || (event.body.toLowerCase() == "Nethanel")) {
    return api.sendMessage("ah yes busy pa yan sa drawing yan at magaling din yan", threadID);
  };

  if ((event.body.toLowerCase() == "nays") || (event.body.toLowerCase() == "nc")) {
    return api.sendMessage("ako lang toh", threadID);
  };  

  if ((event.body.toLowerCase() == "desurb") || (event.body.toLowerCase() == "dserv")) {
    return api.sendMessage("Nangago kaba?", threadID);
  };

  if ((event.body.toLowerCase() == "Magandang Gabi") || (event.body.toLowerCase() == "good evening")) {
    return api.sendMessage("Goodevening din lods", threadID);
  };  

  if ((event.body.toLowerCase() == "bat ganyan ka?") || (event.body.toLowerCase() == "bat ka ganyan?")) {
    return api.sendMessage("ikaw kaya gumawa saken kaya wag mokong sisihin", threadID);
  };

  if ((event.body.toLowerCase() == "ang sama mo saken") || (event.body.toLowerCase() == "sama mo sakin")) {
    return api.sendMessage("talaga!! kasalanan mo yan ginawa moko ehh!! hmmp", threadID);
  };

  if ((event.body.toLowerCase() == "ang tino mo naman kausap") || (event.body.toLowerCase() == "ang tino mo kausap")) {
    return api.sendMessage("kung ayaw moko kausap edi wag maghanap ka ng iba chee!! hmmp!", threadID);
  };

  if ((event.body.toLowerCase() == "maspangit ka") || (event.body.toLowerCase() == "mas pangit ka")) {
    return api.sendMessage("️roses are red, violets and blue... when I flash the toilet I remember you", threadID);
  };

  if ((event.body.toLowerCase() == "angas") || (event.body.toLowerCase() == "agnas")) {
    return api.sendMessage("️ako lang toh mga idol", threadID);
  };

  if ((event.body.toLowerCase() == "lupet") || (event.body.toLowerCase() == "lupit")) {
    return api.sendMessage("️ ako lang toh mga idle", threadID);
  };

  if ((event.body.toLowerCase() == "nugagawen") || (event.body.toLowerCase() == "guys")) {
    return api.sendMessage("️papabillboard", threadID);
  };

  if ((event.body.toLowerCase() == "ganda mo") || (event.body.toLowerCase() == "ang ganda")) {
    return api.sendMessage("️mas maganda ka lods umay🤩", threadID);
  };

  if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "angganda")) {
    return api.sendMessage("️mas maganda ka uwu :>>", threadID);
  };

  if ((event.body.toLowerCase() == "alam ko") || (event.body.toLowerCase() == "alm ko")) {
    return api.sendMessage("️alam mo naman pala bat mo pa tinatanong? nanggagago kaba?", threadID);
  };

  if ((event.body.toLowerCase() == "ulol") || (event.body.toLowerCase() == "Ulol")) {
    return api.sendMessage("️mas ulol ka tanga HAHAHA jk", threadID);
  };

  if ((event.body.toLowerCase() == "onwer") || (event.body.toLowerCase() == "sino ba owner mo?")) {
    return api.sendMessage("️si Jonell Magallanes", threadID);
  };

  if ((event.body.toLowerCase() == "amp") || (event.body.toLowerCase() == "Amp")) {
    return api.sendMessage("️amp ka ng amp ain't my problem ibigsabihin nun", threadID);
  };

  if ((event.body.toLowerCase() == "secret") || (event.body.toLowerCase() == "Secret")) {
    return api.sendMessage("️edi wow sayo na yang secret mo hmmp!!", threadID);
  };

  if ((event.body.toLowerCase() == "tara ml") || (event.body.toLowerCase() == "tara")) {
    return api.sendMessage("️tara G HAHAHA jk bot ako", threadID);
  };

  if ((event.body.toLowerCase() == "Nethan") || (event.body.toLowerCase() == "Nethanel")) {
    return api.sendMessage("️ahh busy pa yan sa drawing eh hahaha!", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "HAHA")) {
    return api.sendMessage("️anong nakakatawa? :>>", threadID);
  };

  if ((event.body.toLowerCase() == "inv") || (event.body.toLowerCase() == "invite")) {
    return api.sendMessage("️sana all sinasali HAHAH jk bot lang ako si developer ung tawagin nyo", threadID);
  };

  if ((event.body.toLowerCase() == "cock") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️cock? manok?", threadID);
  };

  if ((event.body.toLowerCase() == "(2)") || (event.body.toLowerCase() == "(2)")) {
    return api.sendMessage("️(3)", threadID);
  };

  if ((event.body.toLowerCase() == "wala naman") || (event.body.toLowerCase() == "wla naman")) {
    return api.sendMessage("️meron tignan mo kaseng maigi", threadID);
  };

  if ((event.body.toLowerCase() == "pogi ko") || (event.body.toLowerCase() == "pogi ako")) {
    return api.sendMessage("️ano ka gold?", threadID);
  };

  if ((event.body.toLowerCase() == "pogi ako") || (event.body.toLowerCase() == "mas pogi ako")) {
    return api.sendMessage("️Ano ka gold?", threadID);
  };

  if ((event.body.toLowerCase() == "sendload") || (event.body.toLowerCase() == "send load")) {
    return api.sendMessage("️Registered ka sa BOSURF50 Meron kang 1GB pang-Watch ng Bold, valid hanggang 2078-04-01, 11:11:11. Para sa status ng iyong promo, gamitin ang GCash o New GlobeOne, o i-text ang DATA BAL o BOSURF50 STATUS. Para sa iba pang mga detalye, i-text ang BOSURF50 INFO. I-send sa 8080.", threadID);
  };

  if ((event.body.toLowerCase() == "edi tumigil") || (event.body.toLowerCase() == "pake ko sayo")) {
    return api.sendMessage("️dapat lang :)", threadID);
  };

  if ((event.body.toLowerCase() == "talaga") || (event.body.toLowerCase() == "talga")) {
    return api.sendMessage("️wag mo akong kausapin", threadID);
  };

  if ((event.body.toLowerCase() == "edi wag") || (event.body.toLowerCase() == "daming alam")) {
    return api.sendMessage("oo ahh", threadID);
  };

  if ((event.body.toLowerCase() == "dejk") || (event.body.toLowerCase() == "de joke")) {
    return api.sendMessage("mama mo joke", threadID);
  };

  if ((event.body.toLowerCase() == "Weird") || (event.body.toLowerCase() == "weird")) {
    return api.sendMessage("tingin ka sa salamin mas weird ung makikita mo dun", threadID);
  };

  if ((event.body.toLowerCase() == "ano bang problema mo?") || (event.body.toLowerCase() == "ano bang problema mo")) {
    return api.sendMessage("ikaw problema ko :)", threadID);
  };

  if ((event.body.toLowerCase() == "sorry") || (event.body.toLowerCase() == "sorry na")) {
    return api.sendMessage("send load muna😘", threadID);
  };

  if ((event.body.toLowerCase() == "ahh") || (event.body.toLowerCase() == "ayy")) {
    return api.sendMessage("ano?", threadID);
  };

  if ((event.body.toLowerCase() == "saan?") || (event.body.toLowerCase() == "saan")) {
    return api.sendMessage("syempre edi saan pa", threadID);
  };

  if ((event.body.toLowerCase() == "enebe") || (event.body.toLowerCase() == "pereng tenge")) {
    return api.sendMessage("kilig ka nanaman", threadID);
  };

  if ((event.body.toLowerCase() == "Alightmotion") || (event.body.toLowerCase() == "Capcut")) {
    return api.sendMessage("Naol Editor😔", threadID);
  };

if ((event.body.toLowerCase() == "ayy geh") || (event.body.toLowerCase() == "gege")) {
    return api.sendMessage("oo ikaw na bahala", threadID);
  };

  if ((event.body.toLowerCase() == "Thank you") || (event.body.toLowerCase() == "Ty")) {
    return api.sendMessage("you're welcome idol hahha", threadID);
  };

  if ((event.body.toLowerCase() == "gagi") || (event.body.toLowerCase() == "gago")) {
    return api.sendMessage("WHAHAHAHAHA LT", threadID);
  };
    
    if ((event.body.toLowerCase() == "sheesh") || (event.body.toLowerCase() == "awit")) {
    return api.sendMessage("HHAHAHAHA balakajan", threadID);
  };

  if ((event.body.toLowerCase() == "sent a photo.") ||  (event.body.toLowerCase() == "sent a photo")) {
    return api.sendMessage("walang siguro load to nakakalungcoat",threadID);
  };

  if ((event.body.toLowerCase() == "awts") ||  (event.body.toLowerCase() == "peyn")) {
    return api.sendMessage("oks lang yan idol nandito naman ako para sayo", threadID);
  };

if ((event.body.toLowerCase() == "ako developer mo") || (event.body.toLowerCase() == "sariling ko bot ginagago ako")) {
    return api.sendMessage("ayy sorry po master", threadID);
  };
  
  if ((event.body.toLowerCase() == "pa visit") || (event.body.toLowerCase() == "visit")) {
    return api.sendMessage("Oh mga lods visit niyo to at mag copylink na support tayo each other😘", threadID);
  };

  if ((event.body.toLowerCase() == "cod") || (event.body.toLowerCase() == "arat cod")) {
    return api.sendMessage("Puro ka cod mag Module kanamang kupal ka", threadID);
  };

  if ((event.body.toLowerCase() == "wehh") || (event.body.toLowerCase() == "ok")) {
    return api.sendMessage("di nga,sus choosy kapa!", threadID);
  };

  if ((event.body.toLowerCase() == "tanga") || (event.body.toLowerCase() == "bobo")) {
    return api.sendMessage("Are you gagoing me?!", threadID);
  };

  if ((event.body.toLowerCase() == "Naol") || (event.body.toLowerCase() == "naol")) {
    return api.sendMessage("(2)", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }