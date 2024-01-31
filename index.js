const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent] });

client.on('messageCreate',message=>{
    // console.log(message.content)
    if(message.author.bot) return;
    message.reply({
        content:'hi from bot',
    });
});
client.on("interactionCreate",(interaction)=>{
    console.log(interaction);
    interaction.reply("pond!");
})

client.login(
    "MTIwMjI2MTg1NzU5MTg4NTg0NA.GmB6Nb.k85GIAI3HwOqYj32pkLADoiocfsuSqvCU8bh3k"
)

