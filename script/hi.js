module.exports.config = {
    name: "hi",
    role: 0,
    credits: "zach",
    description: "",
    hasPrefix: false,
    usages: "",
    cooldown: 5,
    aliases: ["Hi", "hello","Hello"]
};

module.exports.run = async function({ api, event }) {
    if (Object.keys(event.mentions).length === 0) {
        if (event.messageReply) {
            const senderID = event.messageReply.senderID;
            return api.shareContact("Hi bro, how can i help you?",event.senderID, event.threadID);
        } else {
            return api.shareContact("Hi bro, how can i help you?", event.senderID, event.threadID, event.messageID);
        }
    }
};
