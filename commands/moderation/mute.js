const ms = require("ms");
const { messageEmbed, MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    let muteTime = (args[1] || '60s'); //60 seconde de mute par défaut si rien n'est entré

    if (!muteRole) { //si le role mute n'est pas créé alors on le créer
        muteRole = await message.guild.roles.create({
            data: {
                name: 'muted',
                color: '#000',
                permissions: []
            }
        });

        message.guild.channels.cache.forEach(async (channel, id) => { //Fait les perms du role
            await channel.updateOverwrite(muteRole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            CONNECT: false
            });

        });
    }


    await user.roles.add(muteRole.id); //Ajoute le rôle à l'utilisateur
    message.channel.send(`<@${user.id}> a été mute pour ${ms(ms(muteTime))}.`);

    setTimeout(() => {
        user.roles.remove(muteRole.id);
    }, ms(muteTime));

    const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.user.id})`)
        .setColor("#ffa500")
        .setDescription(`**Action**: \`mute\`\n**Temps**: \`${ms(ms(muteTime))}\``)
        .setThumbnail(user.user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('749236754078367877').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;