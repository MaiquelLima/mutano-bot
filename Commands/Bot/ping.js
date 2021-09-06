module.exports = ({
    name: "ping",
    description: "Mostrando a latência do atual do Mutanin :3",
    aliases: ["ms","latency","latencia","latência"],
    code: `
🐯 Minha Latência é: \`$botPingms\`
⚡ Latência da WebSocket é: \`$djsEval[client.ws.ping;yes]ms\`
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})
