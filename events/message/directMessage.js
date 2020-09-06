const { MessageEmbed } = require ('discord.js');

module.exports = (client, message) => {

    

    const user = message.author;
    if (user.bot) return;

    const embed = new MessageEmbed()
        .setTitle(`Message Privé reçu de [${user.tag}]`)
        .setColor("#ffa500")
        .setDescription(`**__Contenu__ :** \n\`\`\`${message.content}\`\`\`\nLe contacter : ${user}`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(user.username, user.avatarURL());

    client.channels.cache.get('749236754078367877').send(embed);

    message.react("✅");
    user.send("`Message lu` ✅                                                                                                                                                                                                                                                                                                                                                      ||non c'est faux||");


    console.log(`[MP] ${message.author.tag}: ${message.content}`);
}