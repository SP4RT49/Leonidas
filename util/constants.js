const MESSAGES = {
    COMMANDS: {
        INFOS: {
            AVATAR: {
                name: "avatar",
                aliases: ['avatar', 'av'],
                category: 'infos',
                description: "avatar du membre",
                usage: '<@user>',
                cooldown: 1,
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            HELP: {
                name: "help",
                aliases: ['help'],
                category: 'infos',
                description: "référencement des commandes",
                usage: '<command_name>',
                cooldown: 3,
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            PING: {
                name: "ping",
                aliases: ['ping'],
                category: 'infos',
                description: "temps de communication",
                usage: '',
                cooldown: 10,
                isUserAdmin: false,
                permissions: false,
                args: false
            },

            SERVER: {
                name: "server",
                aliases: ['server'],
                category: 'infos',
                description: "infos du serveur",
                usage: '',
                cooldown: 1,
                isUserAdmin: false,
                permissions: false,
                args: false
            }

        },// FIN DIR ./INFOS

        MODERATION: {
            ADDROLE: {
                name: "add",
                aliases: ['add'],
                category: 'moderation',
                description: "ajouter un rôle",
                usage: "<role>",
                cooldown: 1,
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            ADDS: {
                name: "adds",
                aliases: ['adds'],
                category: 'moderation',
                description: "ajouter plusieurs rôles",
                usage: "<role1> <role2>",
                cooldown: 1,
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            DEL: {
                name: "del",
                aliases: ['del'],
                category: 'moderation',
                description: "enlever un rôle",
                usage: "<role>",
                cooldown: 1,
                isUserAdmin: false,
                permissions: true,
                args: true
            },

            BAN: {
                name: "ban",
                aliases: ['ban'],
                category: 'moderation',
                description: "Bannir un utilisateur",
                usage: '<@user> <raison>',
                cooldown: 1,
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            KICK: {
                name: "kick",
                aliases: ['kick'],
                category: 'moderation',
                description: "Expulse un utilisateur",
                usage: '<@user> <raison>',
                cooldown: 1,
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            MUTE: {
                name: "mute",
                aliases: ['mute'],
                category: 'moderation',
                description: "mute un utilisateur",
                usage: '<@user> <temps>',
                cooldown: 1,
                isUserAdmin: true,
                permissions: true,
                args: true
            },

            CLEAR: {
                name: "clear",
                aliases: ['clear'],
                category: 'moderation',
                description: "Supprimer un nombre de message",
                usage: '<nombre_de_message>',
                cooldown: 1,
                isUserAdmin: false,
                permissions: true,
                args: true
            },


        },// FIN DIR ./COMMANDES

        ZAUTRE: {

        },


    }
}



exports.MESSAGES = MESSAGES;