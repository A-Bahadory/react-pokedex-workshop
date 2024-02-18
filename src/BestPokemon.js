export default function BestPokemon() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </>
  );
}
