module.exports = {
	name: 'trash',
    description: "Opa... É um User? Ou um lixo? Hmmm...",
	aliases: ['lixo', 'lixeiro'],
	code: `
<@$authorID>
$image[https://api.cool-img-api.ml/trash?image=$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png];gif;png]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos]
    `
};
