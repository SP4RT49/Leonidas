const { MessageEmbed } = require ('discord.js');

module.exports = async (client, channel) => {

    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
       limit: 1,
       type: 'CHANNEL_DELETE' 
    });

    const latestChannelDelete = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelDelete;

    const embed = new MessageEmbed()
        .setAuthor("Suppression d'un Salon")
        .setColor("#dc143c")
        .setDescription(`**Action**: \`suppression de salon\`\n**Salon supprimé**: \`${channel.name}\``)
        .setTimestamp()
        .setFooter(executor.tag, executor.displayAvatarURL());

    client.channels.cache.get('749236754078367877').send(embed);

}