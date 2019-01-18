const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const adminprefix = "-";
const devs = ['383606619671494659','531829352690614273'];

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
      } else     
  if (message.content.startsWith(adminprefix + 'wt')) {
        if (!devs.includes(message.author.id)) return;
  client.user.setActivity(argresult, {type:'WATCHING'});
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
        if (!devs.includes(message.author.id)) return;
  client.user.setActivity(argresult , {type:'LISTENING'});
  } else    
if (message.content.startsWith(adminprefix + 'sett')) {
      if (!devs.includes(message.author.id)) return;
  client.user.setGame(argresult, "https://www.twitch.tv/xkilleryt");//حقوق دايموند كودزحقوق دايموند كودز
}
});

client2.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client2.user.setGame(argresult);
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client2.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client2.user.setAvatar(argresult);
      } else     
  if (message.content.startsWith(adminprefix + 'wt')) {
        if (!devs.includes(message.author.id)) return;
  client2.user.setActivity(argresult, {type:'WATCHING'});
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
        if (!devs.includes(message.author.id)) return;
  client2.user.setActivity(argresult , {type:'LISTENING'});
  } else    
if (message.content.startsWith(adminprefix + 'sett')) {
      if (!devs.includes(message.author.id)) return;
  client2.user.setGame(argresult, "https://www.twitch.tv/xkilleryt");//حقوق دايموند كودزحقوق دايموند كودز
}
});

client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
