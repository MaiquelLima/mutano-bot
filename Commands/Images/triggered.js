module.exports = ({
    name: "triggered",
    description: "Eita quanta raivaa!!",
    aliases: ["enérgico", "agitado", "raivoso", "trigger", "trigg", "trig"],
    code: `
<@$authorID>
$image[https://api.devs-hub.xyz/trigger?image=$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];?size=2048;?size=4096];webp;png];gif;png]
$footer[Solicitado por $username;$authorAvatar]
$addTimestamp
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
    `
})
