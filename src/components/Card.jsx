import "../styles/card.css";
export default function Card(props) {
  return (
    <div className="Card">
      <button onClick={props.onClose} className="btn">
        X
      </button>
      <div>
        <h2>{props.name}</h2>
        <h3>{props.status}</h3>
        <h3>{props.species}</h3>
        <h3>{props.gender}</h3>
        <h3>{props.origin}</h3>
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}
