//! I hate the back
const server = require("./app");
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
