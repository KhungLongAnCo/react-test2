import * as types from '../constants/actionTypes';
let data = JSON.parse(localStorage.getItem('Cart'));
let initialState = data ? data : [];

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TOO_CART:
           let {product, quantity} = action;
           let index = findIndex(state, product);
           if(index !== -1){
            state[index].quantity+= quantity;
           }
           else{
            state.push({
                product,
                quantity
            })
           }
           localStorage.setItem('Cart', JSON.stringify(state));
            return [...state];
        case types.DELETE_CART_ITEM:
           let indexDelete = findIndex(state, action.product);
           state.splice(indexDelete, 1);
           localStorage.setItem('Cart', JSON.stringify(state));
           return [...state];
        case types.UPDATE_QUANTITY:
           let indexUpdate = findIndex(state, action.product);
           if(state[indexUpdate].quantity <= 1){
            state.splice(indexUpdate, 1);
           }else{
            state[indexUpdate].quantity+= action.quantity;
           }
           localStorage.setItem('Cart', JSON.stringify(state));
           return [...state];
        default: return [...state];
    }
}
let findIndex = (state, product) =>{
    let index = -1;
    if(state.length > 0){
        for(let i=0; i< state.length ; i++){
            if(state[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}
export default myReducer;