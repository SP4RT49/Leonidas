const { MESSAGES } = require("../../util/constants");


const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message, args) => {

        if (!message.mentions.users.size) {
            const autha = new MessageEmbed() //Renvoit l'avatar de l'executeur
                .setColor("RANDOM")
                .setTitle(`${message.author.tag}`)
                .setDescription(`[Ouvrir ${message.author.username} dans le navigateur]`+`(${message.author.displayAvatarURL({format: `png`})})`)
                .setImage(message.author.displayAvatarURL({size: 512}))
                .setFooter(message.author.tag)
                .setTimestamp();

            message.channel.send(autha);
        }

        const avatarList = message.mentions.users.map(user => {
            const usera = new MessageEmbed() // renvoit l'avatar de la mention
                .setColor("RANDOM")
                .setTitle(`Profil de : \`\`\`${user.tag}\`\`\``)
                .setURL(user.displayAvatarURL)
                .setDescription(`[Ouvrir ${user.username} dans le navigateur]`+`(${user.displayAvatarURL({format: `png`})})`)
                .setImage(user.displayAvatarURL({size: 512}))
                .setFooter(message.author.tag)
                .setTimestamp();
            message.reply(usera);
            });
            message.delete();
            message.channel.send(avatarList);
        
};

module.exports.help = MESSAGES.COMMANDS.INFOS.AVATAR;