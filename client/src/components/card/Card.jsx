import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

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
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      {/* <button onClick={handleFavorite}>{isFav ? "❤" : "❌"}</button> */}

      <button className="close-button" onClick={() => props.onClose(props.id)}>
        X
      </button>
      <div className="card-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="card-description">
        <Link to={`/detail/${props.id}`}>
          <p className="text-title">{props.name}</p>
        </Link>
        <p className="text-body">{props.id}</p>
        <p className="mb-2">Last location:</p>
        <p className="font-bold text-blue-500">{props.origin}</p>
      </div>
    </div>
  );
}
