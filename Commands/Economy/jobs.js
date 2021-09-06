module.exports = ({
    name: "empregos",
    description: "Bom, a maioria de nós sabemos o que trabalhar ou o que ser qaundo crescer. Você sabe?",
    aliases: ["jobs", "emp", "jbs"],
    code: `
$if[$getGlobalUserVar[estudante]==naoEstuda;]
$author[$userTag[$authorID];$authorAvatar]
$description[Você ainda não é estudante. Não há como trabalhar sem ter estudo não é mesmo?
> Para procurar uma escola ou ensino digite \`$getServerVar[chamada]escola\`]
$else[$getGlobalUserVar[estudante]==estuda;]
$author[$userTag[$authorID];$authorAvatar]
$thumbnail[$authorAvatar]
`
})