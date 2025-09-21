import { NavLink } from "react-router-dom";
import "./index.css";
import AbraImg from "../../assets/abra.gif";
function ErrorPage() {
  return (
    <section className="error-container">
      <h1>Error 404</h1>
      <img src={AbraImg} alt="Abra image" width={150} height={150} />
        <h2>Abra used teleport...</h2>
      <NavLink to={"/"}>
        <button className="home-btn">Return home</button>
      </NavLink>
    </section>
  );
}

export default ErrorPage;
