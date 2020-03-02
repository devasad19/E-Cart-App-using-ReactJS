import React, { Component } from 'react';

class CartList extends Component{

    render(){
        const {id, title, img, price, count, total} = this.props.item;
        const { cartIncrement, cartDecrement, cartItemRemove, cartClear } = this.props.value;
        return(
                <div className="cItem py-3 row text-center">
                    <div className="cart-img mx-auto col-md-2">
                        <img src={img} alt="cart-img" />
                    </div>
                    <div className="cart-name mx-auto col-md-2">
                         <p className="text-uppercase">{title}</p>
                    </div>
                    <div className="cart-price mx-auto col-md-2">
                        <p className="text-uppercase"><strong>{price}</strong></p>
                    </div>
                    <div className="cart-qty mx-auto col-md-2">
                        <div className="cart-qty">
                            <button onClick={ () => cartDecrement(id)} className="decrement">-</button>
                            <button className="count-cart">{count}</button>
                            <button onClick={ () => cartIncrement(id)} className="increment">+</button>
                        </div>
                    </div>
                    <div className="cart-remove mx-auto col-md-2">
                        <span onClick={ () => cartItemRemove(id)} className="cart-remove">
                            <i className="fa fa-trash"></i>
                        </span>
                    </div>
                    <div className="cart-total mx-auto col-md-2">
                        <strong>Item total: ${total}</strong>
                    </div>
                </div>
        )
    }
}

export default CartList;