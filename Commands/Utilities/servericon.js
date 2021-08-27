module.exports = ({
    name: "servericon",
    description: "Use isto para ver o ícone do servidor...",
    aliases: ["svicon", "iconserver", "icon-server", "iconsv", "icon-sv"],
    code: `
$if[$getServerVar[lang]==pt]
$author[$username;$authorAvatar]
$title[Aqui está o ícone do servidor]
$image[$replaceText[$serverName[$guildID];?size=2048;?size=4096]]
$footer[$serverName[$guildID]]
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$author[$username;$authorAvatar]
$title[Here's the server icon]
$image[$replaceText[$serverName[$guildID];?size=2048;?size=4096]]
$footer[$serverName[$guildID]]
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})