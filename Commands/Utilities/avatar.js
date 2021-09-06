module.exports = ({
    name: "avatar",
    description: "Mostra o Avatar seu ou do usuario desejado.",
    aliases: ["av"],
    code: `
  $apiMessage[$channelID;;{footer: Downloads#COLON#}{title:Avatar de $username[$findUser[$message;yes]]}{image:$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png]}{description:<@$findUser[$message;yes]> Que foto zika meu amigo!  Muito bom gosto :3!

    __Comando executado por $userTag__}{color:#1ad46d;{actionRow:PNG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;png];jpg;png];jpeg;png];webp;png];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:JPG,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpg];png;jpg];jpeg;jpg];webp;jpg];?size=2048;?size=4096];:;#COLON#]}
    {actionRow:GIF,2,5,$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];png;gif];jpg;gif];jpeg;gif];gif;gif];webp;gif];?size=2048;?size=4096];:;#COLON#]};;no]
  $cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos denovo!]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » Você está na minha blacklist, não pode executar meus comandos!**]
  `
  })
