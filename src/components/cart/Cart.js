import React, { Component} from 'react';
import PageTitle from '../PageTitle';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartAmount from './CartAmount';

class Cart extends Component{

    render(){
        return(
            <div>
                <ProductConsumer>
                    { value => {
                        const {cart } = value;
                        if(cart.length > 0){
                             return(
                                 <React.Fragment>
                                    <PageTitle name="Your Cart" title="Page" />

                                    <div className="row text-center">
                                        <div className="cart-col mx-auto col-md-2">
                                            <p className="text-uppercase"><strong>Product</strong></p>
                                        </div>
                                        <div className="cart-col mx-auto col-md-2">
                                            <p className="text-uppercase"><strong>name of product</strong></p>
                                        </div>
                                        <div className="cart-col mx-auto col-md-2">
                                            <p className="text-uppercase"><strong>price</strong></p>
                                        </div>
                                        <div className="cart-col mx-auto col-md-2">
                                            <p className="text-uppercase"><strong>quantity</strong></p>
                                        </div>
                                        <div className="cart-col mx-auto col-md-2">
                                            <p className="text-uppercase"><strong>remove</strong></p>
                                        </div>
                                        <div className="cart-col mx-auto col-md-2">
                                            <p className="text-uppercase"><strong>total</strong></p>
                                        </div>
                                    </div>
                                    
                                    {
                                        cart.map( item=>{
                                            return <CartList key={item.id} item={ item } value={ value } />
                                        })
                                    }
                                    
                                    <CartAmount value={value} />
                                 </React.Fragment>
                             )
                        }else{
                           return(
                              <PageTitle name="Your Cart is" title="Empty" />
                           )
                        }
                    }}
                </ProductConsumer>


            </div>
        )
    }
}

export default Cart;