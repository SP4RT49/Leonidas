const Discord = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const client = new Discord.Client();

module.exports.run = (client, message, args) => {

    message.react("🏓");
    message.channel.send("🏓Pinging en cours...").then(m =>{
      // The math thingy to calculate the user's ping
        var ping = m.createdTimestamp - message.createdTimestamp;
        var api = Math.round(client.ping);
        //var uptime = msToTime(client.uptime)

      // Basic embed
        var embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("Serveur", `🤖 ping : \`${ping}\` **ms** **  **`)
        .addField("Uptime", `🟢 En ligne : \`${msToTime(client.uptime)}`)
        
        // Then It Edits the message with the ping variable embed that you created
        m.edit(embed)
        function msToTime(ms){
          days = Math.floor(ms / 86400000); // 24*60*60*1000
          daysms = ms % 86400000; // 24*60*60*1000
          hours = Math.floor(daysms / 3600000); // 60*60*1000
          hoursms = ms % 3600000; // 60*60*1000
          minutes = Math.floor(hoursms / 60000); // 60*1000
          minutesms = ms % 60000; // 60*1000
          sec = Math.floor(minutesms / 1000);
    
          let str = "";
          if (days) str = str + days + "\` **j** \`";
          if (hours) str = str + hours + "\` **h** \`";
          if (minutes) str = str + minutes + "\` **min** \`";
          if (sec) str = str + sec + "\` **sec**";
    
          return str;
        }
    });
};

module.exports.help = MESSAGES.COMMANDS.INFOS.PING;