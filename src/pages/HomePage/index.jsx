import { useEffect, useState, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getPokemonList } from "../../api/pokeApi";
import { usePokemonStore } from "../../store/pokemonStore";
import ListPokemon from "../../components/HomePage/listPokemon";
import PaginationBtn from "../../components/HomePage/paginationBtn";
import ViewTypeButton from "../../components/HomePage/ViewTypeBtn";
import "./index.css";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPageExists, setNextPageExists] = useState(false);
  const [prevPageExists, setPrevPageExists] = useState(false);

  const { currentPage, setCurrentPage, currentViewType, setCurrentViewType } =
    usePokemonStore();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialPage = parseInt(searchParams.get("page")) || currentPage;

  const fetchPage = useCallback(
    async (pageNum) => {
      navigate(`/?page=${pageNum}`, { replace: true });
      setLoading(true);
      try {
        const data = await getPokemonList({ page: pageNum });
        const pokemonsWithId = data.results.map((p) => ({
          ...p,
          id: p.url.split("/").filter(Boolean).pop(),
        }));
        setPokemons(pokemonsWithId);
        setNextPageExists(Boolean(data.next));
        setPrevPageExists(Boolean(data.previous));
        setCurrentPage(pageNum);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    },
    [navigate, setCurrentPage]
  );

  useEffect(() => {
    fetchPage(initialPage);
  }, [fetchPage, initialPage]);

  const toggleView = useCallback(() => {
    setCurrentViewType(currentViewType === "list" ? "grid" : "list");
  }, [currentViewType, setCurrentViewType]);

  const handlePrev = useCallback(
    () => fetchPage(Math.max(1, currentPage - 1)),
    [currentPage, fetchPage]
  );

  const handleNext = useCallback(
    () => fetchPage(currentPage + 1),
    [currentPage, fetchPage]
  );

  return (
    <div
    className="container"
    >
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
          <ViewTypeButton onToggle={toggleView} />
          <ListPokemon pokemons={pokemons} />
          <PaginationBtn
            hasPrev={prevPageExists}
            hasNext={nextPageExists}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
