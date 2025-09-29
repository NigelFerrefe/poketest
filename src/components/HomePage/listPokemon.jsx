import { memo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./listPokemon.css";

function ListPokemonComponent({ pokemons, currentViewType }) {
  const [searchParams] = useSearchParams();

  return (
    <div className={`list-pokemon-container ${currentViewType}`}>
      {pokemons.map((poke) => (
        <ul key={poke.id} className="list-pokemon-item">
          <Link
            to={`/pokemon/${poke.id}?${searchParams.toString()}`}
            data-cy={`pokemon-${poke.id}`}
          >
            <li>{poke.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default memo(ListPokemonComponent);
