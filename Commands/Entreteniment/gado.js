module.exports = ({
    name: "gado",
    description: "Não sabe se é gado? Hmmm, você é gadin?",
    aliases: ["corno", "gadin", "gadonômetro", "cattle"],
    code: `
$if[$getServerVar[lang]==pt]
$reply[$messageID;{description: :ox: <@$findUser[$message]> você é \`$random[1;100]%\` gado :flushed:}{color: #8e7554}{thumbnail: $userAvatar[$findUser[$message]]}{author: $userTag[$authorID]}{footer: Comando utilizado para brincadeiras nada que vá além do devido respeito}{image: https://media2.giphy.com/media/SqTX7Jt2K2o2aol0ax/giphy.gif};yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$onlyIf[$checkContains[$findUser[$message];852616816240885760]==false;Meu papai não é gado '-]
$elseif[$getServerVar[lang]==en]
$reply[$messageID;{description: :ox: <@$findUser[$message]> you are \`$random[1;100]%\` cattle :flushed:}{color: #8e7554}{thumbnail: $userAvatar[$findUser[$message]]}{author: $userTag[$authorID]}{footer: Command used for jokes nothing that goes beyond due respect}{image: https://media2.giphy.com/media/SqTX7Jt2K2o2aol0ax/giphy.gif?cid=790b76110ef99369786b7cc12b9fe733d7b4cc4190afe4d9&rid=giphy.gif};yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$onlyIf[$checkContains[$findUser[$message];852616816240885760]==false;My dad is not cattle '-]
$endelseif
$endif
    `
})