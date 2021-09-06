module.exports = ({
    name: "servericon",
    description: "Use isto para ver o ícone do servidor...",
    aliases: ["svicon", "iconserver", "icon-server", "iconsv", "icon-sv"],
    code: `

$author[$username;$authorAvatar]
$title[Aqui está o ícone do servidor]
$image[$serverIcon?size=4096]
$footer[$serverName[$guildID]]
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]


    `
})
