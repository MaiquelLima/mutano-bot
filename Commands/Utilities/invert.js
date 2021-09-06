module.exports = ({
    name: "invert",
    description: "Socorram marrocoS",
    aliases: ["invertertexto","revert","reverter","inverter-texto","reverter-texto","reverter-texto","invert-text","inverttext", "inverter"],
    code: `
$addField[Invertido: «;$jsonRequest[https://api.devs-hub.xyz/reverse?text=$replaceText[$message; ;+;-1];reverse]]
$addField[» Texto:;$message]
$color[#1ad46d]
$argsCheck[>1;{description: Digite um texto para inverter}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]

    `
})
