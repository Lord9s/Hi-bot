const axios = require('axios');

module.exports.config = {
	name: "improve",
	version: "1.0.0",
	credits: "Samir Œ , Faith Xe",
	hasPrefix: true,
	role: 2,
	description: "Improve a prompt",
	aliases: [],
	usage: "{prefix}improve <prompt>",
	cooldown: 5,
};

module.exports.run = async function ({ event, args, api }) {
	api.setMessageReaction("⏳", event.messageID, (err) => {
	}, true);
  api.sendTypingIndicator(event.threadID, true);
	const prompt = args.join(" ");

	if (!prompt) {
		return event.reply("Please provide a prompt to improve.");
	}

	try {
		const response = await axios.get(`https://api-samir.onrender.com/prompt/improver?text=${encodeURIComponent(prompt)}`);
		event.reply(response.data);
	} catch (error) {
		console.error(error.message);
		event.reply("An error occurred while improving the prompt.");
	}
};
