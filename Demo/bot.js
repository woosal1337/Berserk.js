const Discord = require("discord.js");
const client = new Discord.Client();

console.log(process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    console.log("The Berserk has woken up!");
});

client.on("message", msg => {
    if (msg.content.toLowerCase() === "can i get a hell yeah?") {
        msg.reply("HELL YEAH!");
    }
})