module.exports = ({
    name: "jail",
    description: "Infelizmente todos neste comando, acabão em jaulas 😔",
    aliases: ["jaula", "preso", "aprisionado", "enjaulado", "prisão", "prisao", "cadeia"],
    code: `

$image[https://some-random-api.ml/canvas/jail?avatar=$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png];gif;png]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})
