const { Collection } = require('discord.js');
const { prefix } = require('../../config.json');

module.exports = (client, message) => {

    if (message.channel.type === "dm") return client.emit("directMessage", message);

    if (!message.content.startsWith(prefix) || message.author.bot) return; //si msg vient du bot on annule / pareil si commande sans prefix

    const args = message.content.slice(prefix.length).split(/ +/); //récupère uniquement les arguments
    const commandName = args.shift().toLowerCase(); // récupère uniquement la commande executée
    const user = message.mentions.users.first();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if (!command) return;

    if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("tu n'as pas les permissions pour taper cette commande."); 
    //Si le membre n'a pas les permissions de ban alors il ne peut pas effectuer la commande
    
    if (command.help.args && !args.length) { //Messages envoyés lorsque l'utilisateur n'entre aucun arguments pour une commande
        let noArgsReply = `Il nous faut des arguments pour cette commande, ${message.author}.`;

        if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande : \`${prefix}${command.help.name} ${command.help.usage}\` `

        return message.channel.send(noArgsReply)
    }

    if (command.help.isUserAdmin && !user) return message.reply('il faut mentionner un utilisateur.'); //s'il n'y a pas de mention

    if (command.help.isUserAdmin && message.guild.member(user).hasPermission('BAN_MEMBERS')) return message.reply(`tu ne peux pas utiliser la commande \`${command.help.name}\` sur cet utilisateur.`);
    //Si un membre execute la commande sur un membre qui a les perms de ban elle ne fonctionnera pas
    

    if (!client.cooldowns.has(command.help.name)) { //on vérifie si le cooldown est dispo sur la commande effectuée
        client.cooldowns.set(command.help.name, new Collection());// créer la collection pour le cooldown de la commande effectuée
    }

    const timeNow = Date.now(); //récupère le temps ou la commande a été effectuée
    const tStamps = client.cooldowns.get(command.help.name);// récupère le cooldown de la commande effectuée
    const cdAmount = (command.help.cooldown || 5) * 1000; // "5" = cd par défaut / "1000" pour tout mettre en "ms"
    console.log(client.cooldowns);

    if (tStamps.has(message.author.id)) { //vérifie l'utilisateur qui a effectué la commande
        const cdExpirationTime =tStamps.get(message.author.id) + cdAmount; //vérifie s'il reste du temps de cd

        if (timeNow < cdExpirationTime) { // S'il reste du temps de cd envois msg
            timeLeft = (cdExpirationTime - timeNow) / 1000;
            return message.reply(`vous devez attendre ${timeLeft.toFixed(0)} seconde(s) avant de pouvoir ré-utiliser la commande \`${command.help.name}\`.`);
        }
    }

    tStamps.set(message.author.id, timeNow);

    setTimeout(() => tStamps.delete(message.author.id), cdAmount); //Si Cooldown fini on le supprime de la collection

    command.run(client, message, args);
}