const axios = require('axios');

module.exports.config = {
  name: 'prefix',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['ano prefix', 'Prefix'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};

module.exports.run = async function({ api, event, args, prefix }) {
  const input = args.join(' ');


  
  if (!input) {
    api.shareContact(`The prefix is [ ${prefix} ]`,api.getCurrentUserID(), event.threadID, event.messageID);
  }
};