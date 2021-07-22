import './App.css';
/*import Home from './Home';*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Main';
import Footer from "./Footer";
import Project from "./Project";
import Navigationbar from './Navigationbar'
import Resume from './Resume'


function App() {
  return (
    <Router>
    
    <div className="app">
      <Switch>
         <Route path="/project">
          <Navigationbar />
           <Project /> 
           <Footer />
         </Route>
         <Route path="/Resume">
           <Resume /> 
         </Route>
        <Route path="/">
           <Navigationbar />
           <Main /> 
           <Footer />
         </Route>   
      </Switch>  
    </div>
    </Router>

   
  );
}

export default App;
