import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      {/* navbar */}
      <div className="logo">li</div>
      <div className="links">
        <nav>
          <ul>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="navbar-btn">
          <button>Contact</button>
        </div>
      </div>
    </div>
    // /nabar
  );
}

export default Navbar;
