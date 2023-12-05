import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import style from "./card.module.css";
//! ICONS
import { IoCloseSharp } from "react-icons/io5";
import { TbActivityHeartbeat } from "react-icons/tb";
import { GiHalfDead } from "react-icons/gi";
import { MdOutlinePersonSearch } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";

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

  const status = () => {
    if (props.status === "Alive") {
      return (
        <p className={style.statusAlive}>
          <TbActivityHeartbeat className={style.icoAlive} /> Alive
        </p>
      );
    }
    if (props.status === "Dead") {
      return (
        <p className={style.statusDead}>
          <GiHalfDead className={style.icoDead} />
          Dead
        </p>
      );
    }
    if (props.status === "unknown") {
      return (
        <p className={style.statusUnknown}>
          <MdOutlinePersonSearch className={style.icoUnknown} />
          Unknown
        </p>
      );
    }
  };

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
        <div className={style.id}>
          <FaAddressCard className={style.icoId} />
          {props.id}
        </div>
        {/* <p className={style.lastLocation}>Last location</p>
        <p className={style.origin}>{props.origin}</p> */}
        <p className={style.status}>{status()}</p>
      </div>
    </div>
  );
}
