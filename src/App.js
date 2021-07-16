import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Feed from './Components/Feed';
import AuthProvider from './Context/AuthProvider';
import {BrowseRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    // <AuthProvider>
    //   {/* <h1>Hello</h1> */}
    //   <Signup />
    // </AuthProvider>
    <Router>
      <AuthProvider>
      <Switch>
        <Route exact path='/' component={Feed} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup}/>
      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
