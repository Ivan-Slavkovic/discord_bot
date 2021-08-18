module.exports = {
    name: 'Nacionalna Geografija',
    aliases: ['nac'],
    description: 'Guess capital cities of countries',
    cooldown: 5,
    guildOnly: true,
    args: true,
    usage: "",
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        //Ideja je da se igra nacionalna geografija ali samo gradovi, imas json file sa svi gradovima i samo trebas da pokupis to i da uporedis
        //sa njihovim odgovorima. Bilo bi top kad bi mogao da ubacis bodovanje i da se radi na neki tajmer 
        var json = require('./Bot/country-json/src/country-by-capital-city.json');

    },
};