module.exports = ({
    name: "userinfo",
    description: "Exibe as informações de um usuário...",
    aliases: ["ui", "user"],
    code: `
$if[$getServerVar[lang]==pt]
$thumbnail[$userAvatar[$findUser[$message]]]
$title[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$findUser[$message]];House Balance;<:badgeBalance:868611349540909098>];House Brilliance;<:badgeBrilliance:868611514624512023>];House Bravery;<:badgeBraveryHS:868611434412650496>];Nitro Classic;<:nitro_badge:879089786537787492>];Nitro Boosting;<:boosting:868612238687232061>];Early Verified Developer;<:Developer:879150639916146698>];Verified Developer;<:Developer:879150639916146698>];Verified Bot;<:botTag:744239056954851470>];, ;ﾠ];none;ﾠ]ﾠ$username[$findUser[$message]]]
$description[・Conta criada em: \`$creationDate[$findUser[$message]]\` | ($replacetext[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findUser[$message];time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])

・Entrou no servidor em: \`$memberJoinedDate[$findUser[$message]]\` | ($replacetext[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$findUser[$message];time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])

・Posição de entrada: \`$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinPosition[$findUser[$message]];st; ];nd; ];rd; ];th; ]\`

・Este usuário usou \`$getGlobalUserVar[usedCmdsUser;$findUser[$message]]\` comandos meus

$addField[・Tag do Discord;\`$userTag[$findUser[$message]]\`;yes]
$addField[・ID;\`$findUser[$message]\`;yes]
$image[$replaceText[$replaceText[$checkCondition[$get[banner]==null];true;https://cdn.discordapp.com/attachments/858905592801656853/867814690482028564/banner_invisible.png];false;$replaceText[$get[banner];?size=1024;?size=4096]]]
$let[banner;$jsonRequest[https://cryptons.ga/api/v1/userbanner?id=$get[user];url;error]]
$let[user;$findMember[$message]]
$color[#1ad46d]
$footer[Solicitado por $username[$authorID];$authorAvatar]

$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]

$thumbnail[$userAvatar[$findUser[$message]]]
$title[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$findUser[$message]];House Balance;<:badgeBalance:868611349540909098>];House Brilliance;<:badgeBrilliance:868611514624512023>];House Bravery;<:badgeBraveryHS:868611434412650496>];Nitro Classic;<:nitro_badge:879089786537787492>];Nitro Boosting;<:boosting:868612238687232061>];Early Verified Developer;<:Developer:879150639916146698>];Verified Developer;<:Developer:879150639916146698>];Verified Bot;<:botTag:744239056954851470>];, ;ﾠ];none;ﾠ]ﾠ$username[$findUser[$message]]]
$description[・Account created at: \`$creationDate[$findUser[$message]]\` | ($creationDate[$findUser[$message];time])

・Joined here at: \`$memberJoinedDate[$findUser[$message]]\` | ($memberJoinerDate[$findUser[$message];time])

・Joined position: \`$memberJoinPosition[$findUser[$message]]\`

・This user used \`$getGlobalUserVar[usedCmdsUser;$findUser[$message]]\` commands of mine

$addField[・Discord Tag;\`$userTag[$findUser[$message]]\`;yes]
$addField[・ID;\`$findUser[$message]\`;yes]
$image[$replaceText[$replaceText[$checkCondition[$get[banner]==null];true;https://cdn.discordapp.com/attachments/858905592801656853/867814690482028564/banner_invisible.png];false;$replaceText[$get[banner];?size=1024;?size=4096]]]
$let[banner;$jsonRequest[https://cryptons.ga/api/v1/userbanner?id=$get[user];url;error]]
$let[user;$findMember[$message]]
$color[#1ad46d]
$footer[Asked by $username[$authorID];$authorAvatar]
$cooldown[5s;🙆‍♀️・Take it easy ,little hunter. wait %time% to execute my commands again!]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » You are in my blacklist, you can't execute my commands!**]
$endelseif
$endif
    `
})
