var point
var players = []
var json = require('./countries.json');
var randomCountry = json[Math.floor(Math.random() * json.length)];
module.exports = {
    name: 'Nacionalna Geografija',
    aliases: ['nac'],
    description: 'Guess capital cities of countries',
    cooldown: 5,
    guildOnly: true,
    args: true,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        //Ideja je da se igra nacionalna geografija ali samo gradovi, imas json file sa svi gradovima i samo trebas da pokupis to i da uporedis
        //sa njihovim odgovorima. Bilo bi top kad bi mogao da ubacis bodovanje i da se radi na neki tajmer 
        //tajmer da se odradi kako bi mogao nova drzava da se da u slucaju da ne znaju
        //da se uradi regexp za camel case sensitive
        let inputValue = args[0]
        if (inputValue == 'start') {
            msg.reply("Game is about to start.")
            msg.reply("What is capital city of " + randomCountry.country)
            var userName = msg.author.username
            var player = msg.author.id
            players[player] = { number_of_points: point, playersName: userName }
            return;
        }
        console.log(randomCountry)
        if (point == undefined) {
            point = 0
        }
        console.log(players[player])
        if (inputValue === randomCountry.city) {
            msg.reply("Great job I know now who didn't sleep on geaography class! :)")
            players[player].number_of_points++
            randomCountry = undefined
            randomCountry = json[Math.floor(Math.random() * json.length)];
            console.log(randomCountry)
            if (players[player].number_of_points == 2) {
                randomCountry = undefined
                return msg.reply("Game over!" + players[player].playersName + "is babus!")
            }
            return msg.reply("New city to guess is " + randomCountry.country)
        }
        else {
            return msg.reply(randomCountry)
        }
    },
};