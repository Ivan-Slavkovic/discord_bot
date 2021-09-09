const { getQuote, getQuoteMin, getQuoteMax, getQuoteMin_Max } = require('../classTasks/Q')
module.exports = {
    name: 'randomquote',
    aliases: ['rano'],
    description: 'Best smarter my man!',
    cooldown: 2,
    guildOnly: true,
    args: true,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    async execute(msg, args) {
        let minLength = args[0], maxLength = args[1];

        const msg1 = await getQuote()
        const msg2 = await getQuoteMin(minLength)
        const msg3 = await getQuoteMax(maxLength)
        const msg4 = await getQuoteMin_Max(minLength, maxLength)

        msg.reply(msg1)
        msg.reply(msg2)
        msg.reply(msg3)
        msg.reply(msg4)
        return
    },
}
