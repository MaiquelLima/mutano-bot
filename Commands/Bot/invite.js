module.exports = ({
    name: "invite",
    description: "Convite para adicionar o Mutano™",
    aliases: ["convite"],
    code: `
$if[$getServerVar[lang]==pt]
$apiMessage[;{thumbnail:$userAvatar[763109929300262953]}{title:Olá! Vi que quer me adicionar!}{description:Para me adicionar em um servidor clique aqui
Para ver meus comandos e executá-los ao me adicionar digite \`$getServerVar[chamada]help\`

Ah, e obrigado por me escolher para ser o bot do seu servidor \`💚\`}{color:#1ad46d;{actionRow:Me Adicione,2,5,$replaceText[https://mutanobot.site/invite;:;#COLON#];;no]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;{description: **:x: » Você está na minha blacklist, não pode executar meus comandos!**}{color: #ff0000}]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$apiMessage[;{thumbnail:$userAvatar[763109929300262953]}{title:Hey there! I see that you want to add me!}{description:To see my commands and execute them when you add me, you just have to type \`$getServerVar[chamada]help\`

Oh, i forgot to say something, thanks for choosing me to be the newest bot on your server \`💚\`}{color:#1ad46d;{actionRow:Add Me,2,5,$replaceText[https://mutanobot.site/invite;:;#COLON#];;no]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})