import logo from './logo.svg';
import Registration from './components/Registration'
import Login from './components/Login'
import Welcome from './components/Welcome'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
 


  return (
  
    <Router>
    <div className="App">
      <Switch>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
    </Router>
   
  );
}

export default App;
