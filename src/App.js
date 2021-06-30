import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Count from "./components/count";
import Navigation from "./components/navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Count} />
    </HashRouter>
  );
}

export default App;
