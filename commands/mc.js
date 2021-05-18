const util = require('minecraft-server-util');
const Discord = require("discord.js")

module.exports = {
    name: 'mc',
    description: "this is a meme command!",
    async execute(message, args) {
        util.status('-')
            .then((response) => {
                const Embed = new Discord.MessageEmbed()
                    .setTitle('Server Status')
                    .addField('Server IP', response.host)
                    .addField('Server Version', response.version)
                    .addField('Online Players', response.onlinePlayers)
                    .addField('Max Players', response.maxPlayers)

                message.channel.send(Embed)
            })
            .catch((error) => {
                throw error;
            });
    }
}