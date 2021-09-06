module.exports = ({
    name: "piada",
    description: "Piadas de tiozão kkk",
    aliases: ["piadas","joke","jokes","tiozão","tiozao","tiosao","tiosão"],
    code: `
$editIn[2s;$randomText[😊 O que a impressora disse para a outra?

> ||:joy: Essa folha é tua ou é impressão minha?||;😊 Qual é o rei da horta?

> ||:joy: O rei-polho||;
😊 Qual é a comida que liga e desliga?

> ||:joy: O Strog-ON-OFF||;
😊 Por que as estrelas não fazem miau?

> ||:joy: Por que Astro-no-mia||;
😊 Como se faz para ganhar um Chokito?

> ||:joy: É só colocar o dedito na tomadita||;
😊 Quem é o rei dos queijos?

> ||:joy: O REIquejão||;
😊 Qual é a doença que o pneu mais pega?

> ||:joy: Pneumonia||;
😊 Por que a Coca-Cola e a Fanta sempre se deram bem?

> ||:joy: Porque se a Fanta quebra, a Coca Cola||;
😊 Qual é o fim da picada?

> ||:joy: Quando o mosquito vai embora||;
😊 Qual é o fim da picada?

> ||:joy: Quando o mosquito vai embora||;
😊 Quem fala errado, a Mônica ou o Cebolinha?

> ||:joy: A Mônica. O Cebolinha fala "elado".||]]
:thinking: Deixe-me pensar...
$onlyIf[$getGlobalUserVar[bl;$authorID]==yes;**:x: » Você está na minha blacklist, não pode executar meus comandos!**]
$cooldown[5s;🙆‍♀️・Vai com calma pequeno caçador. Espere %time% para executar meus comandos comandos]
    `
})