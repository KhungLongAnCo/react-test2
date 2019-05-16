import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/cartItem';
import Cart from '../components/cart';
import CartResult from '../components/cartResult';
import PropTypes from 'prop-types';
import * as Mesage from '../constants/messages';
import * as actions from '../actions/index';


class CartContainer extends Component {
    showItemCart = (cart) => {
        let cartItem = Mesage.MSG_CART_EMPTY;
        if (cart.length > 0) {
            cartItem = cart.map((item, index) => {
                return <CartItem key={index}
                    item={item}
                    deleteCartItem={this.props.deleteCartItem}
                />
            })
        }
        return cartItem;
    }
    showTotalPrice = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
    render() {
        let { cart } = this.props;
        return (
            <div>
                <Cart>
                    {cart.length > 0 ? this.showItemCart(cart) : null}
                    {this.showTotalPrice(cart)}
                </Cart>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteCartItem: (product) => {
            dispatch(actions.deleteCartItem(product));
        }
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired
            })
        })
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)