import {useState} from "react";

import stateInit from '../initialState'
export const useInitialState = ()=> {
    const [state,setState]=useState(stateInit);
    const {cart} = state
    const addToCard= payload =>{
        setState(state=>{
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        })

    }
    const totalCard= ()=> {
        return cart.length > 0? cart.reduce((total, product)=> total + product.price,0) : 0.0;

    }

    const removeToCard= payload=> {
        setState(state=> {
            return {
                ...state,
                card: state.card.filter( item => item.id != payload.id)
            }
        })
    }
    return {
        state,
        removeToCard,
        addToCard,
        totalCard
    }
}