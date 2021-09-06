module.exports = ({
    name: "ban",
    description: "Não cumpriu as regras? Banido 😡",
    aliases: ["banir", "banned", "f"],
    code: `

$awaitMessages[$authorID;2m;$alwaysExecute;ban;Você demorou muito para banir este usuário, banimento cancelado...]
$description[Quem deseja banir?]
$color[#1ad46d]
$onlyPerms[ban;{description: Você não têm a permissão de \`BAN\` para executar este comando}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]

    `
})
