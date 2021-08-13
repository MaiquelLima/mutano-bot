module.exports = ({
    name: "impostor",
    description: "Descubrimos o importor! :0",
    aliases: ["imposter","among"],
    code: `
$if[$getServerVar[lang]==pt]
$image[https://vacefron.nl/api/ejected?name=$userName[$findUser[$message]]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
$elseif[$getServerVar[lang]==en]
$image[https://vacefron.nl/api/ejected?name=$userName[$findUser[$message]]&imposter=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]
$color[#1ad46d]
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
$cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
$endelseif
$endif
    `
})