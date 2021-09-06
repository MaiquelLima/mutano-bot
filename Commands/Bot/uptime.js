module.exports = ({
    name: "uptime",
    description: "Saiba a quanto tempo estou ligado...",
    aliases: ["up", "time", "temp", "up-time"],
    code: `
$description[\`💫\` Carregando...]
$color[#1ad46d]
$editIn[5s;{description: Estou ligado a \`$uptime\`}{color: #1ad46d}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
    `
})
