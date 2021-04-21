import './App.css';
import Nav from './Nav'
import About from './components/About'
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'
import ProtectedRoute from './helper/index'
import Admin from './components/Admin'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector} from 'react-redux'

function App() {
  const log = useSelector(state => state.log)
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <ProtectedRoute admin={log} Component={Admin} path="/admin" />
          <Route path="/" exact component={Home} />
          <Route path="/about" render={()=><About/>} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
