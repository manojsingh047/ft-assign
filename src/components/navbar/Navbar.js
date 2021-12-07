import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar flex justify-between items-center">
        <div className="navbar-brand">FT ASSIGN</div>
        <div className="navbar-cart border pointer">
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
