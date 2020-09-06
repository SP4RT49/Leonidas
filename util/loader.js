const { readdirSync, read, fstat } = require('fs');

const loadCommands = (client, dir = "./commands/") => { //Permet de lire les sous dossier de "commands"/ mais on ne peut plus mettre de fichier js dans le dossier global
    readdirSync(dir).forEach(dirs => { // "dir" = dossier / "dirs" = sous dossiers
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`../${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Commande chargée: ${getFileName.help.name}`);
        };
    });
};

const loadEvents = (client, dir = "./events/") => { //Permet de lire les sous dossier de "events"
    readdirSync(dir).forEach(dirs => { // "dir" = dossier / "dirs" = sous dossiers
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const event of events) {
            const evt = require(`../${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0]; //récupère s'qui se trove avant le ".js"
            client.on(evtName, evt.bind(null, client));
            
            console.log(`Event chargé: ${evtName}`);
        };
    });
};

module.exports = {
    loadCommands,
    loadEvents,

}