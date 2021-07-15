module.exports = ({
    name: "ping",
    description: "Mostrando a latência do atual do Mutanin :3",
    aliases: ["ms","latency","latencia","latência"],
    code: `
$if[$getServerVar[lang]==pt]
$addCmdReactions[🏓]
🐯 Minha Latência é: \`$botPingms\`
⚡ Latência da API é: \`$pingms\`
🌐 Latência do Banco de Dados é:  \`$dbPingms\`
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$addCmdReactions[🏓]
🐯 My Latency is: \`$botPingms\` 
⚡ API Latency is: \`$pingms\`
🌐 Database Latency is: \`$dbPingms\`
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})