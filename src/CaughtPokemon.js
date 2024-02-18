import { useState } from "react";

export default function CaughtPokemon() {
  const [caught, state] = useState(0);
  const emptyArray = [1, 2];
  const CaughtStatus = () => {
    state((caught = emptyArray));
  };
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on / {date}{" "}
      </p>
      <button onClick={CaughtStatus}>click</button>
    </div>
  );
}
