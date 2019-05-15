var initialState = [
    {
    id: 1, 
    name:'Iphone X',
    image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description:'Sản phẩm tàu khựa',
    rating:1,
    price:500,
    inventory:10
},
{
    id: 2, 
    name:'Iphone 7',
    image:'https://cdn.fptshop.com.vn/Uploads/Originals/2014/6/5/201406051522109725_Nokia%201280.jpg',
    description:'Sản phẩm tàu khựa',
    rating:5,
    price:600,
    inventory:10
},
{
    id: 3, 
    name:'Iphone 8',
    image:'http://streaming1.danviet.vn/upload/4-2015/images/2015-11-27/1448632207-so1.jpg',
    description:'Sản phẩm tàu khựa',
    rating:3,
    price:700,
    inventory:10
}
];

const myReducer = (state=initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
}

export default myReducer;