module.exports = ({
    name: "drake",
    description: "O que é bom? O que é ruim? Deixei que o Drake responda 😉",
    aliases: ["drak"],
    code: `
$if[$getServerVar[lang]==pt]
$image[https://api.devs-hub.xyz/drake?top=$replaceText[$splitText[1]&bottom=$splitText[2]; ;+;-1]]
$onlyIf[$splitText[2]!=;{description:Parece que faltou algo... Exemplo: texto1 / texto2}{color: #ff0000}]
$onlyIf[$splitText[1]!=;{description:Parece que faltou algo... Exemplo: texto1 / texto2}{color: #ff0000}]
$textSplit[$message;/]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$image[https://api.devs-hub.xyz/drake?top=$replaceText[$splitText[1]&bottom=$splitText[2]; ;+;-1]]
$onlyIf[$splitText[2]!=;{description:It feels like something was missing... Example: text1 / text2}{color: #ff0000}]
$onlyIf[$splitText[1]!=;{description:It feels like something was missing... Example: text1 / text2}{color: #ff0000}]
$textSplit[$message;/]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})