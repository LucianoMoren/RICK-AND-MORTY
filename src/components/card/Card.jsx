import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <button
        className="close-button"
        onClick={() => props.onClose(props.id)}
      ></button>
      <div className="card-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="card-description">
        <p className="text-title">{props.name}</p>
        <p className="text-body">{props.id}</p>
      </div>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// export default function Card(props) {
//   return (
//     <div
//       style={{
//         backgroundColor: "grey",
//         margin: "20px",
//         padding: "20px",
//         borderRadius: "15px",
//       }}
//     >
//       <button onClick={() => props.onClose(props.id)}>X</button>
//       <Link to={`/detail/${props.id}`}>
//         <h2>{props.name}</h2>
//       </Link>
//       <h4>ID {props.id}</h4>
//       <h4>Status: {props.status}</h4>
//       <h4>Specie: {props.species}</h4>
//       <h4>Gender: {props.gender}</h4>
//       <h4>Last location: {props.origin}</h4>
//       <img src={props.image} alt={props.name} />
//     </div>
//   );
// }
