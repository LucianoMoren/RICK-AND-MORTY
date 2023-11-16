import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/detail.jsx";
import NotFound from "./components/notfound/NotFound.jsx";
import Form from "./components/form/Form.jsx";

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  function onSearch(id) {
    const characterId = characters.filter((char) => char.id === Number(id));
    if (characterId.length) {
      return alert(`${characterId[0].name} ya existe!`);
    }
    axios(`${URL}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters([...characters, data]);
      } else {
        window.alert("¡El id debe ser un número entre 1 y 826!");
      }
    });

    navigate("/home");
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  const { pathname } = useLocation();

  const [access, setaccess] = useState(false);

  const email = "123@gmail.com";
  const password = "asd1234";

  // //!NUEVOD
  function login(userData) {
    if (email === userData.email && password === userData.password) {
      setaccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
