import React from "react";
import "./searchbar.css";
export default function SearchBar(props) {
  const [id, setId] = React.useState(""); //* [ Estado, manejador]
  const handleChange = (event) => {
    const { value } = event.target;
    // console.log(value);
    setId(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.onSearch(id);
    setId("");
  };

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        id="search"
        onChange={handleChange}
        value={id}
        className="search-bar"
      />
      <button onClick={handleClick} className="search-button">
        Agregar
      </button>
    </div>
  );
}
