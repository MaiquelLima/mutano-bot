module.exports = ({
    name: "userinfo",
    description: "Exibe as informações de um usuário...",
    aliases: ["ui", "user"],
    code: `
$thumbnail[$userAvatar[$findUser[$message]]]
$title[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$findUser[$message]];House Balance;<:badgeBalance:868611349540909098>];House Brilliance;<:badgeBrilliance:868611514624512023>];House Bravery;<:badgeBraveryHS:868611434412650496>];Nitro Classic;<:nitro_badge:879089786537787492>];Nitro Boosting;<:boosting:868612238687232061>];Early Verified Developer;<:Developer:879150639916146698>];Verified Developer;<:Developer:879150639916146698>];Verified Bot;<:botTag:744239056954851470>];, ;ﾠ];none;ﾠ]ﾠ$username[$findUser[$message]]]
$description[<:info:880926597740380220>・Datas
Conta criada em: \`$creationDate[$findUser[$message]]\` | ($replacetext[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findUser[$message];time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])

Entrou no servidor em: \`$memberJoinedDate[$findUser[$message]]\` | ($replacetext[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$findUser[$message];time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])

Este usuário usou \`$getGlobalUserVar[usedCmdsUser;$findUser[$message]]\` comandos meus



$addField[<:hashtag:881651918504599583>・Tag do Discord;\`$userTag[$findUser[$message]]\`;yes]
$addField[<:bookmark:881652285187452969>・ID;\`$findUser[$message]\`;yes]
$addField[<:cartao:881652052097372210>・Apelido;\`$nickname[$findUser[$message]]\`;yes]
$let[banner;$jsonRequest[https://cryptons.ga/api/v1/userbanner?id=$get[user];url;error]]
$let[user;$findMember[$message]]
$image[$replaceText[$get[banner];?size=1024;?size=4096]
$color[#1ad46d]
$footer[Solicitado por $username[$authorID];$authorAvatar]

$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
`
})
