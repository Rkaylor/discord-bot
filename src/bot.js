require('dotenv').config();

console.log(process.env.DISCORDJS_BOT_TOKEN);

//Bot login function

const { Client, Message } = require('discord.js');
const client = new Client();
const PREFIX = "$";

client.on('ready', () =>{
    console.log('the bot has logged in.')
    console.log(`${client.user.tag}`)
});

client.on('message', async (message) => {
    if (message.author.bot) return; 
    if (message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
        
        if(CMD_NAME === 'kick'){
            if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.reply('you dont have permissions')
            if (args.length === 0) return message.reply('please provide an ID');
            const member = message.guild.members.cache.get(args[0]);
            if (member) {
                member
                .kick()
                .then((member) => message.channel.send (`${member} was kcked.`))
                .catch((err) => message.channel.send('I cant kick that user : ('));
            } else {
                message.channel.send('that member was not found ');
            }
        } else if (CMD_NAME === 'ban') {
            if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.reply('you dont have permissions');
            if (args.length === 0) return message.reply('please provide an ID');

        try{
            const user = await message.guild.members.ban(args[0])
            message.channel.send('User was banned succesfully')
        }   catch (err){
            message.channel.send('an error occured.')
        }
        }
    }
});

//Emoji Reacton
client.on('messageReactionAdd', (reaction, user) => {
    const { name } = reaction.emoji;
    const member =reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === ''){
        switch(name){
            case '🍎':
            break;
            case '🍌':
            break;
            case '🍇':
            break;
            case '🍑':
            break;
            
        }
    }
})

client.login(process.env.DISCORDJS_BOT_TOKEN)
