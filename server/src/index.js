// Importa el módulo http para crear un servidor HTTP.
const http = require("http");

// Importa el módulo de datos desde "./utils/data.js". Se asume que contiene un array de personajes llamado 'data'.
const data = require("./utils/data.js");

// Define el número de puerto en el que el servidor escuchará las solicitudes.
const PORT = 3001;

// Crea un servidor HTTP que manejará las solicitudes entrantes.
const server = http.createServer((req, res) => {
  // Configura las cabeceras CORS para permitir solicitudes desde cualquier origen.
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Verifica si la URL de la solicitud incluye "/rickandmorty/character".
  if (req.url.includes("/rickandmorty/character")) {
    // Extrae el ID del personaje de la URL.
    const id = req.url.split("/").pop();

    // Busca el personaje correspondiente en el array 'data' según el ID.
    const character = data.find((char) => char.id === Number(id));

    // Configura las cabeceras de la respuesta y el cuerpo JSON.
    if (character) {
      return res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    } else {
      return res
        .writeHead(404, { "Content-Type": "application/json" })
        .end(JSON.stringify({ message: "Character Not Found" }));
    }
  }
  return res
    .writeHead(404, { "Content-Type": "application/json" })
    .end(JSON.stringify({ message: "Wrong url" }));
});

// Configura el servidor para escuchar en el puerto especificado y la interfaz localhost.
server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server listen on port ${PORT}`);
});

//Solo dios y yo sabiamos como funcionaba este codgio... ahora solo DIOS
