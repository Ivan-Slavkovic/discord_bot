const { prefix } = require('../config.json');

module.exports = {
	name: 'commands',
	aliases: false,
	description: 'List all of my commands',
	cooldown: 5,
	guildOnly: false,
	args: false,
	usage: '',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Here\'s a list of all my commands:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

			return message.channel.send(data, { split: true });
			//pleaseasekjxf
			/* .then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
				}); */
		}
	},
};