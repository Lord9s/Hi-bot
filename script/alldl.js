const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: 'alldl',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'dl'],
  description: "autodl",
  usage: "",
  credits: 'zach',
  cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
    const link = args.join(" ");
    if (!link)
      return api.sendMesage(`Please provide the link.`);
    else {
      let BASE_URL;

      if (link.includes("facebook.com")) {
        BASE_URL = `https://apis-samir.onrender.com/fbdl?vid_url=${encodeURIComponent(link)}`;
      } else if (link.includes("twitter.com") || link.includes("x.com")) {
        BASE_URL = `https://apis-samir.onrender.com/twitter?url=${encodeURIComponent(link)}`;
      } else if (link.includes("tiktok.com")) {
        BASE_URL = `https://apis-samir.onrender.com/tiktok?url=${encodeURIComponent(link)}`;
      } else if (link.includes("open.spotify.com")) {
        BASE_URL = `https://apis-samir.onrender.com/spotifydl?url=${encodeURIComponent(link)}`;


        try {
          const apiResponse = await axios.get(BASE_URL);

          if (apiResponse.data.success) {
            const metadata = apiResponse.data.metadata;
            const audioUrl = apiResponse.data.link;

            api.sendMesage("⬇ | Downloading the content for you");

            const audioResponse = await axios.get(audioUrl, { responseType: 'arraybuffer' });
            fs.writeFileSync(__dirname + '/cache/spotify.mp3', Buffer.from(audioResponse.data));

            api.sendMesage({
              body: `• Title: ${metadata.title}\n• Album: ${metadata.album}\n• Artist: ${metadata.artists}\n• Released: ${metadata.releaseDate}`,
              attachment: fs.createReadStream(__dirname + '/cache/spotify.mp3')
            });
          } else {
            api.sendMesage("Sorry, the Spotify content could not be downloaded.");
          }
        } catch (error) {
          console.error(error);
          api.sendMesage("Sorry, an error occurred while processing your request.");
        }

        return;
      } else if (link.includes("youtu.be") || link.includes("youtube.com")) {
        const providedURL = `https://apis-samir.onrender.com/ytdl?url=${link}`;
        api.sendMesage({
          attachment: await global.utils.getStreamFromURL(providedURL),
        });
        return;
      } else if (link.includes("instagram.com")) {
        BASE_URL = `https://apis-samir.onrender.com/igdl?url=${encodeURIComponent(link)}`;
      } else {
        return api.sendMesage(`Unsupported source.`);
      }

      api.sendMesage("Processing your request... Please wait.");

      try {
        let res = await axios.get(BASE_URL);

        let contentUrl;

        if (link.includes("facebook.com")) {
          contentUrl = res.data.links["Download High Quality"];
        } else if (link.includes("twitter.com") || link.includes("x.com")) {
          contentUrl = res.data.HD;
        } else if (link.includes("tiktok.com")) {
          contentUrl = res.data.hdplay;
        } else if (link.includes("instagram.com")) {
          contentUrl = res.downloadHref;
        }

        const response = {
          attachment: await global.utils.getStreamFromURL(contentUrl)
        };

        await api.sendMesage(response);
      } catch (error) {
        api.sendMesage(`Sorry, an error occurred: ${error.message}`);
      }
    }
  };