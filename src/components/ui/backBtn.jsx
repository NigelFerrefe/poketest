import { useNavigate, useLocation } from "react-router-dom";
import "./customComponents.css";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(location.state?.from || "/");
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
