module.exports = ({
    name: "gay",
    description: "Não sabe se é gay? Hmmm, você é?",
    aliases: ["gaynometro", "gaynômetro"],
    code: `
$reply[$messageID;{description: :rainbow_flag: <@$findUser[$message]> você é \`$random[1;100]%\` gay :flushed:}{color: #ea93dc}{thumbnail: $userAvatar[$findUser[$message]]}{author: $userTag[$authorID]}{footer: Comando utilizado para brincadeiras nada que vá além do devido respeito}{image: https://some-random-api.ml/canvas/gay?avatar=$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png];gif;png]};yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$onlyIf[$checkContains[$findUser[$message];852616816240885760]==false;Meu papai não é gay '-]
    `
})