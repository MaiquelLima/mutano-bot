module.exports = ({
    name: "jockey-pô",
    description: "Pedra, papel ou TESOURAAA!!",
    aliases: ["jockeypo","jockey-po", "jk", "jokenpo", "ppt"],
    code: `
$title[Pedra, Papel ou TESOURAA!]
$description[Então vamos lá você escolhe **$message** 
E eu escolho **$randomText[pedra!;papel!;tesoura!]**]

$footer[Jogado por $username]
$addTimestamp
$color[#1ad46d]
$onlyIf[$checkContains[$message;Pedra;Papel;Tesoura;pedra;papel;tesoura]==true;{description: **:x: » Você não digitou Pedra papel ou tesoura digite novamente!**}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
        `
})