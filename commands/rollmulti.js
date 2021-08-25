let players = {}
let roll = []
let yourMax = -Infinity
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
        if (!players[msg.author.id]) {
            players = {
                ...players, [msg.author.id]: {
                    roll: [...players[msg.author.id].roll],
                    username: msg.author.username,
                    maxRoll: yourMax
                }
            }
            players[msg.author.id].roll.push(Math.ceil(Math.random() * 100))
            console.log(players)
            msg.reply(`Your roll is ${players[msg.author.id].roll}`)

            setTimeout(() => {

            }, 10000)
        }
    },
};