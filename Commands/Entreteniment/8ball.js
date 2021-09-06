module.exports = ({
    name: "8ball",
    description: "Faça uma pergunta que com certeza ele irá te responder ;)",
    desc: "Fazer uma pegunta para o Mutanin responder",
    aliases: ["perguntar", "vidente", "sabetudo"],
    code: `
$thumbnail[https://cdn.discordapp.com/attachments/757053078175219813/786117668792827904/1607495441886.png]

$author[$username;$authorAvatar]
$description[\`❗\` Você quer que eu te ajude com uma decisão? Está bem. Vamos lá!

:thinking: » __**Pergunta**__
\`$message\`

» __**Resposta**__
\`$randomText[Sim;Talvez;Será?;Não;Acho que não;Acho que sim;Poderia se...;Não sei muito bem;Não tenho informações o suficiente para responder a essa pergunta!;E eu tenho cara de saber sobre esse tipo de assunto!;Claro!;Muito Provável;Com certeza;Sem dúvida!;O que você acha?;Acho melhor não responder a isso;Não sou o melhor para responder a isso. Pergunte a seu amigo mais próximo.;Não me envolvo nesses assuntos.;Concordo plenamente;Sem sombra de dúvida;Você está certo!;Os outros estão errados! Você têm toda a razão!;Cara você é rei da razão está totalmente certo;Concordo sem nem saber mais fatos!]\`]
$footer[Pergunta feita por $username;$authorAvatar]$addTimestamp
$color[#1ad46d]
$argsCheck[>1;Digite sua pergunta para eu poder te ajudar!]

$onlyIf[$stringEndsWith[$message;?]==true;{description:**:x: » Sua pergunta não contém (?).**}{color: #ff0000}]
$textSplit[$message;]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})