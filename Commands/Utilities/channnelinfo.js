module.exports = ({
    name: "channelinfo",
    descrption: "Quer saber mais informações sobre um determinado canal? Com esse comando você pode! 😉",
    aliases: ["ci"],
    code: `
    $if[$getServerVar[lang]==pt]
    $thumbnail[$serverIcon]

    $title[Informações do canal]
    
    $addField[・ID:;\`$replaceText[$replaceText[$isNumber[$message];true;$message;1];false;$mentionedChannels[1;yes];1]\`;yes]
    
    $addField[・Menção:;\`<#$replaceText[$replaceText[$isNumber[$message];true;$message;1];false;$mentionedChannels[1;yes];1]>\`;yes]
    
    $addField[・Nome do canal:;$channelName[$replaceText[$replaceText[$isNumber[$message];true;$message;1];false;$mentionedChannels[1;yes];1]];yes]
    
    $addField[・Criado em:;\`$creationDate[$guildID]\` | ($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];months;meses];weeks;semanas];days;dias];hours;horas];minutes;minutos];and;e];seconds;segundos];second;segundo];minute;minuto];year;ano];years;anos];week;semana];day;dia];month;mês];hour;hora])
    
    $addTimestamp
    $footer[Solicitado por $username;$authorAvatar]
    $color[#1ad46d]
    $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
    $cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    $elseif[$getServerVar[lang]==en]
    $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
    $cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
    $endelseif
    $endif`

})