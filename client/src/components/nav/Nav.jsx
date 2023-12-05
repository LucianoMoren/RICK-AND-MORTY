import SearchBar from "../searchbar/SearchBar";
import "./nav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

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
        <button className="nav-button">Favorites</button>
      </Link>
      <SearchBar onSearch={props.onSearch} deleteAll={props.deleteAll} />
      <div className="for-me">
        <Link to={"/about"}>
          <button className="nav-button">About me</button>
        </Link>
        <button className="logout-button" onClick={props.logout}>
          Log out
          <MdLogout className="logout-ico" />
        </button>
      </div>
    </div>
  );
}
