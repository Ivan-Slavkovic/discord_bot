const { getQuote } = require('../classTasks/Q')
module.exports = {
    name: 'randomquote',
    aliases: ['rano'],
    description: 'Roll to win!',
    cooldown: 2,
    guildOnly: true,
    args: true,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    async execute(msg, args) {
        let k = await getQuote()
        msg.reply(k)
    },
}
