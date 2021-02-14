import Contact from './components/contact';
import Left from './components/left';
import Content from './components/content';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Right from './components/right';
import AOS from "aos/dist/aos.js";
import "aos/dist/aos.css";
import "./styles/main.css"
function App() {
  AOS.init();


  function Main() {
    return (<>
      <Left />
      <Right />
      <Content />
      <Contact />
    </>
    );
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact={true} path="/sample2">
            <Main />
          </Route>
          <Redirect from="*" to="/sample-2" />
        </Switch>
      </div>
    </BrowserRouter>
  );



}

export default App;
