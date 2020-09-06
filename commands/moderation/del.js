const Discord = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const client = new Discord.Client();

module.exports.run = (client, message, args) => {

      let role = message.guild.roles.cache.find(role => role.name === args.toString())
      if (role) {
          if (!message.member.roles.cache.has(role.id)) return message.channel.send("Vous ne possédez pas ce role.");

          message.member.roles.remove(role)
            .then(m => message.channel.send(`Le rôle ${role} vous a été retiré.`))
            .catch(e => console.log(e));
      } else {
          message.channel.send("Vous ne pouvez pas supprimer un role qui n'existe pas..")
      }
  
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.DEL;