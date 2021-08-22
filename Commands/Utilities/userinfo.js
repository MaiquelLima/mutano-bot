module.exports = ({
    name: "userinfo",
    description: "Exibe as informações de um usuário...",
    aliases: ["ui", "user"],
    code: `
$if[$getServerVar[lang]==pt]
$thumbnail[$userAvatar[$findUser[$message]]]
$author[$replaceText[$replaceText[$replaceText[$getUserBadges[$findUser[$message]];House Balance;<:badgeBalance:868611349540909098>];House Brilliance;<:badgeBrilliance:868611514624512023>];House Bravery;<:badgeBraveryHS:868611434412650496>] $username[$findUser[$message]]]
$description[・Conta criada em: \`$creationDate[$findUser[$message]]\` | ($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findUser[$message];time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês])

・Entrou no servidor em: \`$creationDate[$findUser[$message]]\` | ($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findUser[$message];time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês])

・Posição de entrada: \`$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinPosition[$findUser[$message]];st; ];nd; ];rd; ];th; ]\`

$addField[・Tag do Discord;\`$userTag[$findUser[$message]]\`;yes]
$addField[・ID;\`$findUser[$message]\`;yes]
$color[#1ad46d]
$footer[Solicitado por $username[$authorID];$authorAvatar]

$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]

$thumbnail[$userAvatar[$findUser[$message]]]
$author[$username[$findUser[$message]]]
$description[・Account created at: \`$creationDate[$findUser[$message]]\` | ($creationDate[$findUser[$message];time])

・Joined here at: \`$memberJoinedDate[$findUser[$message]]\`

・Joined position: \`$memberJoinPosition[$findUser[$message]]\`

$addField[・Discord Tag;\`$userTag[$findUser[$message]]\`;yes]
$addField[・ID;\`$findUser[$message]\`;yes]
$color[#1ad46d]
$footer[Asked by $username[$authorID];$authorAvatar]
$cooldown[5s;🙆‍♀️・Take it easy ,little hunter. wait %time% to execute my commands again!]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » You are in my blacklist, you can't execute my commands!**]
$endelseif
$endif
    `
})