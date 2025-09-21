import "./customComponents.css";
import { usePokemonStore } from "../../store/pokemonStore";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const { currentPage } = usePokemonStore();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/?page=${currentPage}`);
  };

  return (
    <div className="back-btn-container">
      <button onClick={handleBack} className="back-btn" id="back-btn">
        Back
      </button>
    </div>
  );
}

export default BackButton;
