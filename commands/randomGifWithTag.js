var axios = require("axios").default;
module.exports = {
    name: 'GIFTAG',
    aliases: ['giftag', 'giftag'],
    description: 'Gifs!',
    cooldown: 5,
    guildOnly: true,
    args: true,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        let inputValue = args[0]
        var options = {
            method: 'GET',
            url: `https://api.giphy.com/v1/gifs/random?tag=${inputValue}`,
            params: { api_key: 'LnT2AMJHLeYkZEnNvcc5KsmgJTzBKra8' },
            headers: { 'x-rapidapi-host': 'giphy.p.rapidapi.com', 'x-rapidapi-key': 'undefined' }
        };
        axios.request(options).then(function (response) {
            msg.reply(response.data.data.image_original_url);
        }).catch(function (error) {
            msg.reply(error);
        });
    },
};