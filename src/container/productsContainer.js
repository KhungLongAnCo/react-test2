import React, { Component} from 'react';
import Products from '../components/products';
import Product from './../components/product';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class ProductsContainer extends Component{
    showProducts(products){
        let result = null;
        if(products){
            result = products.map((product,index)=>{
                return <Product key={index} product={product} onAddToCart = {this.props.onAddToCart}/>
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
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onAddToCart: (product, quantity) =>{
            dispatch(actions.addToCart(product, quantity))
        }
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired
        })

    ).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);