import { memo } from "react";
import { Link } from "react-router-dom";
import { usePokemonStore } from "../../store/pokemonStore";
import "./listPokemon.css";

function ListPokemonComponent({ pokemons }) {
  const { currentViewType } = usePokemonStore();

  return (
    <div className={`list-pokemon-container ${currentViewType}`}>
      {pokemons.map((poke) => (
        <ul key={poke.id} className="list-pokemon-item">
          <Link to={`/pokemon/${poke.id}`} data-cy={`pokemon-${poke.id}`}>
            <li>{poke.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default memo(ListPokemonComponent);
