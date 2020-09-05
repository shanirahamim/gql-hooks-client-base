import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import ProductView from './components/Product/ProductView'; // todo: laze load here.
import ProductsView from './components/Products/ProductsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => (
  
  <div>
    <Header></Header>
   <Router>
        <div>
          <Switch>            
            <Route path="/product/:product_id" component={ProductView}></Route>
            <Route path="/products" component={ProductsView}></Route>
            {/* <Route path="/products" component={Products}></Route> */}
            <Route path="/" component={ProductsView}></Route>
          </Switch>
        </div>
    </Router>
  </div>
);

export default App;