import * as types from '../constants/actionTypes';

export const addToCart = (product, quantity) =>{
    return{
        type: types.ADD_TOO_CART,
        product,
        quantity
    }
}