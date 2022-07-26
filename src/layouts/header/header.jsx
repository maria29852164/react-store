import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import {AppContext} from '../../context/app.context'
import './header.scss'

const links = [
    {name: "Home",path:"/", icon_class: "fas fa-solid fa-house-user"},
    {name:'Checkout', path: '/checkout', icon_class:"fas fa-solid fa-credit-card"}
];

export const Header = ()=> {
    const {state, totalCard} = useContext(AppContext)
    const {cart} = state
    const handlerTotal=() => totalCard();

    return (
        <div className='header'>
            <nav className='menu'>
                <ul className='list-menu'>




                    {
                        links.map(link=> <Link className='item' key={link.path}  to={link.path}>  <i className={link.icon_class}></i></Link> )
                    }
                    {
                        <div className='item card-header'>Total: { handlerTotal() }</div>
                    }

                </ul>
            </nav>
        </div>
    );
}