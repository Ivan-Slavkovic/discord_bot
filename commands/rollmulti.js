let roll
let players = {}
let maxRoll = -Infinity
module.exports = {
    name: 'roll',
    aliases: "r",
    description: 'Roll game',
    cooldown: 3,
    guildOnly: true,
    args: false,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        if (msg.author.id) {
            players = {
                ...players, [msg.author.id]: {
                    roll: roll,
                    username: msg.author.username,
                    maxRoll: maxRoll
                }
            }
            players[msg.author.id].roll = Math.ceil(Math.random() * 100)
            console.log(players)
            msg.reply(`Your roll is ${players[msg.author.id].roll}`)
            // if (players[msg.author.id].maxRoll < players[msg.author.id].roll) {
            //     players[msg.author.id].maxRoll = players[msg.author.id].roll
            //     console.log(players)
            // }
            setTimeout(() => {

            }, 10000)
        }
    },
};