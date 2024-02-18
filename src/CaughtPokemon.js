import { useState } from "react";

export default function CaughtPokemon() {
  const [caught, state] = useState([]);

  const CaughtStatus = () => {
    state(caught.length);
  };
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <p>
        Caught {caught} Pokemon on / {date}{" "}
      </p>
      <button onClick={CaughtStatus}>click</button>
    </div>
  );
}
