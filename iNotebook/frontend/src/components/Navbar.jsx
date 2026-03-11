import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              iNotebook
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
              <div className="d-flex gap-2">
                {!localStorage.getItem("token") ? (
                  <>
                    <Link to="/login" className="btn btn-primary" role="button">
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="btn btn-primary"
                      role="button"
                    >
                      SignUp
                    </Link>
                  </>
                ) : (
                  <button
                    className="btn btn-primary"
                    role="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
