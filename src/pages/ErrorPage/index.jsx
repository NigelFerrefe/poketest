import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <h2>Oops, Trubbish ate this page...</h2>
      <NavLink to={"/"}>
        <button>RETURN HOME</button>
      </NavLink>
    </div>
  );
}

export default ErrorPage;