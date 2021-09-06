module.exports = ({
    name: "versão",
    description: "Mostrando sua atual versão",
    aliases: ["versao", "version", "v", "--v", "-v"],
    code: `
  $description[\`🙃\` Minha versão atual é v$getVar[version]]
  $color[#1ad46d]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
  $cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
    `
  })