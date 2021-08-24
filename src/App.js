import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tehtava1 from "./Tehtävät/Tehtava1";
import Tehtava2 from "./Tehtävät/Tehtava2";
import Home from "./Home";
import Kopiointi from "./Tehtävät/Kopiointi/Kopiointi";
import Tietosuoja from "./Tehtävät/Tietosuoja/Tietosuoja";
import FallingGame from "./Tehtävät/Tippuvat kirjaimet/FallingGame";
import FallingWords from "./Tehtävät/Tippuvat sanat/FallingWords";
import Email from "./Tehtävät/Email/Email";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1>Digirastin tehtäväsivut</h1>
          <ul>
            <li>
              <Link to="/">Etusivu</Link>
            </li>
            <li>
              <Link to="/Tehtava1">Tehtävä 1</Link>
            </li>
            <li>
              <Link to="/Tehtava2">Tehtävä 2</Link>
            </li>
            <li>
              <Link to="/kopiointi">Kopiointitehtävä</Link>
            </li>
            <li>
              <Link to="/tietosuoja">Tietosuojatehtävä</Link>
            </li>
            <li>
              <Link to="/tippuvat_kirjaimet">Tippuvat kirjaimet</Link>
            </li>
            <li>
              <Link to="/tippuvat_sanat">Tippuvat sanat</Link>
            </li>
            <li>
              <Link to='/Email'>Sähköposti</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Tehtava1">
              <Tehtava1 />
            </Route>
            <Route path="/Tehtava2">
              <Tehtava2 />
            </Route>
            <Route path="/kopiointi">
              <Kopiointi />
            </Route>
            <Route path="/tietosuoja">
              <Tietosuoja />
            </Route>
            <Route path="/tippuvat_kirjaimet">
              <FallingGame />
            </Route>
            <Route path="/tippuvat_sanat">
              <FallingWords />
            </Route>
            <Route path="/Email">
              <Email />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
