module.exports = ({
    name: "channelinfo",
    descrption: "Quer saber mais informações sobre um determinado canal? Com esse comando você pode! 😉",
    aliases: ["ci"],
    code: `
    $thumbnail[$serverIcon]

    $title[Informações do canal]
    $description[**<#$findChannel[$message]>**]
    
    $addField[・ID:;\`$findChannel[$message]\`;yes]
    
    $addField[・Menção:;\`<#$findChannel[$message]>\`;yes]
    
    $addField[・Nome do canal:;$channelName[$findChannel[$message]];yes]
    
    $addField[・Criado em:;\`$creationDate[$findChannel[$message]]\` | ($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findChannel[$message];time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])
    
    $addTimestamp
    $footer[Solicitado por $username;$authorAvatar]
    $color[#1ad46d]
    $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
    $cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    
    `
})
