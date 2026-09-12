import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light border-bottom"
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="assets/logo.svg" alt="Logo" style={{ width: "25%" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://tradex-dashboard-ub5n.onrender.com" target="_blank" rel="noopener noreferrer">
  Try the Dashboard
</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
