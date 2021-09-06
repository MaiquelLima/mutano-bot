module.exports = ({
    name: "youtube",
    description: "Quer assistir YouTube no Discord pelo computador? Vamos!",
    aliases: ["yt"],
    code: `
    $djsEval[const { DiscordTogether } = require('discord-together');
    
    client.discordTogether = new DiscordTogether(client);
    client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {
     return message.channel.send("<:youtube:879760132916007002>・**Aqui está o seu convite para assistir o YouTube (OBS: Este comando funciona apenas para computador):** " + invite.code)
     });]
     $onlyIf[$hasPerms[$authorID;speak]==true;\:x:・Você não tem permissão para falar]
     $onlyIf[$voiceID!=;\:x:・Você não está conectado em um canal de voz]
     $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
     $cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})