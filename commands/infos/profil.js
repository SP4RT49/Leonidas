const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.tag)
    .setThumbnail(message.author.avatarURL({format: 'png'}))
    .addField("Rang**   **", "`1#`", true)
    .addField("**        **Level**   **", "  [`7`**/**`100`]", true)
    .addField("**             **Expérience**   **", " [`8.503`**/**`10.000 xp`]", true)
    .addField("Rang**   **", "`1#`",true)
    .addField("Argent**   **", "`13.729` 💰", true)
    .addField("Rôle booster", "Aucun", true)

    

    message.channel.send(embed).then(embedMessage => {
        embedMessage.react("👤");
        embedMessage.react("🎮");
    })

};

module.exports.help = {
    name: "profil",
    aliases: ['profil', 'profile'],
    category: 'infos',
    description: "infos du membre",
    usage: '',
    cooldown: 1,
    isUserAdmin: false,
    permissions: true,
    args: false
};