const api = require("./config");

module.exports = {
  async createUser(body) {
    if (body.month === 0) {
      return "Ops, tive um probleminha para salvar sua data, verifica o que tu escreveu por favor?";
    }

    const resApi = await api
      .post("/users", body)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(resApi);
    if (resApi.created) {
      return "Que top! sua data de aniversário está salva";
    }

    return "Ops, tive um probleminha para salvar sua data, verifica o que tu escreveu por favor?";
  },
};
