module.exports = ({
    name: "botinfo",
    desc: "Saiba as principais informações dele",
    aliases: ["bi","bot","info","bot-info","infobot","info-bot"],
    code: `
$apiMessage[$channelID;;$botTyping{thumbnail:$userAvatar[763109929300262953]}{title:Minhas Informações}{description:Tag: \`$userTag[763109929300262953]\`
ID: \`763109929300262953\`
\`\`\`Olá $username tudo bem? Estou torcendo que sim. Bem, meu nome é Mutano™ e sou um bot feito para ajudar e divertir vários servidores inclusive o meu favorito que se encontra o link dele no final da minha info. Estou muito feliz por estar aqui. Um pouco abaixo você vai ver uma informações legais sobre mim. E se precisar de mim pode me marcar.\`\`\`

Para mais informações use: \`$getServerVar[chamada]versão\` para ver minha versão, \`$getServerVar[chamada]ping\` para ver minha latência \`$getServerVar[chamada]status\` e \`$getServerVar[chamada]uptime\` para ver minha status e meu uptime...

Ou se caso queira saber informações mais detalhadas e técnicas sobre mim, use: \`$getServerVar[chamada]tech-botinfo\`

Gostou? Teve dúvidas? Entre no meu servidor de suporte usando \`$getServerVar[chamada]suporte\`

__**Criado em:**__
\`06 de outubro de 2020\`

__**CRIADOR**__
\`$username[852616816240885760]#$discriminator[852616816240885760]\` | \`852616816240885760\` | [GitHub - guihrib](https://github.com/guihrib)}{footer:Solicitado por $username}{color:#1ad46d};{actionRow:WebSite Oficial,2,5,$replaceText[https://mutanobot.site/;:;#COLON#];;no]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;️🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})
