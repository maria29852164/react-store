import React from "react";
import './information.scss'
export const Information = ()=> {
    return (
        <div className='information'>
           <div className="information-content">
               <div className="information-head">
                   <h2>Informacion de contacto:</h2>
               </div>
               <div className="information-form">
                   <form action="">
                       <input type="text" placeholder='Nombre Completo' name='name'/>

                       <input type="email" placeholder='Correo electronico' name='email'/>

                       <input type="text" placeholder='Telefono' name='phone'/>
                       <input type="text" placeholder='Ciudad' name='city'/>

                       <input type="text" placeholder='Direccion' name='address'/>
                       <input type="password" placeholder='Contraseña' name='password'/>

                   </form>
               </div>
               <div className="custom-action">
                   <div className="information-back">
                       <span> Regresar</span>
                   </div>
                   <div className="information-next">
                       <span> Pagar </span>
                   </div>
               </div>

           </div>
            <div className="information-sidebar">
                <h3>Pedido: 1000$</h3>
                <div className="information-item">
                    <div className="information-element">
                        <h4>Item Name</h4>
                        <span>$ 100</span>
                    </div>
                </div>
            </div>
        </div>
    );
}