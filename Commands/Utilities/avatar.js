module.exports = ({
    name: "avatar",
    description: "Mostra o Avatar seu ou do usuario desejado.",
    aliases: ["av"],
    code: `
  $if[$getServerVar[lang]==pt]
  
  $apiMessage[$channelID;;{footer: Downloads:}{title:Avatar de $username[$findUser[$message;yes]]}{image:$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png]}{description:<@$findUser[$message;yes]> Que foto zika meu amigo!  Muito bom gosto :3!

    __Comando executado por $userTag__}{color:#1ad46d;{actionRow:PNG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;png];jpg;png];jpeg;png];webp;png];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:JPG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpg];png;jpg];jpeg;jpg];webp;jpg];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:GIF,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];png;gif];jpg;gif];jpeg;gif];gif;gif];webp;gif];?size=2048;?size=4096];:;#COLON#]};;no]
  $cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos denovo!]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » Você está na minha blacklist, não pode executar meus comandos!**]
  $elseif[$getServerVar[lang]==en]
  
$apiMessage[$channelID;;{footer: Downloads:}{title:$username[$findUser[$message;yes]]'s Avatar}{image:$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png]}{description:<@$findUser[$message;yes]> What an epic picture!  You have really good taste :3!

    __Command executed by $userTag__}{color:#1ad46d;{actionRow:PNG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;png];jpg;png];jpeg;png];webp;png];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:JPG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpg];png;jpg];jpeg;jpg];webp;jpg];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:GIF,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];png;gif];jpg;gif];jpeg;gif];gif;gif];webp;gif];?size=2048;?size=4096];:;#COLON#]};;no]
  $cooldown[5s;🙆‍♀️・Take it easy ,little hunter. wait %time% to execute my commands again!]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » You are in my blacklist, you can't execute my commands!**]
  $endelseif
  $endif
  `
  })
