module.exports = ({
    name: "trump",
    description: "Faça o Trump falar como se tivesse publicado no Twitter :0",
    aliases: ["announce-trup", "anunciar-trump", "say-trump", "anunciartrump", "saytrump"],
    code: `
<@$authorID>
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;%20;-1]]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$message[1]!=;{description::x: » Você não digitou algo para o Trump falar :/}{color:FF0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})
