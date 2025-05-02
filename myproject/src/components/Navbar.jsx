import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const [showLogo, setShowLogo] = useState(true);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              className="logoimg"
              src="https://cdn-icons-png.flaticon.com/128/6424/6424299.png"
              alt="Bootstrap"
              width="25"
              height="20"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse me1" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 melist">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mac" className="nav-link">
                  Mac
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ipad" className="nav-link">
                  iPad
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/iphone" className="nav-link">
                  iPhone
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/watch" className="nav-link">
                  Watch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/airpods" className="nav-link">
                  Airpods
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tv-home" className="nav-link">
                  Tv & Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/entertainment" className="nav-link">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/accessories" className="nav-link">
                  Accessories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/support" className="nav-link">
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="onelineonly">
        Get up to 12 months of No Cost EMI§ plus up to ₹8000.00 instant cashback§§ on selected
        products with eligible cards. <a href="#">See offers</a>
      </div> */}
    </div>
  );
};

export default Navbar;
