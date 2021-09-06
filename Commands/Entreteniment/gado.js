module.exports = ({
    name: "gado",
    description: "Não sabe se é gado? Hmmm, você é gadin?",
    aliases: ["corno", "gadin", "gadonômetro", "cattle"],
    code: `
$reply[$messageID;{description: :ox: <@$findUser[$message]> você é \`$random[1;100]%\` gado :flushed:}{color: #8e7554}{thumbnail: $userAvatar[$findUser[$message]]}{author: $userTag[$authorID]}{footer: Comando utilizado para brincadeiras nada que vá além do devido respeito}{image: https://media2.giphy.com/media/SqTX7Jt2K2o2aol0ax/giphy.gif};yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})