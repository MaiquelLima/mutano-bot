module.exports = ({
    name: "avatar",
    description: "Mostra o Avatar seu ou do usuario desejado.",
    aliases: ["av"],
    code: `
  $if[$getServerVar[lang]==pt]
  
  $apiMessage[$channelID;;{footer: Executado por $userTag}{title:Avatar de $username[$findUser[$message;yes]]}{image:$useravatar[$finduser[$message]]}{description:<@$findUser[$message;yes]> Que foto zika meu amigo!  Muito bom gosto :3!

    __Downloads nos Botões:__}$addTimestamp{color:#1ad46d;{actionRow:WEBP,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;webp];png;webp];jpg;webp];jpeg;webp];?size=2048;?size=4096];:;#COLON#]}{actionRow:PNG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;png];jpg;png];jpeg;png];webp;png];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:JPG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpg];png;jpg];jpeg;jpg];webp;jpg];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:JPEG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpeg];png;jpeg];jpg;jpeg];jpeg;jpeg];webp;jpeg];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:GIF,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];png;gif];jpg;gif];jpeg;gif];gif;gif];webp;gif];?size=2048;?size=4096];:;#COLON#]};;no]
  $cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos denovo!]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » Você está na minha blacklist, não pode executar meus comandos!**]
  $elseif[$getServerVar[lang]==en]
  
$apiMessage[$channelID;;{footer: Executed by $userTag}{title:$username[$findUser[$message;yes]]'s Avatar}{image:$useravatar[$finduser[$message]]}{description:<@$findUser[$message;yes]> What an epic picture!  You have really good taste :3!

    __Downloads in Buttons:__}$addTimestamp{color:#1ad46d;{actionRow:WEBP,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;webp];png;webp];jpg;webp];jpeg;webp];?size=2048;?size=4096];:;#COLON#]}{actionRow:PNG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;png];jpg;png];jpeg;png];webp;png];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:JPG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpg];png;jpg];jpeg;jpg];webp;jpg];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:JPEG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpeg];png;jpeg];jpg;jpeg];jpeg;jpeg];webp;jpeg];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:GIF,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];png;gif];jpg;gif];jpeg;gif];gif;gif];webp;gif];?size=2048;?size=4096];:;#COLON#]};;no]
  $cooldown[5s;🙆‍♀️・Take it easy ,little hunter. wait %time% to execute my commands again!]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » You are in my blacklist, you can't execute my commands!**]
  $endelseif
  $endif
  `
  })
