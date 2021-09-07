const fetch = require('node-fetch')
const json = require('./node_modules/json/lib/json')
module.exports = {
    name: 'quotes',
    aliases: ['Quote', 'q', 'Q'],
    description: 'Quote majka!',
    cooldown: 5,
    guildOnly: true,
    args: true,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        let inputValue = args
        if (inputValue.length == 1) {
            fetch(`https://api.quotable.io/random?tags=${inputValue[0]}`).then((result) => {
                return result.json()
            }).then((result) => {
                return msg.reply(result.content, result.author)
            }).catch((e) => {
                return msg.reply(e)
            })
        } else if (inputValue.length == 2) {
            fetch(`https://api.quotable.io/random?tags=${inputValue[0], inputValue[1]}`).then((result) => {
                return result.json()
            }).then((result) => {
                return msg.reply(result.content, result.author)
            }).catch((e) => {
                return msg.reply(e)
            })
        }
        else {
            return msg.reply("To nece moci")
        }
    },
};