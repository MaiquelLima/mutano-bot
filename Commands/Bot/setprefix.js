module.exports = ({
    name: "setprefix",
    description: "Configuração do Prefix do bot no servidor",
    aliases: ["set-prefix"],
    code: `
$setServerVar[chamada;$message]
$description[Prefixo setado para \`$message\`]
$color[#5af657]
$argsCheck[>1;Digite o prefixo que deseja setar]

$onlyPerms[admin;{description: :x: Você não tem a permissão de \`GERENCIAR SERVIDOR\` para executar este comando!}{color: ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
    `
})