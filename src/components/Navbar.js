import React, { Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from './../logo.svg';

class Navbar extends Component{

    render(){
        return(
            <div className="">
                 <nav className='navbar navbar-expand-lg px-5 '>
                  
                      <h3 className="navbar-brand">
                          <img src={logo} alt="logo"/>
                      </h3>

                        <ul className="navbar-navs vmx-5">
                            <li className="nav-item ">
                                <NavLink exact to='/' className="nav-link">Products</NavLink>
                            </li>
                            
                            <li className="nav-item float-right">
                                <NavLink to='/cart' className="nav-link" >
                                    <i className="fa fa-cart-plus" />
                                    Cart
                                    </NavLink>
                            </li>
                        </ul>

                </nav>
            </div>
        )
    }
}

export default Navbar;