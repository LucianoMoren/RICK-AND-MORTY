import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/detail.jsx";
import NotFound from "./components/notfound/NotFound.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";
import { useDispatch } from "react-redux";

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";
const EMAIL = "123@gmail.com";
const PASSWORD = "asd1234";

function App() {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    //!Acceso automatico
    // !access && navigate("/home");
    !access && navigate("/");
  }, [access]);

  // const onSearch = async (id) => {
  //   const characterId = characters.find((char) => char.id === Number(id));

  //   if (characterId) {
  //     alert(`${characterId.name} ya existe!`);
  //     return;
  //   }

  //   try {
  //     const { data } = await axios(`${URL}/${id}?key=${API_KEY}`);

  //     if (data.name) {
  //       setCharacters([...characters, data]);
  //       navigate("/home");
  //     } else {
  //       window.alert("¡El id debe ser un número entre 1 y 826!");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching character:", error);
  //   }
  // };
  function onSearch(id) {
    const characterId = characters.filter((char) => char.id === Number(id));
    if (characterId.length) {
      return alert(`El personaje con id ${id} ya existe`);
    }
    axios(`${URL}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
    dispatch(removeFav(id));
  };

  const login = (userData) => {
    if (EMAIL === userData.email && PASSWORD === userData.password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Tus datos no son correctos");
    }
  };

  const logout = () => {
    setAccess(false);
  };

  return (
    <div className="min-h-screen">
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
