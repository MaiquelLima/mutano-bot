module.exports = ({
    name: "wink",
    description: "Ui ui... Alguém dando piscadinha por ai...",
    aliases: ["piscar", "piscada"],
    code: `
$if[$getServerVar[lang]==pt]
$author[$userTag[$authorID];$authorAvatar]
$thumbnail[$userAvatar[$findUser[$message[1]]]
$description[🥰 <@$findUser[$message]> recebeu uma piscadinha de <@$authorID> 😲]
$image[$jsonRequest[https://some-random-api.ml/animu/wink;link;error]]
$footer[Pedido por $username]
$addTimestamp
$color[#1ad46d]
$onlyIf[$memberExists[$findUser[$message[1]]]!=;{description: \❌・Este usuário não existe no meu banco de dados}{color: #ff0000}]
$argsCheck[>1;{description: \❌・Mencione ou insira o ID do usuário pra piscar}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$author[$userTag[$authorID];$authorAvatar]
$thumbnail[$userAvatar[$findUser[$message[1]]]
$description[🥰 <@$findUser[$message]> received a wink from <@$authorID> 😲]
$image[$jsonRequest[https://some-random-api.ml/animu/wink;link;error]]
$footer[Asked by $username]
$addTimestamp
$color[#1ad46d]
$onlyIf[$memberExists[$findUser[$message[1]]]!=;{description: \❌・This user does not exist in my database}{color: #ff0000}]
$argsCheck[>1;{description: \❌・Mention or enter user ID to wink}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})