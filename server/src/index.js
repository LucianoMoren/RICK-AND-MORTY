//! I love the back
const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

//* Sincronizar la instancia de "Sequelize" al servidor
conn
  //! FORCE: ERA TRUE ACTUALMENTE ESTA FALSE
  .sync({ force: false }) //* Retorna una promise
  .then(() =>
    server.listen(PORT, () => {
      console.log(`Servidor en ejecución en el puerto ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
