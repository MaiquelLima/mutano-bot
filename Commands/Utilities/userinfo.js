module.exports = ({
    name: "userinfo",
    description: "Exibe as informações de um usuário...",
    aliases: ["ui", "user"],
    code: `
$if[$getServerVar[lang]==pt]
$elseif[$getServerVar[lang]==en]
$thumbnail[$userAvatar[$findUser[$message]]]
$author[$username[$findUser[$message]]]
$description[・Account created at: \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findUser[$message];time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês]\`

・Joined here at: \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$findUser[$message];time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês]\`

・He was the **$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinPosition[$findUser[$message]];st; ];nd; ];rd; ];th; ]**to enter here
]
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