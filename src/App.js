import React from "react";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function HatsPage() {
  return <div>Hats Page</div>;
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
