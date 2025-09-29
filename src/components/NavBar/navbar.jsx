import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const navigate = useNavigate();

  const handleClickHome = (e) => {
    e.preventDefault(); // evitamos que el Link haga un reload
    navigate("/?page=1&view=list"); // reseteamos página y vista al valor por defecto
  };

  return (
    <div className="navbar-container">
      <Link to="/" onClick={handleClickHome} data-cy="navbar">
        <h1>PokeTest</h1>
      </Link>
    </div>
  );
}

export default NavBar;
