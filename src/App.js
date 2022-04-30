import Login from "./components/pages/login";
import Home from "./components/pages/Home";
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
function App(){ 
  return(
    <Router>
    <Switch>
      <Route exact path='/'><Login/></Route>
      <Route path='/Home'><Home/></Route>
    </Switch>
</Router>

  )
}
export default App;
