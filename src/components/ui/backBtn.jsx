import { useNavigate } from "react-router-dom";
import "./customComponents.css";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
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
