module.exports.run = (client, message, args) => {
    message.channel.send(args.join(" "));
};

module.exports.help = {
  name: "say",
  aliases: ['s', 'dit'],
  category: 'zautre',
  description: "envoi un message avec le bot",
  usage: '<votre_message>',
  cooldown: 10,
  isUserAdmin: false,
  permissions: true,
  args: true
};