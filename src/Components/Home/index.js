import { Component } from "react";

import { withRouter, Link, Redirect } from "react-router-dom";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CurrencyConverter from "../CurrencyConverter";
import ReactPopUp from "../ReactPopup";

class Home extends Component {
  state = { isLoggedIn: true };

  componentDidMount() {
    this.checkIsLoggedIn();
  }

  onClickLogout = () => {
    const { history } = this.props;

    const loginStage = { isLoggedIn: false };
    localStorage.setItem("loginState", JSON.stringify(loginStage));

    history.replace("/login");
  };

  checkIsLoggedIn = async () => {
    let loginStage = await localStorage.getItem("loginState");
    loginStage = JSON.parse(loginStage);

    if (loginStage === null) {
      this.setState({ isLoggedIn: false });
    } else if (loginStage.isLoggedIn === false) {
      this.setState({ isLoggedIn: false });
    }
  };

  renderLoggedIn = () => (
    <>
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
            <ul className="navbar-nav ms-auto ">
              <li
                className="nav-item nav-link logout"
                onClick={this.onClickLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <CurrencyConverter />
          <ReactPopUp />
        </div>
      </div>
    </>
  );

  renderLoginPage = () => <Redirect to="/login" />;

  render() {
    const { isLoggedIn } = this.state;
    return <>{isLoggedIn ? this.renderLoggedIn() : this.renderLoginPage()}</>;
  }
}

export default withRouter(Home);
