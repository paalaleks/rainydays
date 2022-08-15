import { Link } from "react-router-dom";
// import Forest from "../images/woodfooter.png";

function Footer() {
  return (
    <footer className="footer-padding footer-bg">
      <div className="footer-center footer-text">
        <div>
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="adventuress">Adventuress</Link>
          <Link to="adventurer">Adventurer</Link>
        </div>
        <h3>
          <span>©</span>2022 Rainy Days – breaking the comfort zone
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
