module.exports = ({
    name: "team",
    description: "Saiba mais sobre a minha equipe que me faz ser assim e ter tudo que tenho 😀",
    aliases: ["equipe"],
    code: `
$if[$getServerVar[lang]==pt]
$author[Minha Equipe;$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$description[\`\`\`
Aqui você irá encontrar uma descrição mais precisa de toda a minha equipe, os que me desenvolvem, suas funções. Os que gerenciam minha parte empreserial, divulgações e etc... Tudo isso, e muito mais abaixo :3
\`\`\`]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
$elseif[$getServerVar[lang]==en]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})