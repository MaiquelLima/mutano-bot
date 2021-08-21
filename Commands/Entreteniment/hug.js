module.exports = ({
    name: "abraço",
    description: "Todos merecem abraços... :3",
    aliases: ["abraco", "hug", "hugs"],
    code: `
$if[$getServerVar[lang]==pt]
$author[$userTag[$authorID];$authorAvatar]
$thumbnail[$userAvatar[$findUser[$message[1]]]
$description[<@$authorID> abraçou <@$findUser[$message[1]]>]
$image[$jsonRequest[https://some-random-api.ml/animu/hug;link;error]]
$argsCheck[>1;{description: \❌・Mencione ou insira o ID do usuário pra abraçar}{color: #ff0000}]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;{description: \❌・Este usuário não existe}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$author[$userTag[$authorID];$authorAvatar]
$thumbnail[$userAvatar[$findUser[$message[1]]]
$description[<@$authorID> embraced <@$findUser[$message[1]]>]
$image[$jsonRequest[https://some-random-api.ml/animu/hug;link;error]]
$argsCheck[>1;{description: \❌・Mention or enter user ID to hug}{color: #ff0000}]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;{description: \❌・This user does not exist}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})