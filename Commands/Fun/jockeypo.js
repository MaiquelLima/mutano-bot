module.exports = ({
    name: "jockey-pô",
    description: "Pedra, papel ou TESOURAAA!!",
    aliases: ["jockeypo","jockey-po"],
    code: `
$if[$getServerVar[lang]==pt]
$title[Pedra, Papel ou TESOURAA!]
$description[Então vamos lá você escolhe **$message** 
E eu escolho **$randomText[pedra!;papel!;tesoura!]**]

$footer[Jogado por $username]
$addTimestamp
$color[#1ad46d]
$onlyIf[$checkContains[$message;Pedra;Papel;Tesoura;pedra;papel;tesoura]==true;{description: **:x: » Você não digitou Pedra papel ou tesoura digite novamente!**}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$title[Rock, Paper or Scissors!]
$description[So... you picked **$message**, right?
And i pick: **$randomText[rock!;paper!;scissors!]**]

$footer[Executed by: $username]
$addTimestamp
$color[#1ad46d]
$onlyIf[$checkContains[$message;Rock;Paper;Scissors;rock;paper;scissors]==true;{description: **:x: » You need to type rock, papers or scissors!**}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;{description: **:x: » You are in my blacklist, you can't execute my commands!**}{color: #ff0000}]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
        `
})