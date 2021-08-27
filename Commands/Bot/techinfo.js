module.exports = ({
    name: "tech",
    description: "Saiba as informações detalhadas e técnicas do Mutano™ :3",
    aliases: ["techinfo", "tech-info", "bot-techinfo", "botinfo tec", "tecinfo", "tec-info", "tech-botinfo", "techbotinfo"],
    code: `
$if[$getServerVar[lang]==pt]
$apiMessage[$channelID;;{thumbnail:$userAvatar[763109929300262953]}{title:Minhas Informações}{description:Tag: \`$userTag[763109929300262953]\`
ID: \`763109929300262953\`
\`\`\`Olá $username tudo bem? Espero que sim. Se você chegou até aqui e está querendo ver mais informações, certamente você têm algum conhecimento prévio do que vai tratar abaixo, ou se somente ficou curioso para saber mais detalhes sobre mim, sobre partes mais técnicas e detalhadas. Tudo isso, você encontra aqui :)\`\`\`

Para mais informações use: \`$getServerVar[chamada]versão\` para ver minha versão, \`$getServerVar[chamada]ping\` para ver minha latência \`$getServerVar[chamada]status\` e \`$getServerVar[chamada]uptime\` para ver minha status e meu uptime...

Gostou? Teve dúvidas? Entre no meu servidor de suporte usando \`$getServerVar[chamada]suporte\`

Ao total, $getVar[allUsedCmdsGlobal] comandos foram executados em mim

__**Dados de Armazenamento e Velocidade**__
<:database:880841159537201162>・Banco de Dados: \`mongo.db\`
<:host:880842799979851826>・Hospedagem: \`Heroku\`
・CPU: \`$cpu%\`
・Memória RAM: \`$ramMB\`

__**Fui feito em:**__
・[Aoi.js](https://aoi.js.org/) na linguagem [JavaScript](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript) usando [Node.js](https://nodejs.org/pt-br/about/)

__**Versões**__
・PackageLib: \`$packageVersion\`
・Node.js: \`$nodeVersion\`

__**Minhas Datas**__
・Fui criado: \`06 de outubro de 2020 às 15 horas 46 minutos e 25 segundos (horário de Brasília - BR)\`
・Estou vivo à: \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$clientID;time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora]\`
・Entrei aqui em: \`$memberJoinedDate[$clientID]\` | ($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$clientID;time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])

__**CRIADOR**__
\`$username[852616816240885760]#$discriminator[852616816240885760]\` | \`852616816240885760\` | [GitHub - guihrib](https://github.com/guihrib)}{footer:Solicitado por $username}{color:#1ad46d};{actionRow:WebSite Oficial,2,5,$replaceText[https://mutanobot.site/;:;#COLON#];;no]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$apiMessage[$channelID;;{thumbnail:$userAvatar[763109929300262953]}{title:My Informations}{description:Tag: \`$userTag[763109929300262953]\`
ID: \`763109929300262953\`
\`\`\`Hi $username, how are you? I hope so. If you have come this far and are wanting to see more information, surely you have some prior knowledge of what is going to be discussed below, or if you are just curious to know more details about me, about more technical and detailed parts. All of this, you will find here :)\`\`\`

For more information use: \`$getServerVar[chamada]version\` to see my version, \`$getServerVar[chamada]ping\` to see my latency \`$getServerVar[chamada]status\` and \`$getServerVar[chamada]uptime\` to see my status and uptime...

Did you liked me? Have any doubts? Join my support server using: \`$getServerVar[chamada]support\`

In total, $getVar[allUsedCmdsGlobal] commands were executed on me

__**Storage & Speed Data**__
<:database:880841159537201162>・Database: \`mongo.db\`
<:host:880842799979851826>・Hosting: \`Heroku\`
・CPU: \`$cpu%\`
・RAM Memory: \`$ramMB\`

__**I was made in:**__
・[Aoi.js](https://aoi.js.org/) in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) language using [Node.js](https://nodejs.org/en/about/)

__**Versions**__
・PackageLib: \`$packageVersion\`
・Node.js: \`$nodeVersion\`

__**My Dates**__
・I was created: \`October 06, 2020 at 15 hours 46 minutes and 25 seconds (Brasília - BR time)\`
・I am alive to: \`$creationDate[$clientID;time]\`
・I joined here at: \`$memberJoinedDate[$clientID]\` | ($memberJoinerDate[$clientID;time])

__**CREATOR**__
\`$username[852616816240885760]#$discriminator[852616816240885760]\` | \`852616816240885760\` | [GitHub - guihrib](https://github.com/guihrib)}{footer:Asked by $username}{color:#1ad46d};{actionRow:Oficial WebSite,2,5,$replaceText[https://mutanobot.site/;:;#COLON#];;no]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;️🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})
