import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../../api/pokeApi";
import PokemonCard from "../../components/PokemonCard/pokemonCard";

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <PokemonCard pokemon={pokemon} />
  );
}

export default PokemonDetailPage;
