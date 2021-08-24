module.exports = ({
    name: "youtube",
    description: "Quer assistir YouTube no Discord pelo computador? Vamos!",
    aliases: ["yt"],
    code: `
    $djsEval[const { DiscordTogether } = require('discord-together');
    
    client.discordTogether = new DiscordTogether(client);
    client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {
     return message.channel.send(":youtube:・**Here is your invitation to watch YouTube:** " + invite.code)
     });]
    $else
    I found nothing
    $endif
    $onlyIf[$voiceID!=;\:x:・You are not connected to a voice channel]
    $onlyIf[$hasPerms[$authorID;speak]==true;\:x:・You are not allowed to speak]
    $onlyIf[$getServerVar[lang]==pt;]
    `
})