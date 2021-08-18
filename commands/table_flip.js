'use strict'
module.exports = {
    name: 'emoji',
    aliases: ['fancy'],
    description: 'Few interesting emojis',
    cooldown: 2,
    guildOnly: true,
    args: true,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        var inputValue = args[0];
        switch (inputValue) {
            case ('tableflip'):
                msg.reply("(╯°□°）╯︵ ┻━┻");
                break;
            case ('unflip'):
                msg.reply("┬─┬ ノ( ゜-゜ノ)");
                break;
            case ('shrug'):
                msg.reply(" ¯\\_(ツ)_/¯ ");
                break;
            default:
                msg.reply("Don't have that command, try again.")
                return;
        }
    },
};