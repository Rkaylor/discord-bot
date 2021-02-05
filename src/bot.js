require('dotenv').config();

console.log(process.env.DISCORDJS_BOT_TOKEN);

//Bot login function

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "$";

client.on('ready', () =>{
    console.log('the bot has logged in.')
    console.log(`${client.user.tag}`)
});

client.on('message', (message) => {
    if (message.author.bot) return; 
    if (message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
        
        if(CMD_NAME === 'kick'){
            message.channel.send('The User has bee kicked')
        }
        
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN)
