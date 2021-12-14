import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import "./Navbar.css";

function Navbar() {
  const {
    cartState: { cartItems },
  } = useCart();

  return (
    <header className="navbar-container">
      <div className="navbar flex space-bw items-center">
        <Link to="/">
          <div className="navbar-brand">FT ASSIGN</div>
        </Link>

        <Link to="cart">
          <div className="border-radius navbar-cart pointer transition-duration">
            Cart ({cartItems.length})
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
