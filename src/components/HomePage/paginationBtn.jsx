import { memo } from "react";
import "./buttons.css"
function PaginationBtn({ hasPrev, hasNext, onPrev, onNext }) {
  return (
    <nav
    className="pag-btn-container"
    >
      {hasPrev && (
        <button onClick={onPrev} className="pag-btn">
          Last
        </button>
      )}
      {hasNext && (
        <button onClick={onNext} className="pag-btn">
          Next
        </button>
      )}
    </nav>
  );
}

export default memo(PaginationBtn);
