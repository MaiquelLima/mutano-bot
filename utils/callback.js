module.exports = (bot) => {
    /* bot.joinCommand ({
    channel: "816253700451860510]",
    code: `$giveRole[$authorID;824693314006679592]
    $giveRole[$authorID;812032022398631947]
    $giveRole[$authorID;818264029511417949]
    $giveRole[$authorID;812032023366598699]
    $giveRole[$authorID;812032030531125318]
    $giveRole[$authorID;812114375564591104]`
    })
    bot.onJoined(); */
    /*bot.joinCommand ({
    channel: "$getServerVar[cWelcome]",
    code: `
    <@$authorID>
    $thumbnail[$authorAvatar]
    $author[$username[$authorID]#$discriminator[$authorID]]
    $description[<a:helloo:788074797207912490> Olá **<@$authorID>**! Bem Vindo(a) a **$serverName[$guildID]**!
    
    $getServerVar[mWelcome]
    
    Membros: **$membersCount**]
    
    $giveRole[$authorID;$getServerVar[rWelcome]]
    
    $image[$getServerVar[iWelcome]?size=2048]
    $footer[ID do membro $authorID;$authorAvatar]
    $addTimestamp
    $color[#00A86B]
    `
    })
    bot.onJoined();
    
    bot.leaveCommand ({
    channel: "$getServerVar[cLeave]",
    code: `
    <@$authorID>
    $thumbnail[$authorAvatar]
    $author[$username[$authorID]#$discriminator[$authorID]]
    $description[<a:cry_leave1:788142494767906816> **$username**! Saiu do servidor **$serverName[$guildID]**!
    
    $getServerVar[mLeave]
    
    Membros: **$membersCount**]
    $image[$getServerVar[iLeave]?size=2048]
    $footer[ID do membro $authorID;$authorAvatar]
    $addTimestamp
    $color[#00A86B]
    `
    })
    bot.onLeave()*/
    
    /* bot.awaitedCommand ({
    name: "ban",
    code: `
    $ban[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1]];false;$mentioned[1]];$replaceText[$message;$message[1];;-1]]
    
    $useChannel[$getServerVar[cPunicoes]]
    
    $editMessage[$message[1];{author: BAN}{thumbnail: $userAvatar[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1]];false;$mentioned[1]]]}{description: $replaceText[$replaceText[<@$isNumber[$message[1]];true;$message[1]]>;false;$mentioned[1]] foi banido(a) do servidor!
    
    __**Dados:**__
    Name e Tag \`$username[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1]];false;$mentioned[1;yes]]]$discriminator[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1]];false;$mentioned[1;yes]]]\` **|** \`$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1]];false;$mentioned[1;yes]]\`
    Staff responsável: **$username[$authorID]**
    Motivo: **$replaceText[$message;$message[1];;-1]**
    
    __Caso volte esperamos que cumpra as regras!__
    }{footer: Ban aplicado por $username;$authorAvatar}{color: #FF0000}
    
    $channelSendMessage[$channelID;<a:Check_Yes:810066617601097748> » Ban de $username aplicado com sucesso!]
     `
    }) */
    
    }