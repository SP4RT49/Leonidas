const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {

        const guild = message.guild;
        const datefull = new Date(guild.createdAt)
        const dday = datefull.getDay();
        const ddate = datefull.getDate();
        const dmonth = datefull.getMonth();
        const dyear = datefull.getFullYear();
        const dhour = datefull.getHours();
        const dmin = datefull.getMinutes();


        const embed = new MessageEmbed()
                .setTitle("Informations du Serveur")
                .setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`)
                .setURL(`https://discordapp.com/channels/${guild.id}/${message.channel.id}/${message.id}`)
                .setDescription(`**Nom** : \`${guild.name}\`**      ** **Créé le **: \`${ddate}/${dmonth}/${dyear}\` à \`${dhour}h${dmin}min\` \n━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
                .addField(`Créateur : `, `${guild.owner}`,true)
                .addField(`Tag :`, `${guild.owner.user.tag}`,true)
                .addField(`ID :`, `${guild.ownerID}`,true)
                .addField(`\u200b`, `━━━━━━━━━━━━━━━━━━━━━━━━━━━`) //\u200b
                .addField(`Membres :`, `${guild.memberCount}`,true)
                .addField(`Boosts :`, `${guild.premiumSubscriptionCount}`,true)
                .addField(`Boost Tier :`, `${guild.premiumTier}`,true)
                .addField(`\u200b`, `━━━━━━━━━━━━━━━━━━━━━━━━━━━`) //\u200b
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL())

        message.channel.send(embed);
        console.log(embed)
    
};

module.exports.help = MESSAGES.COMMANDS.INFOS.SERVER;

