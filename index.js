// Join discord.gg/arcticcafe or https://discord.gg/J9FKfAVXMt for support//
// Discord - Conquestor#8158 //

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - rich presence started!`
  )
  const r = new Discord.RichPresence()
    .setApplicationId('1079032565295484928')
    .setType('PLAYING')
    .setURL('https://twitch.tv/discord')
    .setState('Fusion X is the best!')

    .setName('Conquestor')
    .setDetails('Discord Bot Developer, Web Dev, Small softwares dev')
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/

    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1109833223455911946/1112734437386506271/1186ae9d2dcd593761bc3686d67e0968.jpg?width=437&height=433')
    .setAssetsLargeText('Conquestor')
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1109833223455911946/1112734437386506271/1186ae9d2dcd593761bc3686d67e0968.jpg?width=437&height=433')
    .setAssetsSmallText('Join Now!')
    .addButton('Arctic Cafe', 'https://discord.gg/arcticcafe')
    .addButton('BotSpaceX', 'https://discord.gg/J9FKfAVXMt')
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

client.login(process.env.TOKEN)

