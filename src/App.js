import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import WeatherPage from "./pages/weatherpage/WeatherPage"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/weather" component={WeatherPage} />
      </Switch>
    </div>
  );
}

export default App;
