const Discord = require("discord.js")
require("dotenv").config()

const generateimage = require("./generateimage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello!")
    }
})

const welcomeidchannel = "966249182014873631"

client.on("guildMemberAdd", async (member) =>{
    const img = await generateimage(member)
    member.guild.channels.cache.get(welcomeidchannel).send({
        content: `<@${member.id}> Welcome to the server`,
        files: [img]
    })
})

client.login(process.env.token)