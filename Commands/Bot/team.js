module.exports = ({
    name: "team",
    description: "Saiba mais sobre a minha equipe que me faz ser assim e ter tudo que tenho 😀",
    aliases: ["equipe"],
    code: `
$if[$getServerVar[lang]==pt]
$author[Minha Equipe;$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$description[]
$endif
    `
})