module.exports = {
    name: 'operation',
    aliases: ['ope'],
    description: 'Math operations',
    cooldown: 5,
    guildOnly: true,
    args: true,
    usage: "[arg1] + [arg2]",
    // eslint-disable-next-line no-unused-vars
    execute(msg, args) {
        // if (args[1] !== '+') {
        //     return msg.reply('You are not worthy of plus sign')
        // }
        var a = parseInt(args[0])
        var b = parseInt(args[2])
        var c
        switch (args[1]) {
            case "+":
                c = a + b;
                break;
            case "-":
                c = a - b;
                break;
            case "*":
                c = a * b;
                break;
            case "/":
                c = a / b;
                break;
            default:
                msg.reply(`Cmmon you can do better`);

        }
        msg.reply(`It's ` + c + ` dumbass`);
        // plus minut puta podeljeno 
    },
};