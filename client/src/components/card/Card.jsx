import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import style from "./card.module.css";
import { IoCloseSharp } from "react-icons/io5";

export default function Card(props) {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    }
    if (isFav === false) {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    setIsFav(myFavorites.some((fav) => fav.id === props.id));
  }, [myFavorites]);

  return (
    <div className={style.parent}>
      <div className={style.div1}>
        <img src={props.image} alt={props.name} />
      </div>

      <div className={style.div2}>
        {isFav ? (
          <button onClick={handleFavorite}>💚</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}

        <button
          className={style.buttonClose}
          onClick={() => props.onClose(props.id)}
        >
          <IoCloseSharp className={style.closeIco} />
        </button>
      </div>
      <div className={style.div3}>
        <div className={style.backgroundImage}></div>

        <Link to={`/detail/${props.id}`}>
          <p className={style.name}>{props.name}</p>
        </Link>
        <p className={style.id}>
          <p>ID</p>
          {props.id}
        </p>
        <p className={style.lastLocation}>Last location</p>
        <p className={style.origin}>{props.origin}</p>
        <p className={style.status}>{props.status}</p>
      </div>
    </div>
  );
}
