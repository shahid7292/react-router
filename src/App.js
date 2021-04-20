import './App.css';
import Nav from './Nav'
import About from './components/About'
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
