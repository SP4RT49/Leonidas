const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.tag)
    .setThumbnail(message.author.avatarURL({format: 'png'}))
    .addField("League of Legends**   **", "`| SP4RT4 |`", true)
    .addField("**       **Level**   **", "**   **  [`207`]", true)
    .addField("**             **Classé**   **", "**   ** [`BRONZE I`]", true)
    .addField("Paladins**   **", "` SP4RT4 `", true)
    .addField("**       **Level**   **", "**   **  [`65`]", true)
    .addField("**         **Plateforme**   **", "**      ** [`Steam`]", true)

    

    message.channel.send(embed).then(embedMessage => {
        embedMessage.react("👤");
        embedMessage.react("🎮");
    })

};

module.exports.help = {
    name: "game",
    aliases: ['game', 'g'],
    category: 'infos',
    description: "infos du membre",
    usage: '',
    cooldown: 1,
    isUserAdmin: false,
    permissions: true,
    args: false
};