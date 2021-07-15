module.exports = ({
    name: "serverinfo",
    description: "Principais informações do servidor",
    aliases: ["infoserver","info-server","server-info"],
    code: `
$if[$getServerVar[lang]==pt]
$author[$serverName;$serverIcon]
$thumbnail[$serverIcon]
$description[\`\`\`Abaixo se encontra as informações sobre o servidor\`\`\`

__**Importantes**__
\`👑\` Dono: <@$ownerID> | \`$ownerID\`
ID do Servidor: \`$guildID\`
Criado em: \`$creationDate[$guildID]\`

__**Dados**__
Região: \`$serverRegion\`
Emojis: \`$emojiCount\`
Cargos: \`$roleCount\`
Cargo mais alto: \`$roleName[$highestServerRole]\`

__**Membros**__
Total: **$membersCount**
Humanos: **$sub[$membersCount;$botCount]**
Bots: **$botCount**

__**Canais:($channelCount)**__
Texto: \`$channelCount[text]\`
Voz: \`$channelCount[voice]\`

__**Nitro**__
\`🚀\` Boosts: \`$serverBoostCount\`
\`🌎\` Nível de Boost: \`Lvl: $serverBoostLevel\`]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$author[$serverName;$serverIcon]
$thumbnail[$serverIcon]
$description[\`\`\` You can check the information about the server here:\`\`\`

__**Important**__
\`👑\` Owner: <@$ownerID> | \`$ownerID\`
ID server: \`$guildID\`
Created in: \`$creationDate[$guildID]\`

__**Dates**__
Region: \`$serverRegion\`
Emojis: \`$emojiCount\`
Roles: \`$roleCount\`
Highest Role \`$roleName[$highestServerRole]\`

__**Channels:{$channelCount}**__
Text: \`$channelCount[text]\`
Voice: \`$channelCount[voice]\`

__**Members**__
All: **$membersCount**
Humans: **$sub[$membersCount;$botCount]**
Bots: **$botCount**

__**Nitro**__
\`🚀\` Boosts: \`$serverBoostCount\`
\`🌎\` Boost Level: \`Lvl: $serverBoostLevel\`]
$footer[Executed by: $username;$authorAvatar] 
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif

    `
})