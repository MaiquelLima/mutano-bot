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
Criado em: \`$creationDate[$guildID]\` | ($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])

__**Dados**__
Região: \`$serverRegion\`
Emojis: \`$emojiCount\`
Cargos: \`$roleCount\`
Cargo mais alto: \`$roleName[$highestServerRole]\`


__**Canais:($channelCount)**__
Texto: \`$channelCount[text]\`
Voz: \`$channelCount[voice]\`

__**Membros: ($membersCount)**__

__**Nitro**__
\`🚀\` Boosts: \`$serverBoostCount\`
\`🌎\` Nível de Boost: \`Lvl: $serverBoostLevel\`]
$image[$replaceText[$replaceText[$serverBanner;webp;png;gif]?size=4096;null;https://cdn.discordapp.com/attachments/858905592801656853/867814690482028564/banner_invisible.png;]]
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
Created in: \`$creationDate[$guildID]\` | ($creationDate[$guildID;time])

__**Dates**__
Region: \`$serverRegion\`
Emojis: \`$emojiCount\`
Roles: \`$roleCount\`
Highest Role \`$roleName[$highestServerRole]\`

__**Channels:{$channelCount}**__
Text: \`$channelCount[text]\`
Voice: \`$channelCount[voice]\`

__**Members: ($membersCount)**__

__**Nitro**__
\`🚀\` Boosts: \`$serverBoostCount\`
\`🌎\` Boost Level: \`Lvl: $serverBoostLevel\`]
$image[$replaceText[$replaceText[$serverBanner;webp;png;gif]?size=4096;null;https://cdn.discordapp.com/attachments/858905592801656853/867814690482028564/banner_invisible.png;]]
$footer[Executed by: $username;$authorAvatar] 
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif

    `
})