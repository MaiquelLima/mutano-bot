module.exports = ({
    name: "beijar",
    description: "Todos merecem beijos... :3",
    aliases: ["beijo", "bj", "kiss", "kisses", "kissed"],
    code: `
$if[$getServerVar[lang]==pt]
$author[$userTag[$authorID];$authorAvatar]
$thumbnail[$userAvatar[$findUser[$message[1]]]
$description[<@$authorID> beijou <@$findUser[$message[1]]>]
$footer[Pedido por $username]
$addTimestamp
$color[#1ad46d]
$image[$jsonRequest[https://nekos.best/api/v1/kiss;url;error]]
$onlyIf[$memberExists[$findUser[$message[1]]]!=;{description: \❌・Este usuário não existe no meu banco de dados}{color: #ff0000}]
$argsCheck[>1;{description: \❌・Mencione ou insira o ID do usuário pra beijar}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})