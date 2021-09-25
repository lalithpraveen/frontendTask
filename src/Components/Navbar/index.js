import { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

class Navbar extends Component {
  renderNavLoginItems = () => (
    <ul className="navbar-nav ms-auto ">
      <li className="nav-item">
        <Link className="nav-link" to={"/login"}>
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/signup"}>
          Sign up
        </Link>
      </li>
    </ul>
  );

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light">
        <div className="container">
          <Link className="navbar-brand " to={"/"}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/764/764992.png"
              className="currency-logo"
              alt="currency logo"
            />
          </Link>
          <Link to={"/"} className="navbar-brand">
            Home
          </Link>

          <div className="collapse navbar-collapse">
            {this.renderNavLoginItems()}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
