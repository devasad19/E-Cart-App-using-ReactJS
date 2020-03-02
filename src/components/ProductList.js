import React, { Component} from 'react';
import Product from './Product';
import PageTitle from './PageTitle';
import {ProductConsumer} from './../context';

class ProductList extends Component{

    render(){
        return(
            <React.Fragment>
            <div className="row">
                   
                    <PageTitle name="Product" title="page" />
                   
               
                <div className="row">
                        <ProductConsumer>
                            { value =>{
                                return value.products.map( product =>{
                                    return <Product key={product.id} product={product} />
                                });
                            } }
                        </ProductConsumer>
                </div>
            </div>

          </React.Fragment>
        )
    }
}

export default ProductList;