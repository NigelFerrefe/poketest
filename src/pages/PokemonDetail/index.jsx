import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../../api/pokeApi";
import PokemonCard from "../../components/PokemonCard/pokemonCard";
import "./index.css";
import BackButton from "../../components/ui/backBtn";
function PokemonDetailPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonDetail(id);
        setPokemon(data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  return (
    <div className="detail-container">
      {loading ? (
        <div>
          <p>Loading page...</p>
        </div>
      ) : error ? (
        <div>
          <p>
            Error: <span>{error}</span>
          </p>
        </div>
      ) : (
        <>
          <PokemonCard pokemon={pokemon} />
          <BackButton />
        </>
      )}
    </div>
  );
}

export default PokemonDetailPage;
