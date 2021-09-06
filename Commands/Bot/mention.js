module.exports = ({
    name: "<@763109929300262953>",
    description: "Resposta a menção",
    aliases: ["<@!763109929300262953>"],
    nonPrefixed: true,
    code: `
$addCmdReactions[💚]
$thumbnail[$userAvatar[$clientID]]
$description[**Olá! Vi que me marcou. Sou Mutano™ o bot de diversão, moderação e util para tudo no Servidor! Meu prefixo neste servidor é ** \`$getServerVar[chamada]\` . **Para ter acesso a minha Lista de Comandos digite** \`$getServerVar[chamada]help\`.]

$footer[Executado por $username]
$addTimestamp
$color[#1ad46d]

$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;{description: **:x: » Você está na minha blacklist, não pode executar meus comandos!**}{color: #ff0000}]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
    `
})
