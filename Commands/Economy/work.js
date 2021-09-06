module.exports = ({
  name: "work",
  description: "Bora trabalhar?",
  aliases: ["trabalhar", "trabalho", "w"],
  code: `
  $setGlobalUserVar[carteira;$random[1100;3600];$authorID]
  $if[$getGlobalUserVar[emprego;$authorID]==Caçador;]
  
  $author[$userTag[$authorID];$authorAvatar]
  $description[$randomText[Você foi na **Floresta Amazônica** e vendou uma pele de onça que caçou. Com isso ganhou #CHAR#TC\`$random[1100;3600]\` TigerCoins]]
  $footer[Mutano™・Economia;$userAvatar[$clientID]]

$else[$getGlobalUserVar[emprego;$authorID]==Programador;]
$author[$userTag[$authorID];$authorAvatar]
$description[$randomText[Você foi na **Floresta Amazônica** e vendou uma pele de onça que caçou. Com isso ganhou #CHAR#TC\`$random[1100;3600]\` TigerCoins]] 
  $endif
  $endelseif
  $onlyIf[$getGlobalUserVar[emprego;$authorID]==nenhum;{description: Você está desempregado
> Use \`$getServerVar[chamada]empregos\` para ver a lista de empregos}{color: #ff0000}]
`
})
