import { ADD_TO_CART , REMOVE_FROM_CART, INCREASE_QUANT, DECREASE_QUANT } from "./types";


export const addToCart = (item)=>{
        return {
            type : ADD_TO_CART,
            payload : item
        }
}

export const removeFromCart = (item) =>{
    return {
        type :REMOVE_FROM_CART,
        payload: item
    }
}

export const increaseQuant = (item) =>{
    return {
        type: INCREASE_QUANT,
        payload: item
    }
}
export const decreaseQuant = (item) =>{
    return {
        type: DECREASE_QUANT,
        payload: item
    }
}
