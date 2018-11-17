const Discord = require('discord.js');
const client = new Discord.Client();


const Discord = require('discord.js');
const client = new Discord.Client();






client.on('message', message => {
    if(message.content === 'حيدر'){
        setInterval(function() {
            message.channel.send(`**Road To 100 Credit**`);
            }, 25).then.message.channel.send(`**let see how much credit we have.**`)

}});

client.on('message', message => {
    if(message.content === '**let see how much credit we have.**'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '#daily'){
        message.channel.send('#credit')
    }
});


client.on('message', message => {
    if(message.content === '#credit'){
        message.channel.send('حيدر')
    }
});


            



client.login(process.env.BOT_TOKEN);
