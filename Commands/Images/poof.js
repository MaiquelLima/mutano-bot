module.exports = ({
    name: "tuxe",
    description: "O que é bom? O que é ruim? Deixei que o velho Urso Poof responda 😉",
    aliases: ["tuxedo","poof"],
    code: `
$image[https://api.devs-hub.xyz/tuxedo-pooh?normal=$replaceText[$splitText[1]; ;+;-1]&tuxedo=$replaceText[$splitText[2]; ;+;-1]]
$onlyIf[$splitText[2]!=;{description:Parece que faltou algo... Exemplo: texto1 / texto2}{color: #ff0000}]
$onlyIf[$splitText[1]!=;{description:Parece que faltou algo... Exemplo: texto1 / texto2}{color: #ff0000}]
$textSplit[$message;/]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})
