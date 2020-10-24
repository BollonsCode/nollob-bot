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

  async lsNvMesAtual() {
    const resp = await user.findUsersCurrentMonth();

    return resp;
  },

  async lsNvMes(month) {
    const resp = await user.findUsersByMonth(month);

    return resp;
  },

  async delNvData(userName) {
    const resp = await user.deleteUser(userName);

    if (resp) {
      return "Niver apagado de minha cachola...";
    }

    return "Ocorreu um erro ao apagar o seu niver...";
  },
};
