module.exports = ({
  name: "work",
  description: "Bora trabalhar?",
  aliases: ["trabalhar", "trabalho", "w"],
  code: `
  $setGlobalUserVar[carteira;$random[1100;3600];$authorID]
$author[$userTag[$authorID];$authorAvatar]
$description[$randomText[Você criou **Jogo em C#** e vendou a uma boa Engine. Com isso ganhou \`#CHAR#TC$random[1100;3600]\` TigerCoins]] 
  $onlyIf[$getGlobalUserVar[emprego;$authorID]==cacador;]
  $onlyIf[$getGlobalUserVar[emprego;$authorID]==nenhum;{description: Você está desempregado
> Use \`$getServerVar[chamada]empregos\` para ver a lista de empregos}{color: #ff0000}]
`
})
