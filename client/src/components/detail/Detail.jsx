import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL = "http://localhost:3001/rickandmorty/character";
const API_KEY = "henrystaff";

function Detail(props) {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${URL}/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>Detail</h1>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name}></img>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
      <h3>{character.gender}</h3>
      <h3>{character.origin?.name}</h3>
      <h3>{character.location?.name}</h3>
    </div>
  );
}

export default Detail;
