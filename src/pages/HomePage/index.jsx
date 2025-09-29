import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { getPokemonList } from "../../api/pokeApi";
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
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const currentViewType = searchParams.get("view") || "list";

  const fetchPage = useCallback(
    async (pageNum) => {
      setSearchParams({
        page: pageNum,
        view: currentViewType,
      });

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
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    },
    [currentViewType, setSearchParams]
  );

  useEffect(() => {
    fetchPage(currentPage);
  }, [currentPage, fetchPage]);

  const toggleView = () => {
    const newView = currentViewType === "list" ? "grid" : "list";
    setSearchParams({
      page: currentPage,
      view: newView,
    });
  };

  const handlePrev = () => {
    setSearchParams({
      page: Math.max(1, currentPage - 1),
      view: currentViewType,
    });
  };

  const handleNext = () => {
    setSearchParams({
      page: currentPage + 1,
      view: currentViewType,
    });
  };

  return (
    <div className="container">
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
          <ViewTypeButton onToggle={toggleView} currentViewType={currentViewType} />
          <ListPokemon pokemons={pokemons} currentViewType={currentViewType} />
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
