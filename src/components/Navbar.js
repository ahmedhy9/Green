import React from "react";
import "./Navbar.css";
import Button from "./Button";
import { btnData } from "./Data";
function Navbar() {
  return (
    <div className="nav-bar">
      {/* navbar */}
      <div className="con-logo">
        <div className="logo">li</div>
      </div>

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
      <Button {...btnData} />
    </div>
    // /nabar
  );
}

export default Navbar;
