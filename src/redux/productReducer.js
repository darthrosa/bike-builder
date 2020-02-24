const initialState = {
    products: [],
}

const GET_PRODUCTS = 'GET_PRODUCTS';

export function getProducts(products){

    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export default function skillReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state;
    }
}