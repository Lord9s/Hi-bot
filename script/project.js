module.exports.config = {
    name: "project",
    role: 0,
    credits: "zach",
    description: "",
    hasPrefix: false,
    usages: "",
    cooldown: 5,
    aliases: ["Projects", "Project","project"]
};

module.exports.run = async function({ api, event }) {
    if (Object.keys(event.mentions).length === 0) {
        if (event.messageReply) {
            const senderID = event.messageReply.senderID;
            return api.shareContact("AUTO SHARE\nLink: https://auto-share-by-zach.onrender.com\nSPAM SMS (API SHIKI)\nLink: https://spamsms.vercel.app/",event.senderID, event.threadID);
        } else {
            return api.shareContact("AUTO SHARE\nLink: https://auto-share-by-zach.onrender.com\nSPAM SMS (API SHIKI)\nLink: https://spamsms.vercel.app/", event.senderID, event.threadID, event.messageID);
        }
    }
};
