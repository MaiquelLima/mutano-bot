module.exports = ({
  name: "work",
  description: "Bora trabalhar?",
  aliases: ["trabalhar", "trabalho", "w"],
  code: `
  $setGlobalUserVar[carteira;$random[1100;3600];$authorID]
  $author[$userTag[$authorID];$authorAvatar]
  $description[$randomText[Você foi na **Floresta Amazônica** e vendou uma pele de onça que caçou. Com isso ganhou #CHAR#TC\`$random[1100;3600]\` TigerCoins]]
  $footer[Mutano™・Economia;$userAvatar[$clientID]]
  
  $onlyIf[$getGlobalUserVar[emprego;$authorID]==programador;]
  $onlyIf[$getGlobalUserVar[emprego;$authorID]==nenhum;]
`
})