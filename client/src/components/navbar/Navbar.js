import { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../state/state";
import "./Navbar.css";

function Navbar() {
  const { state } = useContext(store);

  return (
    <header className="navbar-container">
      <div className="navbar flex justify-between items-center">
        <Link to="/">
          <div className="navbar-brand">FT ASSIGN</div>
        </Link>

        <Link to="cart">
          <div className="border-radius navbar-cart pointer transition-duration">
            Cart ({state.cartItems.length})
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
