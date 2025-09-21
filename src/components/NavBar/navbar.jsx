import { Link } from "react-router-dom";
import { usePokemonStore } from "../../store/pokemonStore";
import "./navbar.css";

function NavBar() {
  const { setCurrentPage } = usePokemonStore();

  const handleClickHome = () => {
    setCurrentPage(1); 
  };

  return (
    <div
    className="navbar-container"
    >
      <Link to="/" onClick={handleClickHome} data-cy="navbar">
        <h1>PokeTest</h1>
      </Link>
    </div>
  );
}

export default NavBar;
