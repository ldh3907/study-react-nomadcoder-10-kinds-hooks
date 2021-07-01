import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Count from "./components/count";
import Navigation from "./components/navigation";
import CheckInput from "./components/chkinput";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <section id="content">
        <Route path="/" exact={true} component={Count} />
        <Route path="/" exact={true} component={CheckInput} />
      </section>
    </HashRouter>
  );
}

export default App;
