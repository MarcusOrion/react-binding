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
  /*const [isPrimary, setIsPrimary] = useState(true);
  return (
    <div className="container mt-5 text-center">
      <button
        className={`btn ${isPrimary ? "btn-primary" : "btn-success"}`}
        onClick={() => setIsPrimary(!isPrimary)}
      >
        {isPrimary ? "Cliccami" : "Fatto!"}
      </button>
    </div>
  );*/

  // Creare un componente con tre pulsanti ed un paragrafo. Creare una variabile di stato reattiva per gestire l’allineamento del paragrafo. Per ogni pulsante, impostare l’evento onClick e impostare l’allineamento in base al pulsante cliccato
  const [alignment, setAlignment] = useState("text-start");
  return (
    <div className="container mt-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2 className="mb-4">Allineamento Testo</h2>
          <button
            className="btn btn-primary me-3"
            onClick={() => setAlignment("text-start")}
          >
            Metti a sinistra
          </button>
          <button
            className="btn btn-primary me-3"
            onClick={() => setAlignment("text-center")}
          >
            Centra
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setAlignment("text-end")}
          >
            Metti a destra
          </button>
        </div>
      </div>
      <div className="card p-3 shadow-sm mt-2">
        <p className={`m-0 ${alignment}`}>Lorem Ipsum eccetera eccetera.</p>
      </div>
    </div>
  );
}
