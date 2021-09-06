module.exports = ({
  name: "pressf",
  description: "Precione F pra isso por favor 😔",
  aliases: ["precionef", "pressionef", "f"],
  code: `
$author[$userTag[$authorID]]
$title[F]
$description[Press F para $message]
$thumbnail[$authorAvatar]
$addTimestamp
$color[#ff0000]
$addReactions[<:Fortnite_F:875449376066117632>]
$argsCheck[>1;{description: \`❌\`・Digite sua mensagem}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
`
})
