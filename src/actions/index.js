import * as types from '../constants/actionTypes';

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TOO_CART,
        product,
        quantity
    }
}
export const UpdateMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const deleteCartItem = (product) =>{
    return {
        type: types.DELETE_CART_ITEM,
        product
    }
}
export const updateQuantity = (product, quantity) =>{
    return {
        type: types.UPDATE_QUANTITY,
        product,
        quantity
    }
}
