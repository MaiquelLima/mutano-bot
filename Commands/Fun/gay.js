module.exports = ({
    name: "gay",
    description: "Não sabe se é gay? Hmmm, você é?",
    aliases: ["gaynometro", "gaynômetro"],
    code: `
$if[$getServerVar[lang]==pt]
$reply[$messageID;{description: :rainbow_flag: <@$findUser[$message]> você é \`$random[1;100]%\` gay :flushed:}{color: #ea93dc}{thumbnail: $authorAvatar}{author: $userTag[$authorID]};yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$reply[$messageID;{description: :rainbow_flag: <@$findUser[$message]> you are \`$random[1;100]%\` gay :flushed:}{color: #ea93dc}{thumbnail: $authorAvatar}{author: $userTag[$authorID]};yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})