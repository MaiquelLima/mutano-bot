module.exports = ({
    name: "avatar",
    description: "Mostra o Avatar seu ou do usuario desejado.",
    code: `
  $if[$getServerVar[lang]==pt]
  
  $author[Avatar de $username[$findUser[$message;yes]]]
  
  $description[<@$findUser[$message;yes]> Que foto zika meu amigo!  Muito bom gosto :3!
  
  __Downloads__
  [webp\\]($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;webp];png;webp];jpg;webp];jpeg;webp];?size=2048];?size=4096]) | [png\\]($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;png];jpg;png];jpeg;png];webp;png];?size=2048];?size=4096]) | [jpg\\]($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpg];png;jpg];jpeg;jpg];webp;jpg];?size=2048];?size=4096]) | [jpeg\\]($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpeg];png;jpeg];jpg;jpeg];jpeg;jpeg];webp;jpeg];?size=2048];?size=4096]) | [gif\\]($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];png;gif];jpg;gif];jpeg;gif];webp;gif];?size=2048];?size=4096])]
  
  $footer[Pedido por $username]
  $color[#1ad46d]
  $cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos denovo!]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » Você está na minha blacklist, não pode executar meus comandos!**]
  $elseif[$getServerVar[lang]==en]
  
  $author[$username[$findUser[$message;yes]]'s Avatar]
  $description[
  <@$findUser[$message;yes]> What an epic picture!  You have really good taste :3!
  
  __Downloads__
  [webp\\]($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;webp];png;webp];jpg;webp];jpeg;webp];?size=2048];?size=4096]) | [png\\]($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;png];jpg;png];jpeg;png];webp;png];?size=2048];?size=4096]) | [jpg\\]($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpg];png;jpg];jpeg;jpg];webp;jpg];?size=2048];?size=4096]) | [jpeg\\]($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];gif;jpeg];png;jpeg];jpg;jpeg];jpeg;jpeg];webp;jpeg];?size=2048];?size=4096]) | [gif\\]($replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];png;gif];jpg;gif];jpeg;gif];webp;gif];?size=2048];?size=4096])]
  $image[$replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;png;gif];?size=2048];?size=4096]]
  
  $footer[Executed by: $username]
  $color[#1ad46d]
  $cooldown[5s;🙆‍♀️・Take it easy ,little hunter. wait %time% to execute my commands again!]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » You are in my blacklist, you can't execute my commands!**]
  $endelseif
  $endif
  `
  })