const {REST , Routes} = require('discord.js');

const commands = [
    {
        name:'ping',
        description:'Replies with Pong!',
    },
];
const rest = new REST({version:"10"}).setToken("MTIwMjI2MTg1NzU5MTg4NTg0NA.GmB6Nb.k85GIAI3HwOqYj32pkLADoiocfsuSqvCU8bh3k");
(async()=>{
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1202261857591885844"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();