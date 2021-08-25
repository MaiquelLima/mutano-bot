module.exports = ({
    name: "youtube",
    description: "Quer assistir YouTube no Discord pelo computador? Vamos!",
    aliases: ["yt"],
    code: `
    $djsEval[const { DiscordTogether } = require('discord-together');
    
    client.discordTogether = new DiscordTogether(client);
    client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {
     return message.channel.send("<:youtube:879760132916007002>・**Aqui está o seu convite para assistir o YouTube:** " + invite.code)
     });]
     $onlyIf[$hasPerms[$authorID;speak]==true;\:x:・Você não tem permissão para falar]
     $onlyIf[$voiceID!=;\:x:・Você não está conectado em um canal de voz]
    $onlyIf[$getServerVar[lang]==pt;]
    `
})