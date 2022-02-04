import { Route, Switch } from "react-router-dom";
import { PortfolioPage } from "./pages/PortfolioPage.jsx";
import { Home } from "./pages/Home.jsx";
import { Preview } from "./pages/Preview.jsx";
import dataBase from "./db.json";
import { About } from "./pages/About.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";

function App() {
  return (
    <Switch>
      <Route path="/home">
        <Home data={dataBase} />
      </Route>
      <Route path="/portfolio">
        <PortfolioPage data={dataBase} />
      </Route>

      <Route path="/contacts">
        <ContactPage />
      </Route>

      <Route path="/aboutus">
        <About data={dataBase} />
      </Route>

      <Route path="/arabic">
        <Preview data={dataBase.arabic} />
      </Route>
      <Route path="/bath">
        <Preview data={dataBase.bath} />
      </Route>
      <Route path="/girl">
        <Preview data={dataBase.girl} />
      </Route>

      <Route path="/kids">
        <Preview data={dataBase.kids} />
      </Route>

      <Route path="/lecture">
        <Preview data={dataBase.lecture} />
      </Route>

      <Route path="/luxury">
        <Preview data={dataBase.luxury} />
      </Route>

      <Route path="/restaurant">
        <Preview data={dataBase.restaurant} />
      </Route>

      <Route path="/russian">
        <Preview data={dataBase.russian} />
      </Route>

      <Route path="/seat">
        <Preview data={dataBase.seat} />
      </Route>

      <Route path="/sofra">
        <Preview data={dataBase.sofra} />
      </Route>


      <Route path="/">
        <Home data={dataBase} />
      </Route>
    </Switch>
  );
}

export default App;
