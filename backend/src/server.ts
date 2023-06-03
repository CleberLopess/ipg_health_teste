import fastify from "fastify";
import cors from "@fastify/cors";
import axios from "axios";

const app = fastify();
const api_ipg = "https://647b3f4dd2e5b6101db10841.mockapi.io/api_ipg";
const port = 8080;

app.register(cors);

app.get("/", (req, res) => {
  axios
    .get(`${api_ipg}/depoimentsData`)
    .then((response) => {
      const data = response.data;
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error: "Erro in the get data" });
    });
});

app.listen(port, () => {
  console.log(`Server runnind in local ${port}`);
});
