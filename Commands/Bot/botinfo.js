module.exports = ({
    name: "botinfo",
    desc: "Saiba as principais informações dele",
    aliases: ["bi","bot","info","bot-info","infobot","info-bot"],
    code: `
$if[$getServerVar[lang]==pt]
$apiMessage[$channelID;;{thumbnail:$userAvatar[763109929300262953]}{title:Minhas Informações}{description:Tag: \`$userTag[763109929300262953]\`
ID: \`763109929300262953\`
\`\`\`Olá $username tudo bem? Estou torcendo que sim. Bem, meu nome é Mutano™ e sou um bot feito para ajudar e divertir vários servidores inclusive o meu favorito que se encontra o link dele no final da minha info. Estou muito feliz por estar aqui. Um pouco abaixo você vai ver uma informações legais sobre mim. E se precisar de mim pode me marcar.\`\`\`

Para mais informações use: \`$getServerVar[chamada]versão\` para ver minha versão, \`$getServerVar[chamada]ping\` para ver minha latência \`$getServerVar[chamada]status\` e $getServerVar[chamada]uptime para ver minha status e meu uptime...

Ou se caso queira saber informações mais detalhadas e técnicas sobre mim, use: \`$getServerVar[chamada]tech-botinfo\`

Gostou? Teve dúvidas? Entre no meu servidor de suporte usando \`$getServerVar[chamada]suporte\`

__**Criado em:**__
\`06 de outubro de 2020\`

__**CRIADOR**__
\`$username[852616816240885760]#$discriminator[852616816240885760]\` | \`852616816240885760\`

__**UPTIME**__
\`$uptime\`}{footer:Solicitado por $username}{color:#1ad46d};{actionRow:WebSite Oficial,2,5,$replaceText[https://mutanobot.site/;:;#COLON#];;no]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;️🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$apiMessage[$channelID;;{thumbnail:$userAvatar[763109929300262953]}{title:My Informations}{description:Tag: \`$userTag[763109929300262953]\`
ID: \`763109929300262953\` 
\`\`\`Hello $username is everything okay over there? ´ I hope so! So... my name is Mutano™ I'm bot made to help and amuse LOTS of servers including my favorite you can find the links on the end of my info. I'm so glad i'm here! A little bit bellow this, you are gonna see some cool information about me. And if you need me, you just have to ping me!.\`\`\`

For more information use: \`$getServerVar[chamada]version\` to see my version, \`$getServerVar[chamada]ping\` to see my latency \`$getServerVar[chamada]status\` and \`$getServerVar[chamada]uptime\` to see my status and uptime...

Or if you want to know more detailed and technical information about me, use: \`$getServerVar[chamada]tech-botinfo\`

Did you liked me? Have any doubts? Join my support server using: \`$getServerVar[chamada]support\`

__**Created in:**__
\`October 06, 2020\`

__**CREATOR**__
\`$username[852616816240885760]#$discriminator[852616816240885760]\` | \`852616816240885760\`}{footer:Asked by $username}{color:#1ad46d};{actionRow:Oficial WebSite,2,5,$replaceText[https://mutanobot.site/;:;#COLON#];;no]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;️🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})
