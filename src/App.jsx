import "./App.css";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

    axios(apiUrl)
      .then(({ data }) => {
        if (data.name) {
          // Verifica si el personaje ya está en el array antes de agregarlo
          if (!characters.some((character) => character.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡Este personaje ya está en la lista!");
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud a la API:", error);
        window.alert("¡Hubo un error al buscar el personaje!");
      });
  }

  function onClose(id) {
    const parsedId = parseInt(id, 10);

    setCharacters((character) =>
      character.filter((character) => character.id !== parsedId)
    );
  }

  return (
    <div className="App">
      <Nav />
      <SearchBar onSearch={onSearch} onClose={onClose} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
