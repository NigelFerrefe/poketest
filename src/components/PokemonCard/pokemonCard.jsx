import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
  const mainType = pokemon.types[0].type.name; 

  return (
    <div className="main-container-card">
    <div className={`container-card ${mainType}`}>
      <div className="pokemon-card">
        <h2 className="title">{pokemon.name}</h2>
        <div className="image">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={150}
            height={150}
          />
        </div>
        <div className="types">
             <p className="types-label">Type:</p>
          {pokemon.types.map((t, index) => (
            <p key={index} className={`type ${t.type.name}`}>
              {t.type.name}
            </p>
          ))}
        </div>
      </div>
    </div>
        </div>
  );
}

export default PokemonCard;
