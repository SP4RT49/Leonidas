const { MessageEmbed } = require ('discord.js');

module.exports = async (client, message) => {


    const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
       limit: 1,
       type: 'MESSAGE_DELETE' 
    });

    const latestMessageDelete = fetchGuildAuditLogs.entries.first();
    console.log(latestMessageDelete);
    const { executor } = latestMessageDelete;

    const embed = new MessageEmbed()
        .setAuthor("Suppression d'un Message ❌📨")
        .setColor("#dc143c")
        .setDescription(`**Auteur du message :** ${message.author}\n**__Message supprimé__ :**\n \`\`\`${message.content}\`\`\``)
        .setTimestamp()
        .setFooter(executor.tag, executor.displayAvatarURL());

    client.channels.cache.get('749236754078367877').send(embed);

}