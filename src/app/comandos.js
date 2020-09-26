const user = require("../api/user");
const month = require("../month");

module.exports = {
  async nvData(conteudo, autor) {
    const data = conteudo[1] + " " + conteudo[2] + " " + conteudo[3];
    const body = {
      userName: autor,
      day: Number(conteudo[1]),
      month: month.monthNumber(conteudo[3]),
      strDate: data,
    };

    const resp = await user.createUser(body);

    return resp;
  },
};
