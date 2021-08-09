// import logo from "./logo.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

// imported Components
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import Videos from "./Videos";

// imported pages
import Trending from "../pages/Trending";
import Subscriptions from "../pages/Subscriptions";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <Sidenav />
        <Switch>
          <Route exact path="/">
            <Videos />
          </Route>
          <Route exact path="/trending">
            <Trending />
          </Route>
          <Route exact path="/subscriptions">
            <Subscriptions />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
