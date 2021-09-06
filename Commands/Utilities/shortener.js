module.exports = ({
    name: "shorten",
    description: "Encurtando links...",
    aliases: ["short", "link", "shortlink", "encurtar", "encurtarlink", "encurtador", "encurtadorlink", "shortener", "shortenerlink"],
  description: "Url shortener",
  usage: "shortener <url>",
  code: `
  $title[🔗URL Encurtado!]
  $thumbnail[$authorAvatar]
  $addField[🔗 | Encurtado Url;> \`\`\`$jsonRequest[https://is.gd/create.php?&format=simple&url=$message]\`\`\`]
  $description[[**URL**]($jsonRequest[https://is.gd/create.php?format=simple&url=$message])]
  $addField[ 🔗 | Normal Url;> \`\`\`$message[1]\`\`\`;no]
  $footer[Solicitado por $userTag[$authorID];$authorAvatar]
  $addTimestamp
  $color[#1ad46d]
  $onlyIf[$message[1]!=;{author:ERROR:$authorAvatar}{description:Isso não é uma URL/Link para encurtar!}{color:FF0000}]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
  $cooldown[5s;️🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
  `
  })
