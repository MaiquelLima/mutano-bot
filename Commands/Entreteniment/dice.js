module.exports = ({
    name: "dado",
    description: "Use isto para ver o ícone de algum servidor...",
    aliases: ["jogardado", "playdado", "play-dice", "playdice", "dice"],
    code: `
$if[$getServerVar[lang]==pt]
$author[**Jogando o dado...**;https://cdn.discordapp.com/emojis/880561536328958012.gif?v=1]
$description[_ _]
$editIn[6s;{thumbmail: $authorAvatar}{author: **Seu dado de 6 lados caiu!**}{description: E ele caiu no número \`$random[1;6]\`}{footer: Solicitado por $username}{color: #1ad46d}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$author[**Playing the dice...**;https://cdn.discordapp.com/emojis/880561536328958012.gif?v=1]
$description[_ _]
$editIn[6s;{thumbmail: $authorAvatar}{author: **Your 6-sided die fell!**}{description: And he fell in the number \`$random[1;6]\`}{footer: Asked by $username}{color: #1ad46d}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})