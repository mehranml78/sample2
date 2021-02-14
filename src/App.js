import Contact from './components/contact';
import Left from './components/left';
import Content from './components/content';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Right from './components/right';
import AOS from "aos/dist/aos.js";
import "aos/dist/aos.css"
import NavBar from './components/modules/navbar';
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
          <Route exact={true} path="/">
            <Main />
          </Route>
          <Route exact={true} path="/nav">
            <NavBar />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );



}

export default App;
