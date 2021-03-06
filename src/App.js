import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Count from "./components/count";
import Navigation from "./components/navigation";
import CheckInput from "./components/chkinput";
import ChangeSection from "./components/changesection";
import LoadingTitle from "./components/loadingtitle";
import ConfirmInput from "./components/confirminput";
import ConfirmExit from "./components/confirmexit";
import CheckMouseOut from "./components/chkmouseout";
import FadeText from "./components/fadetext";
import CheckNetwork from "./components/chknetwork";
import ScrollColor from "./components/scrollcolor";
import ScreenFul from "./components/screenfull";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <section id="content">
        <Route path="/" exact={true} component={Count} />
        <Route path="/" exact={true} component={CheckInput} />
        <Route path="/" exact={true} component={ChangeSection} />
        <Route path="/" exact={true} component={LoadingTitle} />
        <Route path="/" exact={true} component={ConfirmInput} />
        <Route path="/" exact={true} component={ConfirmExit} />
        <Route path="/" exact={true} component={CheckMouseOut} />
        <Route path="/" exact={true} component={FadeText} />
        <Route path="/" exact={true} component={CheckNetwork} />
        <Route path="/" exact={true} component={ScrollColor} />
        <Route path="/" exact={true} component={ScreenFul} />
      </section>
    </HashRouter>
  );
}

export default App;
