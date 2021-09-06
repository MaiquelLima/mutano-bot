module.exports = ({
    name: "pix",
    description: "Internet discada? Talvez...",
    aliases: ["pixelate", "px", "pixel"],
    code: `
$image[https://some-random-api.ml/canvas/pixelate?avatar=$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]?size=4096];gif;png];webp;png];jpg;png];jpeg;png]]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})
