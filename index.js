/* Fazendo a requisição do dotenv */
require('dotenv/config');
/* Ultilização da aoi.JS */
const Aoijs = require("aoi.js")

//Configurando o Client da Aoi.js

const bot = new Aoijs.Bot({
  mobilePlatform: false,
  intents:["GUILD_CREATE","GUILD_UPDATE","GUILD_DELETE","GUILD_ROLE_CREATE","GUILD_ROLE_UPDATE","GUILD_ROLE_DELETE","CHANNEL_CREATE","CHANNEL_UPDATE","CHANNEL_DELETE","CHANNEL_PINS_UPDATE","THREAD_CREATE","THREAD_UPDATE","THREAD_DELETE","THREAD_LIST_SYNC","THREAD_MEMBER_UPDATE","THREAD_MEMBERS_UPDATE","STAGE_INSTANCE_CREATE","STAGE_INSTANCE_UPDATE","STAGE_INSTANCE_DELETE","GUILD_MEMBER_ADD","GUILD_MEMBER_UPDATE","GUILD_MEMBER_REMOVE","THREAD_MEMBERS_UPDATE","GUILD_BAN_ADD","GUILD_BAN_REMOVE","GUILD_INTEGRATIONS_UPDATE","INTEGRATION_CREATE","INTEGRATION_UPDATE","INTEGRATION_DELETE","GUILD_EMOJIS_UPDATE","WEBHOOKS_UPDATE","INVITE_CREATE","INVITE_DELETE","VOICE_STATE_UPDATE","MESSAGE_CREATE","MESSAGE_UPDATE","MESSAGE_DELETE","MESSAGE_DELETE_BULK","MESSAGE_REACTION_ADD","MESSAGE_REACTION_REMOVE","MESSAGE_REACTION_REMOVE_ALL","MESSAGE_REACTION_REMOVE_EMOJI","CHANNEL_PINS_UPDATE","TYPING_START"],
  token: process.env.TOKEN,
  prefix: ["$getServerVar[chamada]", "<@763109929300262953> ", "<@!763109929300262953> "],
  sharding: false,
  shardAmount: 0,
  autoUpdate: false,
  fetchInvites: false,
  suppressAllErrors: true,
  debugs:{
    interpreter:true
  },
  events:{
    timeout:true,
    functionError: true,
    music: true
  }
})

/* Configuração sobre padrões de mensagem do Mutanin :3 */

bot.onMessage({
	respondToBots: false,
  guildOnly: true
});

// Handler simples e padrão da Aoi.js

bot.loadCommands(`./Commands/`)

// Log no console de ready :3

bot.readyCommand({
    channel: "",
    code: `$log[Ligado no usuário $userTag[$clientID]]`
})

// Chamando dados das variáveis, status e da webAPI para a index

require('./utils/variables')(bot);
require('./utils/stats')(bot);
require('./webAPI.js')(bot);

// Logs de Comandos

bot.command({
name: "$alwaysExecute",
code: `$onlyIf[$commandInfo[$replaceText[$splitText[2];$;];name]!=;$channelSendMessage[859618461881466881;{author: › Logs de Comandos}{description: Usuário: \`$userTag[$authorID]\` | \`$authorID\`
Servidor: \`$serverName\` | \`$guildID\`
 
Canal executado: $channelName[$channelID] | \`$channelID\`
Comando utilizado: **$replaceText[$message[1];$getServerVar[chamada];]**
**Mensagem enviada**
\`$message\`

**Informações do Servidor**
・Dono: **$username[$ownerID]** | \`$ownerID\`
・Membros: \`$membersCount\`
・Canais: \`$channelCount\`}{footer: $formatDate[$dateStamp]}{color: #1ad46d}{thumbnail: $serverIcon}]]
$textSplit[$message[1];$getServerVar[chamada]]
$onlyIf[$stringStartsWith[$message;$getServerVar[chamada]]!=false;]`,
})

bot.command({
name: "$alwaysExecute",
code: `$onlyIf[$commandInfo[$replaceText[$splitText[2];$;];name;aliases]!=;$log[Comando Utilizado
$replaceText[$message[1];$getServerVar[chamada];]
https://discord.com/channels/$guildID/$channelID - $serverName
$userTag]]
$onlyIf[$stringStartsWith[$message;$getServerVar[chamada]]!=false;]
`
})

// Quando me mencionarem '-
bot.command({
name: "<@852616816240885760>",
aliases: ["<@!852616816240885760>", "<@852616816240885760> ", "<@!852616816240885760> "],
nonPrefixed: true,
code: `$addCmdReactions[<a:SLBgolden:859822609984913418>]`
})

// Quando mencionarem o Matheus ;-;
bot.command({
name: "<@848063748929093642>",
aliases: ["<@!848063748929093642>", "<@848063748929093642> ", "<@!848063748929093642> "],
nonPrefixed: true,
code: `$addCmdReactions[<:bughunter_Gold:863038528585990154>]`
})