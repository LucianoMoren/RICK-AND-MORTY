import SearchBar from "../searchbar/SearchBar";
import "./nav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav-bar">
      <Link to={"/home"}>
        <a className="home-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
            alt="rick-and-morty"
          />
        </a>
      </Link>
      <Link to={"/favorites"}>
        <button className="about-button">Favorites</button>
      </Link>
      <SearchBar onSearch={props.onSearch} />
      <Link to={"/about"}>
        <button className="about-button">About me</button>
      </Link>
      <button className="logout-button" onClick={props.logout}>
        Log out
      </button>
    </div>
  );
}
