const { Client, Collection } = require('discord.js');
const bdd = require('../../bdd.json');

module.exports.run = (client, message, args) => {

    if(message.member.hasPermission('BAN_MEMBERS')) {
        if(message.content.length > 7){
            message_test = message.content.slice(6)
            bdd["message-test"] = message-test
            Savebdd()
        }
    }


};

module.exports.help = {
    name: "test",
    aliases: ['test'],
    category: 'zautre',
    description: "infos du serveur",
    usage: '',
    cooldown: 1,
    isUserAdmin: false,
    permissions: true,
    args: false
};
