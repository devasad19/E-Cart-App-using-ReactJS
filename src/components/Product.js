import React, { Component} from 'react';
import {ProductConsumer} from './../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

class Product extends Component{

    render(){
        const {id, title, img, price , inCart } = this.props.product;
        return(
            // col-9 mx-auto col-md-6 col-lg-3 my-3
        //  <productWrapper className=""> 
            <div className="col-md-3 my-3">
                <div className="card">
                        <ProductConsumer>
                            {value => (
                                    <div className="img-container p-5" onClick={ () => value.handleDetails(id)}>
                
                                    <Link to='/details' >
                                            <img src={img} alt="product" className="card-img-top" />
                                    </Link>
                                    
                                    {/* <Link to='/cart' > */}
                                            <button
                                                onClick={ () => {
                                                    value.addToCart(id);
                                                    value.modalOpen(id);
                                                }}
                                                disabled={inCart ? true: false}
                                                id="cart-btn">
                                                {
                                                    inCart ? (<span className="cart-tex" disabled>
                                                    {" "}    
                                                    In Cart
                                                    </span>
                                                    ):(
                                                        <i className="fa fa-cart-plus" ></i>
                                                    )
                                                }
                                            </button>
                                    {/* </Link> */}
                                </div>
                            )}
                        </ProductConsumer>
                    <div className="product-name">
                        <p>{title}</p>
                        <span>${price}</span>
                    </div>
                </div>
            </div>
            // </productWrapper>
        )
    }
}

export default Product;

const productWrapper = styled.div`

`;