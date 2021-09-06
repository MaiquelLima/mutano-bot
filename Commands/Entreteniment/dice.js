module.exports = ({
    name: "dado",
    description: "Use isto para ver o ícone de algum servidor...",
    aliases: ["jogardado", "playdado", "play-dice", "playdice", "dice"],
    code: `
$author[Jogando o dado...;https://cdn.discordapp.com/emojis/880561536328958012.gif?v=1]
$description[_ _]
$color[#1ad46d]
$editIn[6s;{thumbnail: $authorAvatar}{author: Seu dado de 6 lados caiu!}{description: E ele caiu no número \`$random[1;6]\`}{footer: Solicitado por $username}{color: #1ad46d}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})