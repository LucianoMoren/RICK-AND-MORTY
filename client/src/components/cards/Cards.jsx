import { useEffect } from "react";
import Card from "../card/Card.jsx";
import style from "./cards.module.css";
import Footer from "../footer/Footer.jsx";

export default function Cards({ characters, onClose }) {
  useEffect(() => {
    // Cambiamos la clase 'active' cada 10 segundos
    const interval = setInterval(() => {
      const spans = document.querySelectorAll(`.${style.message} span`);
      spans.forEach((span, index) => {
        span.classList.toggle("active", index === 0); // Solo el primer span activa la animación
      });
    }, 10000);

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente
  // pt-4
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-24">
      <div className={style.backgroundImage}></div>
      {!characters.length ? (
        <h2 className={style.message}>
          Please add a character to the list
          <span className={style.dot} style={{ "--n": 1 }}>
            .
          </span>
          <span className={style.dot} style={{ "--n": 2 }}>
            .
          </span>
          <span className={style.dot} style={{ "--n": 3 }}>
            .
          </span>
        </h2>
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
      <Footer />
    </div>
  );
}
