import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import {Switch, Route} from 'react-router-dom';
import Modal from './components/Modal';

class App extends Component {

  render(){
    return (
    <React.Fragment>
            <Navbar />
        <div className="container">

            <Switch>
                <Route path="/" exact component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route component={Default} />
            </Switch>
        </div>
          <Modal />

          </React.Fragment>
    );
  }
}

export default App;
