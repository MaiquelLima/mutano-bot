module.exports = ({
    name: "channelinfo",
    descrption: "Quer saber mais informações sobre um determinado canal? Com esse comando você pode! 😉",
    aliases: ["ci"],
    code: `
    $if[$getServerVar[lang]==pt]
    $thumbnail[$serverIcon]

    $title[Informações do canal <#$findChannel[$message]>]
    
    $addField[・ID:;\`$findChannel[$message]\`;yes]
    
    $addField[・Menção:;\`<#$findChannel[$message]>\`;yes]
    
    $addField[・Nome do canal:;$channelName[$findChannel[$message]];yes]
    
    $addField[・Criado em:;\`$creationDate[$findChannel[$message]]\` | ($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$findChannel[$message];time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])
    
    $addTimestamp
    $footer[Solicitado por $username;$authorAvatar]
    $color[#1ad46d]
    $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
    $cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    $elseif[$getServerVar[lang]==en]
    $thumbnail[$serverIcon]

    $title[Channel Informations <#$findChannel[$message]>]
    
    $addField[・ID:;\`$findChannel[$message]\`;yes]
    
    $addField[・Mention:;\`<#$findChannel[$message]>\`;yes]
    
    $addField[・Channel Name:;$channelName[$findChannel[$message]];yes]
    
    $addField[・Created at:;\`$creationDate[$findChannel[$message]]\` | ($creationDate[$findChannel[$message];time])
    
    $addTimestamp
    $footer[Solicitado por $username;$authorAvatar]
    $color[#1ad46d]
    $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
    $cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
    $endelseif
    $endif`

})