let roll
module.exports = {
    name: 'roll',
    aliases: ['roll'],
    description: 'Roll to win',
    cooldown: 2,
    guildOnly: true,
    args: false,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        if (!roll) {
            roll = Math.ceil(Math.random() * 100)
            setTimeout(() => {
                msg.reply(`The higest roll was: ${roll}! The game has ended`)
                roll = undefined
            }, 10000)
        } else if (roll) {
            let temproll = Math.ceil(Math.random() * 100)
            if (temproll > roll) {
                roll = temproll
            }
            msg.reply(`Your roll was: ${temproll}!`)
        }
    },
};