import { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../state/state";
import "./Navbar.css";

function Navbar() {
  const { state } = useContext(store);

  return (
    <header className="navbar-container">
      <div className="navbar flex justify-between items-center">
        <div className="navbar-brand">FT ASSIGN</div>
        <div className="navbar-cart border pointer">
          <Link to="cart">Cart ({state.cartItems.length})</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
