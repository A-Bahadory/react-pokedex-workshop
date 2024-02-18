import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";

export function App() {
  const AppName = "bahador PROPS WORKS!";
  const logWhenClicked = () => {
    console.log("it doesn’t matter what the message is");
  };
  return (
    <>
      <Logo AppName={AppName} logWhenClicked={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon />
    </>
  );
}
