const path = require('path');
module.exports.config = {
  name: "music",
  version: "1.0.0",
  role: 0,
  hasPrefix: true,
  aliases: ['play'],
  usage: 'Music [prompt]',
  description: 'Search music on YouTube',
  credits: 'Developer',
  cooldown: 5
};

module.exports.run = async function({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const ytdl = require("ytdl-core");
  const request = require("request");
  const yts = require("yt-search");

  const input = event.body;
  const text = input.substring(12);
  const data = input.split(" ");

  if (data.length < 2) {
    return api.sendMessage("Please enter the music title", event.threadID);
  }

  data.shift();
  const song = data.join(" ");

  try {
    const findingMessage = await api.sendMessage(`Finding "${song}". Please wait...`, event.threadID);

    const searchResults = await yts(song);
    if (!searchResults.videos.length) {
      await api.unsendMessage(findingMessage.messageID);
      return api.sendMessage("Error: Invalid request.", event.threadID);
    }

    const video = searchResults.videos[0];
    const videoUrl = video.url;

    const stream = ytdl(videoUrl, { filter: "audioonly" });

    const fileName = `${event.senderID}.mp3`;
    const filePath = path.join(__dirname, "cache", fileName);

    stream.pipe(fs.createWriteStream(filePath));

    stream.on('response', async () => {
      console.info('[DOWNLOADER]', 'Starting download now!');

      const tinyUrlResponse = await axios.get(`https://jonellccapisprojectv2-a62001f39859.herokuapp.com/api/tinyurl?url=${videoUrl}`);
      const shortenedUrl = tinyUrlResponse.data.shortenedUrl;

      const messageBody = `Here's your music, enjoy!\nArtist: ${video.author.name}\nYouTube Link: ${shortenedUrl}`;

      const message = {
        body: messageBody,
        attachment: fs.createReadStream(filePath)
      };

      api.sendMessage(message, event.threadID);
    });

    stream.on('info', (info) => {
      console.info('[DOWNLOADER]', `Downloading ${info.videoDetails.title} by ${info.videoDetails.author.name}`);
    });

    stream.on('end', () => {
      console.info('[DOWNLOADER] Downloaded');

      if (fs.statSync(filePath).size > 30 * 1024 * 1024) {
        fs.unlinkSync(filePath);
        return api.sendMessage('[ERR] The file could not be sent because it is larger than 30MB.', event.threadID);
      }

      api.unsendMessage(findingMessage.messageID);
    });
  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};
