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
import { removeFav } from "./redux/actions.js";

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

  const onSearch = async (id) => {
    try {
      const characterId = characters.filter((char) => char.id === Number(id));
      if (characterId.length) {
        return alert(`El personaje con id ${id} ya existe`);
      }
      navigate("/home");
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [data, ...oldChars]);
      } else {
        alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      return error.message;
    }
  };

  const onClose = (id) => {
    setCharacters((characters) =>
      characters.filter((char) => char.id !== Number(id))
    );
    dispatch(removeFav(id));
  };

  const deleteAll = () => {
    setCharacters([]);
    navigate("/home");
  };

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";

      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      if (access === true) {
        setAccess(data);
        access && navigate("/home");
      } else {
        alert("Tus datos no son correctos");
      }
    } catch (error) {
      return error.message;
    }
  };

  const logout = () => {
    setAccess(false);
  };

  return (
    <div className="min-h-screen">
      {pathname !== "/" && (
        <Nav onSearch={onSearch} logout={logout} deleteAll={deleteAll} />
      )}

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
