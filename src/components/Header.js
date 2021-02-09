import React from "react";
import Navbar from "./Navbar";
function Header() {
  return (
    //==========Start Header==========//
    <div className="main-header">
      <div className="container">
        <div className="row">
          {/* Start NavBar */}
          <Navbar />
          {/* End NavBar */}
        </div>
        <div className="row">
          <div className="col-6">
            <div className="content-header">
              <h2>Hello, I'm Lisa</h2>
              <p>
                Multifunctional designer/developer based in Bath — a
                traditionally trained designer who codes.
              </p>
              <button>View Work</button>
              <div className="socialmedia">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-behance-square"></i>
                <i class="fab fa-invision"></i>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
    //===============================//
  );
}
export default Header;
