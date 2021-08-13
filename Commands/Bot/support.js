module.exports = ({
    name: "suporte",
    description: "Link de convite para o servidor do Mutano™",
    aliases: ["support"],
    code: `
$if[$getServerVar[lang]==pt]
$apiMessage[;{description:Aqui está meu servidor oficial de suporte:}$addTimestamp{color:#1ad46d;{actionRow:Suporte,2,5,$replaceText[https://mutanobot.site/discord;:;#COLON#];;no]

$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$apiMessage[;{description:Here is my Official Support Server:}$addTimestamp{color:#1ad46d;{actionRow:Support,2,5,$replaceText[https://mutanobot.site/discord;:;#COLON#];;no]

$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
  `
})