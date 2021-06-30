import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Count from "./components/count";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={ture} component={Count} />
    </HashRouter>
  );
}

export default App;
