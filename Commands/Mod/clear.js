module.exports = ({
    name: "clear",
    description: "Limpe o chat hehehe...",
    aliases: ["clean","limpar"],
    code: `
$if[$getServerVar[lang]==pt]
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
$elseif[$getServerVar[lang]==en]
$clear[$message[1]]
$title[CLEARING MESSAGES...]
$description[\`💫\` Loading...]
$editIn[3s;{title: CLEAN!}{description: **🧹 $message messages were cleared.**}{color: #ff0000}{footer: Clear by $username}]
$color[#ff0000]
$deleteIn[7s]
$onlyBotPerms[managemessages;{description: I don't have the permission of \`MANAGAGE_MESSAGES\` to run this command!}{color: #ff0000}]
$onlyIf[$checkContains[$message[1];1]==false;{description: You cannot clear less than 2 messages}{color: #ff0000}]
$argsCheck[>1;{description: Enter the number of messages you wish to delete}{color: #ff0000}]
$deletecommand
$onlyPerms[managemessages;{description: You do not have the permission of \`MANAGE_MESSAGES\` to execute this command}{color: #ff0000}]
$onlyIf[$isNumber[$filterMessage[$message[1];-,+,.]]==true;{description: Enter a number to delete the messages}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;** :x: » You are in my blacklist, you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})
