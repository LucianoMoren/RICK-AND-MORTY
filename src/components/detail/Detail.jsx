import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Detail(id) {
  const [character, setcharacter] = useState([]);

  useEffect(() => {
    axios(
      `https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`
    ).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return "setCharacter"({});
  }, [id]);

  return <div></div>;
}

export default Detail;
