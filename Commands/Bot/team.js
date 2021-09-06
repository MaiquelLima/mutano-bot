module.exports = ({
    name: "team",
    description: "Saiba mais sobre a minha equipe que me faz ser assim e ter tudo que tenho 😀",
    aliases: ["equipe"],
    code: `
$author[Minha Equipe;$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$description[\`\`\`
Aqui você irá encontrar uma descrição mais precisa de toda a minha equipe, os que me desenvolvem, suas funções. Os que gerenciam minha parte empreserial, divulgações e etc... Tudo isso, e muito mais abaixo :3
\`\`\`]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
})