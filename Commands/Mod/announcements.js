module.exports = ({
    name: "anunciar",
    description: "Faço um super anúncio!",
    aliases: ["announcement","anuncios","anuncio","announce","announces"],
    code: `

$deletecommand

$channelSendMessage[$channelID;\`✅\`・$username[$authorID], seu anúncio foi enviado com sucesso!]

$title[\`📢\` $replaceText[$message[1];+; ;-1]]

$description[$replaceText[$message;$message[1];;-1]]

$argsCheck[>1;Digite algo para anunciar]

$color[#2f3136]
$footer[Anunciado por $username;$authorAvatar]
$addTimestamp
$useChannel[$getServerVar[cAnuncio]]
$onlyIf[$getServerVar[cAnuncio]!=;Você não setou o canal de anúncios]
$onlyPerms[admin;:x: Você não tem a permissão de \`ADMINISTRADOR\` para executar este comando!]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
`
})
