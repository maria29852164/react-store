import React from "react";
import './payments.scss'
import {Link} from "react-router-dom";

export const Payments = ()=> {
    return (
       <div className='payment'>
           <div className="payment-content">
               <h3>Resumen del pedido</h3>
               <div className="payment-button">
                   boton de pago con paypal
               </div>
           </div>

       </div>
    );
}