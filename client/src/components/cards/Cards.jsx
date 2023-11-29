import Card from "../card/Card.jsx";
import "./cards.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {!characters.length ? (
        <h2>Por favor ingrese un ID...</h2>
      ) : (
        characters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        ))
      )}
    </div>
  );
}