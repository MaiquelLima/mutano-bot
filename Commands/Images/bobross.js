module.exports = ({
    name: "bobross",
    description: "Hmm Bobross pintando seu avatar?...",
    code: `
$image[https://api.tomio.codes/api/bobross?url=$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png];gif;png]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})
