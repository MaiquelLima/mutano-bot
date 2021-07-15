module.exports = ({
    name: "versão",
    description: "Mostrando sua atual versão",
    aliases: ["versao", "version", "v", "--v", "-v"],
    code: `
  $if[$getServerVar[lang]==pt]
  $description[\`🙃\` Minha versão atual é v$getVar[version]]
  $color[#1ad46d]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
  $cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
  $elseif[$getServerVar[lang]==en]
  $description[\`🙃\` My current version is v$getVar[version]]
  $color[#1ad46d]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: You are in my blacklist, so you can't execute my commands!**]
  $cooldown[5s;🙆‍♀️・Take it easy, little hunter. Wait %time% to execute my commands]
  $endelseif
  $endif
    `
  })