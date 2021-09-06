module.exports = ({
    name: "invite",
    description: "Convite para adicionar o Mutano™",
    aliases: ["convite"],
    code: `
$apiMessage[$channelID;;{thumbnail:$userAvatar[763109929300262953]}{title:Olá! Vi que quer me adicionar!}{description:Para me adicionar em um servidor clique aqui
Para ver meus comandos e executá-los ao me adicionar digite \`$getServerVar[chamada]help\`

Ah, e obrigado por me escolher para ser o bot do seu servidor \`💚\`}{color:#1ad46d;{actionRow:Me Adicione,2,5,$replaceText[$replaceText[https://discord.com/api/oauth2/authorize?client_id=763109929300262953&permissions=8&scope=bot%20identify%20applications.commands;:;#COLON#];=;#EQUAL#];;no]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;{description: **:x: » Você está na minha blacklist, não pode executar meus comandos!**}{color: #ff0000}]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})
