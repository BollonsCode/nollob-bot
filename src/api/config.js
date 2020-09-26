const axios = require("axios");

const HOST = axios.create({
  baseURL: "http://localhost:3333/api",
});

module.exports = HOST;
