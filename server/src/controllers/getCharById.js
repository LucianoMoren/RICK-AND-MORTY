const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
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
