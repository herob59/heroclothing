import './App.css'
import Navbar from "./component/Navbar";
import Products from './component/Products';
import Home from "./component/Home";
import About from "./component/About"
import Cart from "./component/Cart"
import {Switch, Route, Redirect} from 'react-router'
import Product from './component/Product';
const App = () => {
  return (
    <>
        <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Redirect to="/"/>
    </Switch>
      
    </>
  );
};

export default App;