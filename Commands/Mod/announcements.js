module.exports = ({
    name: "anunciar",
    description: "Faço um super anúncio!",
    aliases: ["announcement","anuncios","anuncio","announce","announces"],
    code: `
$if[$getServerVar[lang]==pt]
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
$elseif[$getServerVar[lang]==en]
$deletecommand

$channelSendMessage[$channelID;\`✅\`・$username[$authorID], your ad has been sent successfully!]

$title[\`📢\` $replaceText[$message[1];+; ;-1]]

$description[$replaceText[$message;$message[1];;-1]]

$argsCheck[>1;Type in something to announce]

$color[#2f3136]
$footer[Announces by $username;$authorAvatar]
$addTimestamp
$useChannel[$getServerVar[cAnuncio]]
$onlyIf[$getServerVar[cAnuncio]!=;You did not set the advertising channel]
$onlyPerms[admin;:x: You do not have \`ADMINISTRATOR\` permission to execute this command!]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif`
})