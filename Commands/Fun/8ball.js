module.exports = ({
    name: "8ball",
    description: "Faça uma pergunta que com certeza ele irá te responder ;)",
    desc: "Fazer uma pegunta para o Mutanin responder",
    aliases: ["perguntar"],
    code: `
$if[$getServerVar[lang]==pt]
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
$elseif[$getServerVar[lang]==en]
$thumbnail[https://cdn.discordapp.com/attachments/757053078175219813/786117668792827904/1607495441886.png]

$author[$username;$authorAvatar]
$description[\`❗\` Do you want me to help you with a decision? All right! Let's go!

:thinking: » __**Question:**__
\`$message\`

» __**Answer:**__
\`$randomText[Yes;Maybe;Is it true?;No;I don't think so;I supose so;It could be true...;I don't really know;I don't have enough infromations to answer you question!;Do i look like i wanna hear a single thing about this subject?;Of course!;Probably yes;No doubts!;What do you think about this?;I think it's better not to answer this.;I'm probably not the best one to answer your question. Try to ask this question to a closest friend.;I don't get involved in this kind of subjects.;I completely agree with you!;Without a single doubt!;You are right!;All the other ones are wrong! You're absolutely right!;Dude, you are so right, that i should call you the king of the reason;I agree without even asking for more facts!]\`]
$footer[Question made by: $username;$authorAvatar]$addTimestamp
$color[#1ad46d]
$argsCheck[>1;Type your question in order to get your answer!]

$onlyIf[$stringEndsWith[$message;?]==true;{description:**:x: » Your question doesn't contains (?).**}{color: #ff0000}]
$textSplit[$message;]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;{description: **:x: » You are in my blacklist, you can't execute my commands!**}{color: #ff0000}]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})