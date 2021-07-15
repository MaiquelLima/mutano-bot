module.exports = ({
    name: "say",
    description: "Faça-o falar :)",
    aliases: ["falar"],
    code: `
$if[$getServerVar[lang]==pt]
> $message
_ _
Falado por <@$authorID>
$argsCheck[>1;{description: :x: » Digite algo para eu poder falar por você :upside_down:}{color: ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
> $message
_ _
Send by: <@$authorID>
$argsCheck[>1;{description: :x: » Type something so i can say it for you! :upside_down:}{color: ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})