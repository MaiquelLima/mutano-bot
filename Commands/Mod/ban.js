module.exports = ({
    name: "ban",
    description: "Não cumpriu as regras? Banido 😡",
    aliases: ["banir", "banned", "f"],
    code: `
$if[$getServerVar[lang]==pt]
$awaitMessages[$authorID;2m;$alwaysExecute;ban;Você demorou muito para banir este usuário, banimento cancelado...]
$description[Quem deseja banir?]
$color[#1ad46d]
$onlyPerms[ban;{description: Você não têm a permissão de \`BAN\` para executar este comando}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$awaitMessages[$authorID;2m;yes;ban;You took too long to ban this user, ban cancelled...]
$thumbnail[$userAvatar[$findUser[$message]]]
$description[Do you really want to ban the user <@$findUser[$message]> \`$userTag[$findUser[$message]]\` | \`$findUser[$message]\`?

To confirm type \`yes\`]
$color[#1ad46d]
$argsCheck[>1;Please enter the ID, name or mention the user you want to ban correctly]
$onlyPerms[ban;{description: You do not have the permission of \`BAN\` to execute this command}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})