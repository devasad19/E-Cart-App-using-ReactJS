import React, { Component } from 'react';
import { ProductConsumer } from './../context';
import {Link } from 'react-router-dom';

class Modal extends Component{

    render(){
        return(
            <ProductConsumer>
                { value => {
                        const{openModal, modalClose} = value;
                        const{ title, img, price } = value.modalProduct;

                        if(!openModal){
                            return null;
                        }else{
                            return (
                                <div>
                                    <div className="modal-box">
                                        <div className="cart-modal-content">
                                            <div className="body">
                                                <h6>Item added to cart</h6>
                                                <img src={img} alt="cart-product" />
                                                <h6><strong>{title}</strong></h6>
                                                <h6>Price: <strong>${price}</strong></h6>
                                            </div>
                                            <div className="footer">
                                            <Link to='/'>
                                                <button type="button" onClick={ () => modalClose() } className="shopping">continue to shopping</button> 
                                            </Link>
                                            <Link to='/cart'>
                                                <button type="button" onClick={ () => modalClose() } className="cart">Add to cart</button>
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                }
          </ProductConsumer>
        )
    }
}

export default Modal;