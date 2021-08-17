module.exports = ({
  name: "pressf",
  description: "Precione F pra isso por favor 😔",
  aliases: ["precionef", "pressionef", "f"],
  code: `
$if[$getServerVar[lang]==pt]
$reply[$messageID;{author: F}{description: Press F para $message}{color: #ff0000};no]
$addReactions[<:Fortnite_F:875449376066117632>]
$argsCheck[>1;{description: \`❌\`・Digite sua mensagem}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$reply[$messageID;{author: F}{description: Press F for $message}{color: #ff0000};no]
$addReactions[<:Fortnite_F:875449376066117632>]
$argsCheck[>1;{description: \`❌\`・Type your message}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
`
})
