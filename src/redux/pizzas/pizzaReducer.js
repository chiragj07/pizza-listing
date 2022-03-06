import {FETCH_PIZZAS_SUCCESS,
    FETCH_PIZZAS_FAILED,
    FETCH_PIZZAS_REQ } from './type';
const initialState= {
    pizzas: [],
    loading: true,
    error :''
}

const pizzaReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_PIZZAS_SUCCESS : return {
            ...state,
            loading:false,
            pizzas: action.payload 
        }
        case FETCH_PIZZAS_FAILED : return {
            ...state,
            pizzas:[],
            loading:false,
            error:action.payload
        }
        case FETCH_PIZZAS_REQ : return{
            ...state,
            loading: true
        }
        default : return state
    }
}

export default pizzaReducer;

