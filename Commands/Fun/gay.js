module.exports = ({
    name: "gay",
    description: "Não sabe se é gay? Hmmm, você é?",
    aliases: ["gaynometro", "gaynômetro"],
    code: `
$if[$getServerVar[lang]==pt]
$reply[$messageID;{description: :rainbow_flag: <@$findUser[$message]> você é \`$random[1;100]%\` gay :flushed:}{color: #ea93dc}{thumbnail: $userAvatar[$findUser[$message]]}{author: $userTag[$authorID]}{footer: Comando utilizado para brincadeiras nada que vá além do devido respeito}{image: https://cdn.discordapp.com/attachments/860238066542182441/877737923842289694/mp4.gif};yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$onlyIf[$checkContains[$findUser[$message];852616816240885760]==false;Meu papai não é gay '-]
$elseif[$getServerVar[lang]==en]
$reply[$messageID;{description: :rainbow_flag: <@$findUser[$message]> you are \`$random[1;100]%\` gay :flushed:}{color: #ea93dc}{thumbnail: $userAvatar[$findUser[$message]]}{author: $userTag[$authorID]}{footer: Command used for jokes nothing that goes beyond due respect}{image: https://cdn.discordapp.com/attachments/860238066542182441/877737923842289694/mp4.gif};yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$onlyIf[$checkContains[$findUser[$message];852616816240885760]==false;My dad is not gay '-]
$endelseif
$endif
    `
})