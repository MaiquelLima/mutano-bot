module.exports = ({
    name: "invert",
    description: "Socorram marrocoS",
    aliases: ["invertertexto","revert","reverter","inverter-texto","reverter-texto","reverter-texto","invert-text","inverttext", "inverter"],
    code: `
$if[$getServerVar[lang]==pt]
$addField[Invertido: «;$jsonRequest[https://api.devs-hub.xyz/reverse?text=$replaceText[$message; ;+;-1];reverse]]
$addField[» Texto:;$message]
$color[#1ad46d]
$argsCheck[>1;{description: Digite um texto para inverter}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$addField[» Text:;$message]
$addField[Inverted: «;$jsonRequest[https://api.devs-hub.xyz/reverse?text=$replaceText[$message; ;+;-1];reverse]]
$color[#1ad46d]
$argsCheck[>1;{description: Type a text to invert}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})