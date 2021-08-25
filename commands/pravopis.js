module.exports = {
    name: 'pravopis',
    aliases: ['pravo', 'pis'],
    description: 'Ping!',
    cooldown: 3,
    guildOnly: true,
    args: true,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        console.log(args)
        let inputValue = args
        for (let i = 0; i < inputValue.length; i++) {
            if (inputValue[i][0] === "." || inputValue[i][0] === "!" || inputValue[i][0] === "?") {
                inputValue[i][i + 1] = inputValue[i][i + 1].toUpperCase() + inputValue[i].slice(1)
            } else if (inputValue[i][0] === ",") {
                inputValue[i][0] = inputValue[i][0] + " " + inputValue[i].slice(1)
            }
        }
        console.log(inputValue.join(" "))
        msg.reply(inputValue.join(" "))
    },
};