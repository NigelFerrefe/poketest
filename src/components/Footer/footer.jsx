import "./footer.css";
import gitHubIcon from "../../assets/github-icon.svg";
function Footer() {
  return (
    <section className="container-footer">
      <article>
        <p>Technical test for ISKRA</p>
      </article>
      <article>
        <div className="repository">
        <p>Access to repository</p>
        <a
          href="https://github.com/NigelFerrefe/poketest"
          target="_blank"
        >
          <img src={gitHubIcon} alt="Git Hub icon" />
        </a>
        </div>
      </article>
      <article>
        <p>by Nigel Ferreres</p>
      </article>
    </section>
  );
}

export default Footer;
