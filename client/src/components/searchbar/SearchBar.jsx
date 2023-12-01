import React from "react";
import style from "./searchbar.module.css";
import { FaPlus, FaRandom } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function SearchBar(props) {
  const [id, setId] = React.useState("");

  const handleChange = (event) => {
    const { value } = event.target;

    setId(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.onSearch(id);
    setId("");
  };

  return (
    <div className={style.search}>
      <input
        type="text"
        name="search"
        id="search"
        onChange={handleChange}
        value={id}
        className={style.searchBar}
        placeholder="Search by ID"
      />
      <button onClick={handleClick} className={style.searchButton}>
        <FaPlus className={style.plus} />
      </button>
      <button
        className={style.randomButton}
        onClick={() => props.onSearch(Math.ceil(Math.random() * 826))}
      >
        <FaRandom className={style.randomIco} />
      </button>
      <button className={style.deleteAll} onClick={props.deleteAll}>
        <MdDelete className={style.deleteIco} />
      </button>
    </div>
  );
}
