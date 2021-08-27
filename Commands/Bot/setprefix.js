module.exports = ({
    name: "setprefix",
    description: "Configuração do Prefix do bot no servidor",
    aliases: ["set-prefix"],
    code: `
$setServerVar[chamada;$message]
$if[$getServerVar[lang]==pt]
$description[Prefixo setado para \`$message\`]
$color[#5af657]
$argsCheck[>1;Digite o prefixo que deseja setar]

$onlyPerms[admin;{description: :x: Você não tem a permissão de \`GERENCIAR SERVIDOR\` para executar este comando!}{color: ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$description[Prefix set to \`$message\`]
$color[#5af657]
$argsCheck[>1;Enter the prefix you want to set]

$onlyPerms[admin;{description: :x: You do not have the \`MANAGE_SERVER\` permission to execute this command!}{color: ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
$onlyIf[$checkContains[$message; ]==false;{description: Error!}{color: #2f3136}]
    `
})