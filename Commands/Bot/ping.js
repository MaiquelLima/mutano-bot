module.exports = ({
    name: "ping",
    description: "Mostrando a latência do atual do Mutanin :3",
    aliases: ["ms","latency","latencia","latência"],
    code: `
$if[$getServerVar[lang]==pt]
$addCmdReactions[🏓]
🐯 Minha Latência é: \`$botPingms\`
⚡ Latência da WebSocket é: \`$djsEval[client.ws.ping;yes]ms\`
🌐 Latência do Banco de Dados é:  \`$dbPingms\`
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[%time%;months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês] para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$addCmdReactions[🏓]
🐯 My Latency is: \`$botPingms\` 
⚡ WebSocket Latency is: \`$djsEval[client.ws.ping;yes]ms\`
🌐 Database Latency is: \`$dbPingms\`
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})
