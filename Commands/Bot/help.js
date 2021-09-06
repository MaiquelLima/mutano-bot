module.exports = ({
    name: "help",
    description: "Lista de Comandos do Mutano™",
    aliases: ["h","ajuda","cmds","comandos","commands"],
    code: `
$thumbnail[$userAvatar[763109929300262953]]
$title[Lista de Comandos]
$description[\`\`\`Abaixo se encontram meus comandos e as descrições deles. Espero que goste!\`\`\`
\`💚\` Obrigado por me utilizar :3

**Ao total tenho: $sub[$commandsCount;8] Comandos**

\`🐯\` __**BOT**__
\`help\` | \`botinfo\` | \`tech-botinfo\` | \`invite\` | \`setprefix\` | \`ping\` | \`status\` | \`versão\` | \`uptime\`

\`😂\` __**ENTRETENIMENTO**__
\`say\` | \`8ball\` | \`jockey-pô\` | \`ship\` | \`piada\` | \`pressf\` | \`gay\` | \`gado\` | \`abraçar\` | \`youtube\` | \`beijar\` | \`dado\` | \`wink\`

\`🌄\` __**IMAGENS**__
\`trash\` | \`drake\` | \`impostor\` | \`poof\` | \`stonks\` | \`triggered\` | \`trump\` | \`pixel\` | \`sepia\` | \`grey\` | \`blurple\` | \`negativo\` | \`prisao\` | \`cirle\`

\`🔨\` __**CONFIGURÁVEIS**__
\`set-anuncios\`

\`📰\` __**UTILITÁRIOS**__
\`serverinfo\` | \`avatar\` | \`invert\` | \`shortlink\` | \`userinfo\` | \`channelinfo\` | \`servericon\`

\`👮‍‍️\` __**MODERAÇÃO**__
\`clear\` | \`anunciar\`

Gostou? Teve dúvidas? Entre no meu servidor de suporte usando \`$getServerVar[chamada]suporte\`]
$footer[Help solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]

$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;️🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})
