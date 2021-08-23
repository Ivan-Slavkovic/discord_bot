let randomNumber
let numberOfGuesses
module.exports = {
    name: 'singlegame',
    aliases: false,
    description: 'Single player game!',
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
            return msg.reply("The game has started, please guess the number")
        }
        if (inputValue) {
            let difference = Math.abs(randomNumber - parseInt(inputValue))
            if (numberOfGuesses >= 3) {
                randomNumber = undefined
                numberOfGuesses = 0
                return msg.reply("Bitan si kao iphonu audio jack! :)")
            }
            if (diference > 50) {
                numberOfGuesses++
                return msg.reply("Hladno!")
            }
            if (difference > 25) {
                numberOfGuesses++
                return msg.reply("Mlako!")

            }
            numberOfGuesses++
            if (difference > 10) {
                return msg.reply("Toplo!")
            }
            if (difference > 1) {
                numberOfGuesses++
                return msg.reply("Najtoplije!")

            }
            randomNumber = undefined
            numberOfGuesses = 0
            return msg.reply("ADA TI BABO OVE CARSIJE!")
        }
        msg.reply("Cmon guess! :) ")
    },
};