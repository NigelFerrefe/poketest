import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./listPokemon.css";

function ListPokemonComponent({ pokemons, currentViewType }) {
    const location = useLocation();
  return (
    <div className={`list-pokemon-container ${currentViewType}`}>
      {pokemons.map((poke) => (
        <ul key={poke.id} className="list-pokemon-item">
          <Link to={`/pokemon/${poke.id}`} state={{ from: location.pathname + location.search }} data-cy={`pokemon-${poke.id}`}>
            <li>{poke.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default memo(ListPokemonComponent);
