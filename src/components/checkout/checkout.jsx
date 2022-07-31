import React from "react";
import './checkout.scss'
export const Checkout = ()=> {
    return (
        <div className='container'>
            <div className='checkout'>
                <div className="checkout-content">
                    <h1>Lista de pedidos</h1>
                    <div className="checkout-item">
                        <div className="checkout-element">
                            <h4>Item product</h4>
                            <span>$100</span>
                            <button type='button'>Remove order</button>

                        </div>
                    </div>

                </div>
                <div className="checkout-sidebar">
                    <h3>Total: 400$</h3>
                    <button type='button'>Buy order</button>
                </div>
            </div>
        </div>

    );
}