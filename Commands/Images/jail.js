module.exports = ({
    name: "jail",
    description: "Infelizmente todos neste comando, acabão em jaulas 😔",
    aliases: ["jaula", "preso", "aprisionado", "enjaulado", "prisão", "prisao", "cadeia"],
    code: `
$if[$getServerVar[lang]==pt]
$image[https://some-random-api.ml/canvas/jail?avatar=$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]?size=4096];gif;png];png;png];jpg;png];jpeg;png]]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$image[https://some-random-api.ml/canvas/jail?avatar=$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]?size=4096];gif;png];png;png];jpg;png];jpeg;png]]
$footer[Asked by $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})