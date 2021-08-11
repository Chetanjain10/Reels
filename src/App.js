import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Feed from './Components/Feed';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from './Components/Signup';
import  PrivateRoute  from './Components/PrivateRoute';
import { Authprovider } from './Context/AuthProvider';
import Ioa from './Components/Ioa';
function App() {
  return (
    <Router>
      <Authprovider>
      <Switch>
        <PrivateRoute exact path='/' component={Feed} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
      </Authprovider>
    </Router>
  );
}

export default App;
