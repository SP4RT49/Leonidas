const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents} = require ('./util/loader');
const { token } = require('./config.json');
const bdd = require('./bdd.json');

const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection()); // c'est égal à "client.commands ou client.cooldowns"




loadCommands(client);
loadEvents(client);


function Savebdd(){ //écrire dans la bdd
    fs.writefile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}



//token du bot
client.login(token);