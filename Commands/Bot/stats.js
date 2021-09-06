module.exports = ({
    name: "status",
    description: "Status em detalhes do Mutano™",
    aliases: ["stats"],
    code: `
$if[$getServerVar[lang]==pt]
$color[#1ad46d]
$thumbnail[$userAvatar[763109929300262953]]
$author[STATUS]
$description[\`\`\`Aqui estão as informações atuais sobre o meu status\`\`\`]

$addField[\`🏆\` **Canais:**;・Todos: \`$allChannelsCount\`
・Texto: \`$allChannelsCount[text]\`
・Voz: \`$allChannelsCount[voice]\`
・Notícias: \`$allChannelsCount[news]\`;yes]

$addField[\`👥\` **Usuários:**;\`$allMembersCount\`;yes]

$addField[\`🌎\` **Servidores:**;\`$serverCount\`;yes]

$addField[\`📝\` **Comandos:**;\`$sub[$commandsCount;4]\`;yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;{description: **:x: » Você está na minha blacklist, não pode executar meus comandos!**}{color: #ff0000}]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
    `
})