const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../config");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');



module.exports.run = (client, message, args) => {


    if (!args.length) {
        const embed = new MessageEmbed()
        .setColor("#36393F")
        .addField("Listes des commandes", `Liste des commandes disponibles et leurs sous catégories \nPour plus d'informations sur une commande tapez \`${prefix}help <commande>\``)

        for (const category of categoryList) {
            embed.addField(
                `${category}`,
                `\`${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(`\`, \``)}\`` //trier les catégories
            );
        };

        return message.channel.send(embed);
    } else {
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

        const embed = new MessageEmbed()
        .setColor("#36393F")
        .setTitle(`Commande : \`${command.help.name}\``)
        .addField("Description", `> ${command.help.description} \n`)
        .addField("Utilisation", command.help.usage ? `${prefix}${command.help.name} ${command.help.usage}` : `${prefix}${command.help.name}`, true)
        .addField("Cooldown", `\`${command.help.cooldown}\` secs`, true)

        if (command.help.aliases.length > 1) embed.addField("Alias", `\`${command.help.aliases.join('\`, \`')}\``);
        return message.channel.send(embed);
    }
    
};

module.exports.help = MESSAGES.COMMANDS.INFOS.HELP;