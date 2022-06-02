import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import UserPage from "./UserPage";
import Login from "./Login";

function App() {

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if (res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])
  if (!currentUser) return <Home setCurrentUser={setCurrentUser} />
  return (
    <BrowserRouter>
    <Header currentUser={currentUser}/>
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
