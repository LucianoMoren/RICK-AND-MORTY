import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card.jsx";
import { filterCards, orderCards } from "../../redux/actions.js";
import style from "./favorite.module.css";

export default function Favorites({ onClose }) {
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.parent}>
      <div className={style.navBack}>
        <select name="order" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select name="filter" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {/* flex flex-wrap gap-4 justify-center pt-4 mt-20 */}
      <div className={style.cards}>
        {!myFavorites.length ? (
          <h2 className={style.message}>
            Agregue un personaje a sus favoritos
            <span className={style.dot} style={{ "--n": 1 }}>
              !
            </span>
          </h2>
        ) : (
          myFavorites.map((favorite) => (
            <Card onClose={onClose} key={favorite.id} {...favorite} />
          ))
        )}
      </div>
    </div>
  );
}
