module.exports = ({
    name: "suporte",
    description: "Link de convite para o servidor do Mutano™",
    aliases: ["support"],
    code: `
$apiMessage[$channelID;;{description:Aqui está meu servidor oficial de suporte:}$addTimestamp{color:#1ad46d;{actionRow:Suporte,2,5,$replaceText[https://mutanobot.site/discord;:;#COLON#];;no]

$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
  `
})
