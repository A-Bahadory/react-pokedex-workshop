export default function Logo({ AppName, logWhenClicked }) {
  return (
    <>
      <header>
        <h1>welcome to {AppName}!</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          onClick={logWhenClicked}
        />
      </header>
    </>
  );
}
