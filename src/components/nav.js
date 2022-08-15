import { NavLink } from "react-router-dom";
import adventurer from "../images/adventurer.png";
import adventuress from "../images/adventuress.png";

function Nav() {
  let selector = "selector";

  return (
    <div className="nav-padding">
      <div className="nav-center">
        <nav>
          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? selector : undefined)}
            >
              <h3>Home</h3>
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? selector : undefined)}
            >
              <h3>About</h3>
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? selector : undefined)}
            >
              <h3>Contact</h3>
            </NavLink>
            <div className="nav-links-2">
              <NavLink
                to="search"
                className={({ isActive }) => (isActive ? selector : undefined)}
              >
                <i className="fas fa-search"></i>
              </NavLink>
              <NavLink
                to="cart"
                className={({ isActive }) => (isActive ? selector : undefined)}
              >
                <i className="fas fa-shopping-cart"></i>
              </NavLink>
            </div>
          </div>
          <div className="nav-image-container">
            <div className="who-are-you">
              <h1>Who are you?</h1>
            </div>
            <div className="nav-image">
              <NavLink
                to="adventuress"
                className={({ isActive }) => (isActive ? selector : undefined)}
              >
                <img src={adventuress} alt="adventuress" />
                <h3>Adventuress</h3>
              </NavLink>
              <NavLink
                to="adventurer"
                className={({ isActive }) => (isActive ? selector : undefined)}
              >
                <img src={adventurer} alt="adventurer" />
                <h3>Adventurer</h3>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
