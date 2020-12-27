const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '%';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}`)
});

client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
  message.channel.send('Pong!')
  }
}
});

client.login('PASTE THE GODDAMN TOKEN HERE');