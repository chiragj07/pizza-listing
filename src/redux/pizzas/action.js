import {FETCH_PIZZAS_SUCCESS ,
FETCH_PIZZAS_FAILED,
FETCH_PIZZAS_REQ} from './type'

const fetch_req = ()=>{
    return {
        type: FETCH_PIZZAS_REQ
    }
}
const fetch_success = pizzas =>{
    return {
        type : FETCH_PIZZAS_SUCCESS,
        payload: pizzas
    }
}
const fetch_failed = error =>{
    return {
        type : FETCH_PIZZAS_FAILED,
        payload: error
    }
}

export const fetchPizzas = ()=>{
    return async (dispatch)=>{
        dispatch(fetch_req());
        try {
        const res = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');
        const data = await res.json();
            dispatch(fetch_success(data));
        } catch(err){
            dispatch(fetch_failed(err.message))
        }

    }
}