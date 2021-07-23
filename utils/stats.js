module.exports = (bot) => {
  /* bot.status({
      text: "🙂 em revisão...",
      status: "idle",
      type: "WATCHING",
      time: 8
  }),
  bot.status({
      text: "😉 em revisão...",
      status: "idle",
      type: "WATCHING",
      time: 8
  }),
  bot.status({
      text: "😔 em revisão...",
      status: "idle",
      type: "WATCHING",
      time: 8
  }) */
  bot.status({
      text: "💚 titans rlxado...",
      status: "idle",
      type: "WATCHING",
      time: 14
  }),
  bot.status({
      text: "😍 $allMembersCount usuários",
      status: "idle",
      type: "WATCHING",
      time: 14
  }),
  bot.status({
      text: "😎 em $allChannelsCount canais",
      status: "idle",
      type: "WATCHING",
      time: 14
  }),
  bot.status({
      text: "😮 de $serverCount servidores",
      status: "idle",
      type: "WATCHING",
      time: 14
  }),
  bot.status({
      text: "🌐 Estou na versão $getVar[version]",
      status: "idle",
      type: "WATCHING",
      time: 14
  })
  bot.status({
      text: "🎶 Músicas com meus friends :3",
      status: "idle",
      type: "LISTENING",
      time: 14
  }),
  bot.loopCommand({
    code: `
    $editChannel[859624866885795861;$default;👥 Usuários: $allMembersCount;$default;$default;$default;$default;yes]
    `,
    channel: "859624866885795861",
    executeOnStartup: true,
    every: 1000
    }),
  bot.loopCommand({
    code: `
    $editChannel[859625014344941628;$default;🌎 Servidores: $serverCount;$default;$default;$default;$default;yes]
    `,
    channel: "859625014344941628",
    executeOnStartup: true,
    every: 10000
    }),
  bot.loopCommand({
    code: `
    $editChannel[859803325502718022;$default;🌐 Versão: $getVar[version];$default;$default;$default;$default;yes]
    `,
    channel: "859803325502718022",
    executeOnStartup: true,
    every: 10000
    }),
 bot.loopCommand({
     code: `
     $editChannel[867230524334014544;$default;👥 Users:  $allMembersCount;$default;$default;$default;$default;yes]
     `,
     channel: "867230524334014544",
     executeOnStartup: true,
     every: 1000
     }),
     bot.loopCommand({
     code: `
     $editChannel[867230725814878229;$default;🌎 Servers: $serverCount; $default;$default;$default;$default;yes]
     `,
     channel: "867230725814878229",
     executeOnStartup: true,
     every: 10000
     }),
     bot.loopCommand({
     code: `
     $editChannel[867230803113148426;$default;🌐 Version: $getVar [version];$default;$default;$default;$default;yes]
     `,
     channel: "867230803113148426",
     executeOnStartup: true,
     every: 10000
     })
}