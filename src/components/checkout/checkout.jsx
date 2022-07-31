
import React, {useContext} from "react";
import './checkout.scss'
import {Link} from "react-router-dom";
import {AppContext} from "../../context/app.context";

export const Checkout = ()=> {
    const {state, removeToCard,totalCard}= useContext(AppContext)
    const {cart} = state

    const handleTotalCart= ()=>totalCard();

    return (
        <div className='container'>
            <div className='checkout'>
                <div className="checkout-content">
                    <h1>Lista de pedidos</h1>
                    <div className="checkout-item">
                        {cart.length > 0 ?

                            cart.map(product=> {
                                return (
                                    <div key={product.id} className="checkout-element">
                                        <h4>{product.title}</h4>
                                        <span>{product.price}</span>
                                        <button type='button' onClick={()=> removeToCard(product)}>
                                            <i className="fas fa-solid fa-trash"></i>
                                        </button>

                                    </div>)
                            })
                            :null}
                    </div>


                </div>
                <div className="checkout-sidebar">
                    <h3>Total: ${handleTotalCart()}</h3>
                    <Link to='/checkout/information'>

                        <button type='button'>Buy order</button>

                    </Link>

                </div>
            </div>
        </div>

    );
}
