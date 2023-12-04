import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";
import axios from "axios";

export const addFav = (character) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

// ACTION | removeFav
export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);

      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    };
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export function filterCards(gender) {
  return { type: FILTER, payload: gender };
}
export function orderCards(order) {
  return { type: ORDER, payload: order };
}

//! SAVED
// export const addFav = (character) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav";
//   return (dispatch) => {
//     axios.post(endpoint, character).then(({ data }) => {
//       return dispatch({
//         type: ADD_FAV,
//         payload: data,
//       });
//     });
//   };
// };

//! SAVED
// export const removeFav = (id) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//   return (dispatch) => {
//     axios.delete(endpoint).then(({ data }) => {
//       return dispatch({
//         type: REMOVE_FAV,
//         payload: data,
//       });
//     });
//   };
// };
