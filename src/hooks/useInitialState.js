import {useState} from "react";

import stateInit from '../initialState'
export const useInitialState = ()=> {
    const [state,setState]=useState(stateInit);
    const addToCard= payload =>{
        setState(state=>{
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        })

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
        addToCard
    }
}