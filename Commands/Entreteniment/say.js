module.exports = ({
    name: "say",
    description: "Faça-o falar :)",
    aliases: ["falar"],
    code: `
> $message
_ _
Falado por <@$authorID>
$argsCheck[>1;{description: :x: » Digite algo para eu poder falar por você :upside_down:}{color: ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
    `
})