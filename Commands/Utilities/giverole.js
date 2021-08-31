module.exports = ({
    name: "giverole",
    description: "Util para adicionar cargo a um membro :)",
    code: `
$if[$getServerVar[lang]==pt]
$author[$username;$authorAvatar]
$description[<@$authorID> deu o cargo de $]
    `,
})