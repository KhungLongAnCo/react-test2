import React, { Component} from 'react';
import Products from '../components/products';
import Product from './../components/product';
import { connect } from 'react-redux';

class ProductsContainer extends Component{
    showProducts(products){
        let result = null;
        if(products){
            result = products.map((product,index)=>{
                return <Product key={index} product={product} />
            })             
        }
        return result;
    }
    render(){
        const {products} = this.props;
        return(
            <Products>
                {this.showProducts(products)}
            </Products>
        )
    }
   
}
const mapStateToProps = (state)=>{ 
    return {
        products: state.products  
    }
}
   
export default connect(mapStateToProps, null)(ProductsContainer);