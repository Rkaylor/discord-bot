require('dotenv').config();

console.log(process.env.DISCORDJS_BOT_TOKEN);

//Bot login function

const { Client } = require('discord.js');

const client = new Client();

client.login(process.env.DISCORDJS_BOT_TOKEN)
