const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('AnimeTiddies is online bitches!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    msg = message.content.toLowerCase();

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'bich'){
        client.commands.get('bich').execute(message, args);
    } else if (command == 'vibe'){
        client.commands.get('vibe').execute(message, args);
    } else if (command == 'showmedatass'){
        client.commands.get('showmedatass').execute(message, args);
    } else if (command == 'playshrek1'){
        client.commands.get('playshrek1').execute(message, args);
    } 
    
    if (msg.startsWith (prefix + "hetalia")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send  ( {files: ["./images/" + imageNumber + ".png"]} )
    }
});







