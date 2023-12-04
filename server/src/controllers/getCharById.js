// const axios = require("axios");
// // const API_KEY = "henrystaff";

// const getCharById = async (req, res) => {
//   const { id } = req.params;
//   const URL = "https://rickandmortyapi.com/api/character";

//   try {
//     const { data } = await axios.get(`${URL}/${id}`);

//     const { status, name, species, origin, image, gender, location } = data;

//     const character = {
//       id,
//       status,
//       name,
//       species,
//       origin,
//       image,
//       gender,
//       location,
//     };

//     return character.name
//       ? res.status(200).json(character)
//       : res.status(404).send("Not found");
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

// module.exports = getCharById;
//!FUNCA
// const axios = require("axios");

// const URL = "https://rickandmortyapi.com/api/character";
// // const API_KEY = "henrystaff";

// const getCharById = async (req, res) => {
//   const { id } = req.params;

//   axios
//     .get(`${URL}/${id}`)
//     .then(({ data }) => {
//       const { id, status, name, species, origin, image, gender, location } =
//         data;

//       const character = {
//         id,
//         status,
//         name,
//         species,
//         origin,
//         image,
//         gender,
//         location,
//       };

//
//     })
//     .catch((error) => {
//       return res.status(500).send(error.message);
//     });
// };
const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);

    const {
      id: charId,
      status,
      name,
      species,
      origin,
      image,
      gender,
      location,
    } = data;

    const character = {
      id: charId,
      status,
      name,
      species,
      origin,
      image,
      gender,
      location,
    };

    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not fount");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getCharById;
