import * as types from '../constants/actionTypes';
let data = localStorage.getItem('Cart');
let initialState = data ? data : [
    {
        product:{
            id: 1, 
            name:'Iphone X',
            image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description:'Sản phẩm tàu khựa',
            rating:1,
            price:500,
            inventory:10
        },
        quantity:10
    }
];

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TOO_CART:
            let id = action.product.id;
           
            let indexProduct = null;
            let check = state.filter((item, index)=>{
                if(item.product.id === id){
                    indexProduct = index;
                }
                return  item.product.id === id                   
            });
            console.log(indexProduct);
            if(check.length > 0){
               state[indexProduct].quantity+=1;
            } 
            else{
                let item = {
                    product:action.product,
                    quantity:action.quantity                    
                }
                state.push(item);
            }   
            return [...state];

        default: return [...state];
    }
}
export default myReducer;