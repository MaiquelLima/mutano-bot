module.exports = ({
    name: "youtube",
    description: "Quer assistir YouTube no Discord pelo computador? Vamos!",
    aliases: ["yt"],
    code: `
    $djsEval[const { DiscordTogether } = require('discord-together');
    
    client.discordTogether = new DiscordTogether(client);
    client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {
     return message.channel.send("<:youtube:879760132916007002>・**Here is your invitation to watch YouTube:** " + invite.code)
     });]
     $onlyIf[$hasPerms[$authorID;speak]==true;\:x:・You are not allowed to speak]
     $onlyIf[$voiceID!=;\:x:・You are not connected to a voice channel]
     $onlyIf[$getServerVar[lang]==en;]
     $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
     $cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
    `
})