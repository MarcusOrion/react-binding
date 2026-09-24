// Implementa un contatore numerico incrementabile via bottone e aggiungi un pulsante dedicato per azzerare istantaneamente il valore
import { useState } from "react";

export default function Counter() {
  /*const [count, setCount] = useState(0);
  return (
    <>
      <div className="container text-center">
        <p className="display-1">{count}</p>
        <button
          className="btn btn-primary me-3"
          onClick={() => setCount(count + 1)}
        >
          Incrementa!
        </button>
        <button className="btn btn-primary" onClick={() => setCount(0)}>
          Azzera!
        </button>
      </div>
    </>
  );
}*/

  // Crea un bottone che alterni la propria classe stilistica (es. da primary a success) ad ogni click, mutandone dinamicamente l'aspetto grafico
  const [isPrimary, setIsPrimary] = useState(true);
  return (
    <div className="container mt-5 text-center">
      <button
        className={`btn ${isPrimary ? "btn-primary" : "btn-success"}`}
        onClick={() => setIsPrimary(!isPrimary)}
      >
        {isPrimary ? "Cliccami" : "Fatto!"}
      </button>
    </div>
  );
}
