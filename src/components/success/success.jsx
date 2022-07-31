import React from "react";
import './success.scss'
export const Success = ()=> {
    return (
        <div className='success'>
            <div className="success-content">
                <h2>Maria Gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
                <div className="success-map">
                    google maps
                </div>
            </div>
        </div>
    );
}