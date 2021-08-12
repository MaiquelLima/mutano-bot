module.exports = ({
    name: "set-anuncios",
    description: "Comando para a configuração e setar o canal de anúncios no servidor",
    aliases: ["setanuncios","set-anuncio","setanuncio","set-announcements","setannouncements"],
    code: `
$if[$getServerVar[lang]==pt]
$title[SETADO!]
$description[\`✅\`・Canal de Anúncios setado com sucesso!
> Canal setado para: <#$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentionedChannels[1;yes];1]>]
$color[#2F3136]
$onlyPerms[admin;:x: Você não tem a permissão de \`ADMINISTRADOR\` para executar este comando!]
$onlyIf[$checkContains[$message]!=;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentionedChannels[1;yes];1];{description: Canal inválido}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]

$elseif[$getServerVar[lang]==en]
$title[SET!]
$description[\`✅\`・Ad Channel successfully set!
> Channel set for: <#$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentionedChannels[1;yes];1]>]
$color[#2F3136]
$onlyPerms[admin;:x: You do not have \`ADMINISTRATOR\` permission to execute this command!]
$onlyIf[$checkContains[$message]!=;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentionedChannels[1;yes];1];{description: Invalid Channel}{color: #ff0000}]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
$setServerVar[cAnuncio;$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentionedChannels[1;yes];1]]
    `
})
