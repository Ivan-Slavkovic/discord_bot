module.exports = {
    name: 'toUpper',
    aliases: ['UP', 'up', 'Up'],
    description: 'Ping!',
    cooldown: 5,
    guildOnly: true,
    args: true,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        let inputValue = args
        for (let i = 0; i < inputValue.length; i++) {
            inputValue[i] = inputValue[i][0].toUpperCase() + inputValue[i].slice(1)
        }
        msg.reply(inputValue.join(" "))
    },
};