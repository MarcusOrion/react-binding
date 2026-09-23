// Implementa un contatore numerico incrementabile via bottone e aggiungi un pulsante dedicato per azzerare istantaneamente il valore
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
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
}
