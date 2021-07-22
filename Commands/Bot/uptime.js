module.exports = ({
    name: "uptime",
    description: "Saiba a quanto tempo estou ligado...",
    aliases: ["up", "time", "temp", "up-time"],
    code: `
$if[$getServerVar[lang]==pt]
$description[\`💫\` Carregando...]
$color[#1ad46d]
$editIn[5s;{description: Estou ligado a \`$uptime\`}{color: #1ad46d}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$description[\`💫\` Loading...]
$color[#1ad46d]
$editIn[5s;{description: My Uptime is \`$uptime\`}{color: #1ad46d}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})
