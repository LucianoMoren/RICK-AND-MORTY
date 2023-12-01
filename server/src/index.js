const getCharById = require("./controllers/getCharById");
const http = require("http");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = Number(req.url.split("/").pop());
      getCharById(res, id);
    }
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
  });
