var randomWords = ['army', 'beautiful', 'became', 'if', 'actually', 'became', 'arrow', 'article', 'therefore', 'beside', 'between', 'army', 'come', 'eye', 'five', 'fur']
var tries = 0, playersWord, hiddenWord = [], players = {}
module.exports = {
    name: 'hangman',
    aliases: ['hang'],
    description: 'Guess game',
    cooldown: 1,
    guildOnly: true,
    args: true,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        var inputValue = args[0]
        var playerId = msg.author.id
        if (inputValue == "start") {
            playersWord = randomWords[Math.floor(Math.random() * randomWords.length)].split("")
            for (let i = 0; i < playersWord.length; i++)
                hiddenWord.push("*")
            players[playerId] = { hisWord: playersWord, hisHiddenWord: hiddenWord, fails: tries }
            return msg.reply("Embrace yourself, the word has been given!")
        }
        if (players[playerId].hisWord.join("") !== players[playerId].hisHiddenWord.join()) {
            if (inputValue.length > 1) {
                if (inputValue === players[playerId].hisWord.join("")) {
                    return msg.reply("You are right the game is over!")
                }
                players[playerId].fails++
                return msg.reply("you didn't guess right!")
            }
            if (players[playerId].hisWord.includes(inputValue)) {
                for (let i = 0; players[playerId].hisWord.length; i++) {
                    if (players[playerId].hisWord[i] == inputValue) {
                        hisHiddenWord[i] = inputValue
                    }
                }
                return msg.reply(players[playerId].hisHiddenWord.join(" "))
            }
            players[playerId].fails++
            return msg.reply("There is not such latter in your word")
        }
        msg.reply("Game over the word was ", players[playerId].hisWord.join(""))
        players[playerId] = undefined
        return msg.reply("See ya next time!")
    },
};