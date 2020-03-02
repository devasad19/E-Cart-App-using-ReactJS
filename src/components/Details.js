import React, { Component} from 'react';
import {ProductConsumer} from './../context';
import {NavLink} from 'react-router-dom';


class Details extends Component{

    render(){
        return(
<div>
            <ProductConsumer>
                { value =>{
                   const{id, title, price, img, company, info, inCart} = value.detailProduct;
                
           
            return(
            <div className="row my-5">
                <div className="col-md-6">
                    <h4 className="mb-3">{ title }</h4>
                    <img src={img} alt="details-product-img" />
                </div>
                <div className="col-md-6">
                    <h4>{title}</h4>
                    <strong> Company Name: <span>{company}</span></strong> <br/>
                    <strong> Price: <span>${price}</span></strong>
                    <h5 className="mt-3">About Product</h5>
                    <p>{info}</p>

                    <div className="button-details-page">
                        <NavLink to='/'>
                            <button className="mr-3" id="back-product">Back to products page</button>
                        </NavLink>
                        <button id="add-cart" disabled={inCart? true: false} onClick={ () => {
                             value.addToCart(id);
                             value.modalOpen(id);
                        }}>
                            {inCart?'In Cart':'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
            )
        }}
            </ProductConsumer>
            </div>
        )
    }
}

export default Details;