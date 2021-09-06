module.exports = ({
    name: "abraço",
    description: "Todos merecem abraços... :3",
    aliases: ["abraco", "hug", "hugs"],
    code: `
$author[$userTag[$authorID];$authorAvatar]
$thumbnail[$userAvatar[$findUser[$message[1]]]
$description[<@$authorID> abraçou <@$findUser[$message[1]]>]
$footer[Pedido por $username]
$addTimestamp
$color[#1ad46d]
$image[$jsonRequest[https://some-random-api.ml/animu/hug;link;error]]
$argsCheck[>1;{description: \❌・Mencione ou insira o ID do usuário pra abraçar}{color: #ff0000}]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;{description: \❌・Este usuário não existe}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})