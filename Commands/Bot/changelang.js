module.exports = ({
    name: "changelang",
    description: "Para mudar a linguagem atual do Bot",
    aliases: ["lang","otherlang","setlang"],
    code: `
$setServerVar[lang;$message]
$if[$getServerVar[lang]==pt]
$color[#5af657]
$description[» Language set to \`$message\`!]
$onlyIf[$checkContains[$message;en;pt]==true;{description: Você não digitou uma liguagem existente em mim. Para setar a linguagem digite: \`$getServerVar[chamada]changelang <pt ou en>\`}{color: #ff0000}]
$onlyPerms[admin;Você não tem a permissão de \`ADMINISTRATOR\` para executar este comando!]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$color[#5af657]
$description[» Linguagem setada para \`$message\`!]
$onlyIf[$checkContains[$message;en;pt]==true;{description: You have to type a language that actually exists in my data. To set the language, just type: \`$getServerVar[chamada]changelang <pt or en>\`}{color: #ff0000}]

$onlyPerms[admin;You do not have the \`ADMINISTRATOR\` permission to execute this command!]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;️🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})