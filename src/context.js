import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();
// Provider // Consumer

class ProductProvider extends Component{
    state ={
        products:[],
        detailProduct: detailProduct,
        cart: [],
        openModal: false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTaxt:0,
        cartTotal:0
    }
    componentDidMount(){
        this.setProducts();
    }

    setProducts = () =>{
        let tempProducts= [];
        storeProducts.forEach( item =>{
            let singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });

        this.setState( () =>{
            return {products: tempProducts}
        })
    }

    getItem = (id) =>{
        const product = this.state.products.find( item => item.id === id);
        return product;
    }

    handleDetails = (id) =>{
        const product = this.getItem(id);
        this.setState(() =>{
            return {detailProduct: product}
        })
    }

    addToCart = (id) =>{
       let tempProduct = [...this.state.products]
       const index = tempProduct.indexOf(this.getItem(id));
       const product = tempProduct[index];
       product.inCart = true;
       product.count = 1;
       const price = product.price;
       product.total = price;

       this.setState( () =>{
           return {products: tempProduct, cart:[...this.state.cart, product]}
       },
       () => {
            this.addTotal();
       })
       
    }

    modalOpen = (id) =>{
        const product = this.getItem(id);
        this.setState( () =>{
            return { modalProduct:product, openModal: true}
        })
    }

    modalClose = () => {
        this.setState( () =>{
            return {openModal: false}
        })
    }
    
    cartIncrement = (id) =>{
        let tmpCart = [...this.state.cart];
        let selectedP = tmpCart.find( item => item.id === id);
        const index = tmpCart.indexOf(selectedP);
        const product = tmpCart[index];

            product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState( () => {
            return{
                cart: [...tmpCart]
            }
            },
            () => {
                this.addTotal();
            }
        )
    }

    cartDecrement = (id) =>{
        let tmpCart = [...this.state.cart];
        let selectProduct = tmpCart.find( item=> item.id === id);
        const index = tmpCart.indexOf(selectProduct);
        const product = tmpCart[index];

            product.count = product.count - 1;
            if(product.count === 0){
                this.cartItemRemove(id);
            }else{
                product.total = product.count * product.price;
                this.setState( () => {
                    return{
                        cart: [...tmpCart]
                    }
                    },
                    () => {
                        this.addTotal();
                    }
                )
            }
    }

    cartItemRemove = (id) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter( item => item.id !== id);

       const index = tempProducts.indexOf(this.getItem(id));
       let removeProduct = tempProducts[index];
       removeProduct.inCart = false;
       removeProduct.count = 0;
       removeProduct.total = 0;

       this.setState( () =>{
            return{
                cart: [...tempCart],
                products: [...tempProducts]
            }
        },
        () => {
            this.addTotal();
        }
       )
    }

    cartClear = (id) =>{
        this.setState( () => {
            return { cart: []}
        },
        () => {
            this.setProducts();
            this.addTotal();
        }
        
        )
    }
    
    addTotal = () =>{
        let subTotal = 0;
        this.state.cart.map( item=>{ subTotal += item.total });
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;

        this.setState( () => {
            return {
                cartSubTotal: subTotal,
                cartTaxt: tax,
                cartTotal: total
            }
        })
    }

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart,
                modalOpen: this.modalOpen,
                modalClose: this.modalClose,
                cartIncrement: this.cartIncrement,
                cartDecrement: this.cartDecrement,
                cartItemRemove: this.cartItemRemove,
                cartClear: this.cartClear
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };