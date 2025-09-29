import { FiList, FiGrid } from "react-icons/fi";
import "./buttons.css"
function ViewTypeButton({ onToggle, currentViewType }) {
  return (
    <div className="type-btn-container">
      <button onClick={onToggle} className="type-btn" id="type-btn">
        {currentViewType === "list" ? <FiGrid size={24}/> : <FiList size={24} />}
      </button>
    </div>
  );
}

export default ViewTypeButton;


