module.exports.run = (client, message, args) => {

        const Discord = require('discord.js');
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Titre',
            url: 'https://www.google.com/',
            author: {
                name: 'Auteur de l\'embed',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
                url: 'https://www.google.com/',
            },
            description: 'La description ici',
            thumbnail: {
                url: 'https://i.imgur.com/wSTFkRM.png',
            },
            fields: [
                {
                    name: 'Premier Field',
                    value: 'description',
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: 'Second Field',
                    value: 'description un peu longue',
                    inline: true,
                },
                {
                    name: 'Troisième Field',
                    value: 'description vraiment beaucoup trop longue',
                    inline: true,
                },
                {
                    name: 'Quatrième Field',
                    value: 'description hyper mega vraiment beaucoup trop longue',
                    inline: true,
                },
            ],
            image: {
                url: 'https://i.imgur.com/wSTFkRM.png',
            },
            timestamp: new Date(),
            footer: {
                text: 'pied de page',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };
        
        message.channel.send({ embed: exampleEmbed });
    
};

module.exports.help = {
    name: "embed",
    aliases: ['embed'],
    category: 'zautre',
    description: "mute un utilisateur",
    usage: '',
    cooldown: 1,
    isUserAdmin: false,
    permissions: true,
    args: false
  };