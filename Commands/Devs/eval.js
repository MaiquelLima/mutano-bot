module.exports = ({
    name: "eval",
    description: "Evaluate pra Devs :3",
    aliases: ["e", "ev"], 
    code: `
$if[$getServerVar[lang]==pt]

$color[#1ad46d]

$thumbnail[$userAvatar[$authorID]]

$author[Eval -=- $username[$authorID];$userAvatar[$authorID]]

$description[__Entrada:__
\`\`\`
$message
\`\`\`

__Saída:__
\`\`\`js
$eval[$message;yes]
\`\`\`]
$suppressErrors
$argsCheck[>1;{description: Digite algo para inspecionar}{color: #ff0000}]
$onlyForIDs[852616816240885760;857836846641578014;683728874390945823;711969991427227729;817323606257565736;{description: Apenas meus Desenvolvedores podem executar este comando!}{color: #ff0000}]
$elseif[$getServerVar[lang]==en]

$color[#1ad46d]

$thumbnail[$userAvatar[$authorID]]

$author[Eval -=- $username[$authorID];$userAvatar[$authorID]]

$description[__Input:__
\`\`\`
$message
\`\`\`

__Output:__
\`\`\`js
$eval[$message;yes]
\`\`\`]
$suppressErrors
$argsCheck[>1;{description: Type something to inspect}{color: #ff0000}]
$onlyForIDs[852616816240885760;857836846641578014;683728874390945823;711969991427227729;817323606257565736;{description: <a:Check_No:810066692842586142> » Only my Developers can run this command!}{color: #ff0000}]
$endelseif
$endif
    `
})
