import {ADD_TO_CART, INCREASE_QUANT,DECREASE_QUANT, REMOVE_FROM_CART} from './types'
const initialState= {
    cart:[]
}

const cartReducer = (state= initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART : return{
            ...state,
            cart: [...state.cart, action.payload]       }

        case REMOVE_FROM_CART : return{
            ...state,
            cart:state.cart.filter(item => item.cartItemId !== action.payload.cartItemId)
        }    
        case INCREASE_QUANT : return{
            ...state,
            cart: state.cart.map(function(item){
                if(item.cartItemId === action.payload.cartItemId){
                    item.quantity= item.quantity+1;
                }
                return item;
            } )
        }
        case DECREASE_QUANT : return{
            ...state,
            cart:  state.cart.map(function(item){
                if(item.cartItemId === action.payload.cartItemId){
                    item.quantity= item.quantity-1;
                }
                return item;
            } )
        
        }
        default : return state
    }
}

export default cartReducer;