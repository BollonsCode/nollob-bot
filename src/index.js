const discordJs = require("discord.js");
const TOKEN = require("./config/token");

const bot = new discordJs.Client();

bot.login(TOKEN);

bot.on("ready", () => {
  console.log("estou online no Discord!");
});

bot.on("message", (msg) => {
  if (msg.content === "$hello") {
    msg.reply("Olá, seja bem vindo ao nosso server!");
  }
});
