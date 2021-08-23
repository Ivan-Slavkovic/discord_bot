let players = {}
module.exports = {
    name: 'multi',
    aliases: 'm',
    description: 'Multi player game!',
    cooldown: 5,
    guildOnly: true,
    args: false,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        let inputValue = args[0]
        if (inputValue === "start") {
            randomNumber = Math.floor(Math.random() * 100)
            numberOfGuesses = 0
            players = {
                ...players, [msg.author.id]: {
                    randomNumber: randomNumber,
                    numberOfGuesses: numberOfGuesses
                }
            }
            return msg.reply("The game has started, please guess the number")
        }
        if (inputValue && players[msg.author.id].randomNumber) {
            let tempNumber = players[msg.author.id].randomNumber
            let tempGuesses = players[msg.author.id].numberOfGuesses

            let difference = Math.abs(tempNumber - parseInt(inputValue))

            if (numberOfGuesses >= 10) {
                players = {
                    ...args, [msg.author.id]: {
                        randomNumber: undefined,
                        numberOfGuesses: 0
                    }
                }
                return msg.reply("Dzejlane ti li si? ")
            }
            if (difference > 50) {
                players[msg.author.id].numberOfGuesses = tempGuesses + 1
                return msg.reply("Hladno!")
            }
            if (difference > 25) {
                players[msg.author.id].numberOfGuesses = tempGuesses + 1
                return msg.reply("Mlako!")

            }
            players[msg.author.id].numberOfGuesses = tempGuesses + 1
            if (difference > 10) {
                return msg.reply("Toplo!")
            }
            if (difference > 1) {
                players[msg.author.id].numberOfGuesses = tempGuesses + 1
                return msg.reply("Najtoplije!")

            }
            players = {
                ...args, [msg.author.id]: {
                    randomNumber: undefined,
                    numberOfGuesses: 0
                }
            }
            return msg.reply("ADA TI BABO OVE CARSIJE!")
        }
        msg.reply("Cmon guess! :) ")
    },
};