import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            Temple Paradise
          </a>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <Link to="/">
                    <a class="nav-link active" href="#" aria-current="page">
                  Home <span class="visually-hidden">(current)</span>
                </a>
                </Link>
                
              </li>

              <li class="nav-item">
                {" "}
                <Link to="/explore-temples">
                  <a class="nav-link" href="#">
                    Explore Temple's
                  </a>
                </Link>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form class="d-flex my-2 my-lg-0">
              <input
                class="form-control me-sm-2 my-2 m-3"
                type="text"
                placeholder="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0 m-3 "
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
