const DiscordJs = require("discord.js");
const conf = require("./config/token");
const { default: fetch } = require("node-fetch");

const month = require("./month");

const bot = new DiscordJs.Client();
const hook = new DiscordJs.WebhookClient(conf.ID_WH, conf.TOKEN_WH);

bot.login(conf.TOKEN_GERAL);

const prefix = "$";
const HOST = "http://localhost:3333/api";

bot.on("ready", () => {
  console.log("estou online no Discord!");
});

bot.on("message", (msg) => {
  if (msg.content === `${prefix}hello`) {
    msg.reply("Olá, seja bem vindo ao nosso server!");
  }
  if (msg.content === `${prefix}help`) {
    hook
      .sendSlackMessage({
        username: "Wumpus",
        attachments: [
          {
            pretext:
              "Aqui estão so meus comandos:" +
              "\n\n`$help` -> uma empurrãozinho nos meus comandos" +
              "\n\n`$hello` -> Mensagem de boas vindas" +
              "\n\n`$ping` -> `Pong` eu testo o ping para você" +
              "\n\n`$nv-data` 'dia e mes do seu aniversário' -> salvo o seu aniversário na minha cachola!" +
              "\nExemplo: `$nv-data` 1 de maio" +
              "\n\n`$ls-nv-mes` 'mes desejado' -> listo todos os aniversariantes do mês desejado ou do mes atual" +
              "\nExemplo mes desejado: `$ls-nv-mes` 1" +
              "\nExemplo mes atual: `$ls-nv-mes`",
            color: "#007cdc",
            ts: Date.now() / 1000,
          },
        ],
      })
      .catch(console.error);
  }
  if (msg.content.substring(0, 8) === `${prefix}nv-data`) {
    console.log(msg.content.substring(9));
    const data = msg.content.substring(9);
    data.substring(6);
    const body = {
      userName: msg.author.username,
      day: Number(data.substring(0, 2)),
    };
    // fetch(`${HOST}/users`, { method: "POST", body });
    msg.reply(body);
  }
  if (msg.content === `${prefix}ping`) {
    // let res = ping.sys.probe("google.com", {
    //   timeout: 10,
    //   extra: ["-i", "2"],
    // });
    // msg.channel.send(`Pong, ${res} ms!`);
  }
  if (msg.content === `${prefix}test`) {
    fetch(HOST)
      .then((res) => res.json())
      .then((json) => msg.reply(json.msg));
  }
});
