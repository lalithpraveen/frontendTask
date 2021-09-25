import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ForgetPassword from "./Components/ForgetPassword";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgetpassword" component={ForgetPassword} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
