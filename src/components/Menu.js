import React from "react";

function Menu() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active ">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Hem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="p-5 text-center bg-light ">
        <h1 className="mb-3">Välkommen till en pålitlig nyhetsbyrå</h1>
        <p>Du kan läsa välformulerade nyhetsartiklar på vår hemsida</p>
      </div>
    </header>
  );
}

export default Menu;
