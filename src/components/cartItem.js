import React , {Component} from 'react';
import * as messages from '../constants/messages.js';
class cartItem extends Component {
render(){
    let {item} = this.props;
  return (
     
    <tr>
    <th scope="row">
        <img src={item.product.image} alt=""
            className="img-fluid z-depth-0" />
    </th>
    <td>
        <h5>
            <strong>{item.product.name}</strong>
        </h5>
    </td>
    <td>{item.product.price}$</td>
    <td className="center-on-small-only">
        <span className="qty">Số lượng: {item.quantity}&nbsp; </span>
        <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary
                btn-rounded waves-effect waves-light"
                onClick={() => this.updateQuantity(item.product,-1)}
                >
                <span>—</span>
            </label>
            <label className="btn btn-sm btn-primary
                btn-rounded waves-effect waves-light"
                onClick={() => this.updateQuantity(item.product, 1)}
                >
                 <span>+</span>
            </label>
        </div>
    </td>
    <td>{this.sumPrice(item.product.price,item.quantity) }</td>
    <td>
        <button
         type="button" 
         className="btn btn-sm btn-primary waves-effect waves-light" 
         data-toggle="tooltip" data-placement="top"
         onClick={()=> this.deleteItem(item.product)}
            title="" data-original-title="Remove item">
            X
        </button>
    </td>
</tr>
                                     
    );
}
updateQuantity = (product, quantity) =>{
    this.props.updateQuantity(product, quantity);
    this.props.UpdateMessage(messages.MSG_UPDATE_TO_CART_SUCCESS);
}
sumPrice = (x, y)=>{
    return x*y;
}
deleteItem = (product) =>{
    this.props.deleteCartItem(product);
    this.props.UpdateMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
}
}

export default cartItem;
