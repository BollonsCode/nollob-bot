const discordJs = require("discord.js");

const bot = new discordJs.Client();

bot.login("NzM2NjU3NjgxNjY1NzUzMjEw.Xxx_7Q.LsYG8P6q_EQBWw_Pl2CfPHewruM");

bot.on("ready", () => {
  console.log("estou online no Discord!");
});

bot.on("message", (msg) => {
  if (msg.content === "$hello") {
    msg.reply("Olá, seja bem vindo ao nosso server!");
  }
});
