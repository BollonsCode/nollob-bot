const DiscordJs = require("discord.js");
const conf = require("./config/token");
const comandos = require("./app/comandos");
const user = require("./api/user");

const bot = new DiscordJs.Client();
const hook = new DiscordJs.WebhookClient(conf.ID_WH, conf.TOKEN_WH);

bot.login(conf.TOKEN_GERAL);

const prefix = "$";

// TODO Criar a feature para parabenizar automaticamente o aniversariante às 00:00 do dia do aniversário
bot.on("ready", () => {
  console.log("estou online no Discord!");
});

bot.on("message", async (msg) => {
  const conteudo = msg.content.split(" ");

  if (conteudo[0] === `${prefix}hello`) {
    msg.reply("Olá, seja bem vindo ao nosso server!");
  }

  if (conteudo[0] === `${prefix}help`) {
    hook
      .sendSlackMessage({
        username: "Nollob",
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

  if (conteudo[0] === `${prefix}nv-data`) {
    const usersplit = msg.author.tag.split("#");
    const userName = usersplit[0] + usersplit[1];
    const resp = await comandos.nvData(conteudo, userName);
    msg.reply(resp);
  }

  if (conteudo[0] === `${prefix}ls-nv-mes`) {
    if (conteudo[1]) {
      const resp = await comandos.lsNvMes(conteudo[1]);
      if (resp.length > 0) {
        let pretext = "";
        resp.map((user) => {
          pretext += user.userName + ": " + user.strDate + "\n\n";
        });

        hook.sendSlackMessage({
          username: "Nollob",
          attachments: [
            {
              pretext,
              color: "#007cdc",
              ts: Date.now() / 1000,
            },
          ],
        });
      } else {
        msg.reply("Não existem usuarios aniversariando neste mês");
      }
    } else {
      const resp = await comandos.lsNvMesAtual();
      if (resp.length > 0) {
        let pretext = "";
        resp.map((user) => {
          pretext += user.userName + ": " + user.strDate + "\n\n";
        });

        hook.sendSlackMessage({
          username: "Nollob",
          attachments: [
            {
              pretext,
              color: "#007cdc",
              ts: Date.now() / 1000,
            },
          ],
        });
      } else {
        msg.reply("Não existem usuarios aniversariando este mês");
      }
    }
  }

  if (conteudo[0] === `${prefix}del-nv-data`) {
    const usersplit = msg.author.tag.split("#");
    const userName = usersplit[0] + usersplit[1];
    const resp = await comandos.delNvData(userName);

    msg.reply(resp);
  }

  if (conteudo[0] === `${prefix}ping`) {
    msg.reply("Pong, seu ping ta OK");
  }
});
