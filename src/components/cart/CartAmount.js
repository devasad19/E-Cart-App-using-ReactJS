import React from 'react';

function CartAmount ({value}){
        const { cartSubTotal, cartTaxt, cartTotal, cartClear } = value;
    return(
        <div>
            
        <div className="row">
             <div className="cart-col text-right col-md-2 offset-md-6">
                    <button onClick={ () => cartClear() } className="btn btn-info btn-sm">Clear Cart</button>
              </div>
             <div className="cart-col text-right col-md-2">
                    <p className="text-uppercase"><strong>Sub Total:</strong></p>
              </div>
             <div className="cart-col col-md-2 text-center">
                    <p className="text-uppercase"><strong>${cartSubTotal}</strong></p>
              </div>
         </div>
            
        <div className="row">
             <div className="cart-col text-right col-md-2 offset-md-8">
                    <p className="text-uppercase"><strong>Total Tax:</strong></p>
              </div>
             <div className="cart-col col-md-2 text-center">
                    <p className="text-uppercase"><strong>${cartTaxt}</strong></p>
              </div>
         </div>
            
        <div className="row">
             <div className="cart-col text-right col-md-2 offset-md-8">
                    <p className="text-uppercase"><strong>Total:</strong></p>
              </div>
             <div className="cart-col col-md-2 text-center">
                    <p className="text-uppercase"><strong>${cartTotal}</strong></p>
              </div>
         </div>

        </div>        
    )
}

export default CartAmount;