module.exports = ({
    name: "test",
    code: `
    $awaitButtons[$get[id];$authorID;click;awaitclick; Stop,{description:Only $userTag Can Use This Button}{color:#ff0000},64;1]
$let[id;$apiMessage[Click Me;;{actionRow:Click Me,2,1,click};;yes]]
`
})