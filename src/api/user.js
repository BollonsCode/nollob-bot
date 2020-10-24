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
        return err.response.data;
      });

    if (resApi.created) {
      return "Que top! sua data de aniversário está salva";
    }

    return "Eu já sei seu aniverio carinha";
  },

  async findUsersCurrentMonth() {
    const resApi = await api
      .get("/users/month")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });

    if (resApi.found) {
      return resApi.users;
    }

    return [];
  },

  async findUsersByMonth(month) {
    const resApi = await api
      .get(`/users/month/${month}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });

    if (resApi.found) {
      return resApi.users;
    }

    return [];
  },

  async deleteUser(userName) {
    const resApi = await api
      .delete(`/users/${userName}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });

    if (resApi.deleted) {
      return true;
    }

    return false;
  },
};
