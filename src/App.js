import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Clothing from "./components/Clothing";
import Accessories from "./components/Accessories";
import Mobiles from "./components/Mobiles";
import Laptops from "./components/Laptops";
import Grocesseries from "./components/Grocerries";
import HomeAppliance from "./components/HomeAppliance";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" exact>
            <Body />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/clothing" exact>
            <Clothing />
          </Route>
          <Route path="/accessories" exact>
            <Accessories />
          </Route>
          <Route path="/mobiles" exact>
            <Mobiles />
          </Route>
          <Route path="/laptops" exact>
            <Laptops />
          </Route>
          <Route path="/grocesseries" exact>
            <Grocesseries />
          </Route>
          <Route path="/homeAppliance" exact>
            <HomeAppliance />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
