const cors = require("cors");
const express = require("express");
const axios = require("axios");

const app = express();
const api_ipg = "https://647b3f4dd2e5b6101db10841.mockapi.io/api_ipg";
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  axios
    .get(`${api_ipg}/depoimentsData`)
    .then((response) => {
      const data = response.data;
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Erro in the get data" });
    });
});

app.listen(port, () => {
  console.log(`Server runnind in local ${port}`);
});
