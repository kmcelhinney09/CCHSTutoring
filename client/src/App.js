import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function App() {

  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
