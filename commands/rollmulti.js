let players = {}
let roll
module.exports = {
    name: 'roll',
    aliases: ['r'],
    description: 'Roll to win',
    cooldown: 2,
    guildOnly: true,
    args: false,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        if (msg.author.id) {
            players = {
                ...players, [msg.author.id]: {
                    roll: roll,
                    username: username
                }
            }
            players[roll] = Math.ceil(Math.random() * 100)
            let maxNumber
            setTimeout(() => {
                for (let i = 0; i < players.length; i++) {
                    if (maxNumber < players[msg.author.id].roll)
                        maxNumber = players[i].roll
                }
                msg.reply(`The higest roll was: ${players[roll]}! The game has ended`)
                    = undefined
            }, 10000)
        } else if (players[roll]) {
            let temproll = Math.ceil(Math.random() * 100)
            if (temproll > roll) {
                players[roll] = temproll
            }
            msg.reply(`Your roll was: ${temproll}!`)
        }
    },
};