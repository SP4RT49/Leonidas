const { MessageEmbed } = require ('discord.js');

module.exports = (client, member) => {
    const embed = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
        .setColor("#dc143c")
        .setFooter(`${member.user.tag} nous a quitté`)
        .setTimestamp();


    client.channels.cache.get('749236754078367877').send(embed);
}