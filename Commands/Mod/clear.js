module.exports = ({
    name: "clear",
    description: "Limpe o chat hehehe...",
    aliases: ["clean","limpar"],
    code: `

$clear[$message[1]]
$title[LIMPANDO MENSAGENS...]
$description[\`💫\`Carregando...]
$editIn[3s;{title: LIMPO!}{description: **🧹 $message mensagens foram limpas.**}{color: #ff0000}{footer: Limpo por $username}]
$color[#ff0000]
$deleteIn[7s]
$onlyBotPerms[managemessages;{description: Eu não tenho a permissão de \`MANAGAGE_MESSAGES\` para executar este comando!}{color: #ff0000}]
$onlyIf[$checkContains[$message[1];1]==false;{description: Você não pode limpar menos de 2 mensagens}{color: #ff0000}]
$argsCheck[>1;{description: Coloque  o número de mensagens que deseja apagar}{color: #ff0000}]
$deletecommand
$onlyPerms[managemessages;{description: Você não têm a permissão de \`MANAGE_MESSAGES\` para executar este comando}{color: #ff0000}]
$onlyIf[$isNumber[$filterMessage[$message[1];-,+,.]]==true;{description: Digite um número para apagar as mensagens}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]


    `
})
