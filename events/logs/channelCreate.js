const { MessageEmbed } = require ('discord.js');

module.exports = async (client, channel) => {
    if (channel.type === "dm") return;
    else{
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
       limit: 1,
       type: 'CHANNEL_CREATE' 
    });

    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated;

    const embed = new MessageEmbed()
        .setAuthor("Création d'un nouveau Salon")
        .setColor("#dc143c")
        .setDescription(`**Action**: \`création de salon\`\n**Salon créé**: \`${channel.name}\``)
        .setTimestamp()
        .setFooter(executor.tag, executor.displayAvatarURL());

    client.channels.cache.get('749236754078367877').send(embed);
    }
}