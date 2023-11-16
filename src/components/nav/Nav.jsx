import SearchBar from "../searchbar/SearchBar";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav-bar">
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
      <SearchBar onSearch={props.onSearch} />
      <Link to={"/about"}>
        <button>About</button>
      </Link>
    </div>
  );
}
