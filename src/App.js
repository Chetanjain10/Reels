import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Feed from './Components/Feed';
import {BrowseRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from './Components/Signup';
import { Authprovider } from './Context/AuthProvider';
import Ioa from './Components/Ioa';
function App() {
  return (
    <Router>
      <Authprovider>
      <Switch>
        <Route path='/' exact component={Feed} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Login} />
      </Switch>
      </Authprovider>
    </Router>
  );
}

export default App;
