module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Yan Maglinte",
    description: "Sends a message to all groups and can only be done by the admin.",
    usePrefix: true,
    commandCategory: "noti",
    usages: "[Text]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args,admin }) => {
    

    const threadList = await api.getThreadList(25, null, ['INBOX']);
    let sentCount = 0;
    const custom = args.join(' ');

    async function sendMessage(thread) {
        try {
            await api.sendMessage(`✱:｡✧𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗘𝗠𝗘𝗡𝗧✧｡:✱\n━━━━━━━━━━━━━━━━━━━\n👤  | Admin シ︎\n━━━━━━━━━━━━━━━━━━\n╭┈ ❒ 💬 | 𝗠𝗘𝗦𝗦𝗔𝗚𝗘:\n╰┈➤ ${custom}\n━━━━━━━━━━━━━━━━━━━\nℹ️ | 𝖳𝗁𝗂𝗌 𝗂𝗌 𝗃𝗎𝗌𝗍 𝖺 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝖾𝗆𝖾𝗇𝗍 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗔𝗗𝗠𝗜𝗡𝗕𝗢𝗧 𝖺𝗇𝖽 𝗢𝗪𝗡𝗘𝗥𝗕𝗢𝗧.`, thread.threadID);
            sentCount++;
        } catch (error) {
            console.error("Error sending a message:", error);
        }
    }

    for (const thread of threadList) {
        if (sentCount >= 20) {
            break;
        }
        if (thread.isGroup && thread.name != thread.threadID && thread.threadID != event.threadID) {
            await sendMessage(thread);
        }
    }

    if (sentCount > 0) {
        api.sendMessage(`› Sent the notification successfully.`, event.threadID);
    } else {
        api.sendMessage("› No eligible group threads found to send the message to.", event.threadID);
    }
};


