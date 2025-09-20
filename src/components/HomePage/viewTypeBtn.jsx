import { FiList, FiGrid } from "react-icons/fi";
import { usePokemonStore } from "../../store/pokemonStore";
import "./buttons.css"
function ViewTypeButton({ onToggle }) {
  const { currentViewType } = usePokemonStore();
  return (
    <div className="type-btn-container">
      <button onClick={onToggle} className="type-btn">
        {currentViewType === "list" ? <FiGrid size={24}/> : <FiList size={24} />}
      </button>
    </div>
  );
}

export default ViewTypeButton;


