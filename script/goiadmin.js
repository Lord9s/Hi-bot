module.exports.config = {
	name: "goiadminn",
	version: "1.0.0",
	role: 0,
	credits: "John Arida",
	description: "Bot will reply when an admin is tagged",
	usages: "",
	hasPrefix: true,
	cooldown: 5
};

module.exports.handleEvent = function({ api, event, admin }) {

	if (event.senderID !== admin && event.mentions) {
		var aid = [admin];
		for (const id of aid) {
			if (event.mentions[id]) {
				var msg = [
					"Babe nalang iatawag mo sakanya",
					"Stop mentioning my creator, he's busy 😗",
					"My Creator is currently offline 😢",
					"Another tag in my admin, I will punch you 🙂",
					"Busy pa ata yun kaya mag-antay ka",
					"Sorry, naka bebetime pa don't disturb him 🙄",
					"Do you like my creator that's why you're tagging him?",
					"Another tag in my Creator, I will kick your ass"
				];
				api.setMessageReaction("😍", event.messageID, (err) => {}, true);
				return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
			}
		}
	}
};

module.exports.run = async function({ api, event, admin }) {
	// Your run code here, if needed
};
