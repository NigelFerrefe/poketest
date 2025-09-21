import { memo } from "react";
import "./buttons.css"
function PaginationBtn({ hasPrev, hasNext, onPrev, onNext }) {
  return (
    <nav
    className="pag-btn-container"
    >
      {hasPrev && (
        <button onClick={onPrev} className="pag-btn" id="previous-btn">
          Previous
        </button>
      )}
      {hasNext && (
        <button onClick={onNext} className="pag-btn" id="next-btn">
          Next
        </button>
      )}
    </nav>
  );
}

export default memo(PaginationBtn);
