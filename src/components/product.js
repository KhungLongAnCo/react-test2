import React, { Component } from 'react';
class Product extends Component {
    showRatting(rating) {
        let result = [];
        for(var i=0; i<rating; i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for(var j=0; j<(5-rating) ; j++){
            result.push( <i key={j+5} className="fa fa-star-o"></i>);
        }
        return result;
    }
    render() {
        let { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                           <li>
                           {this.showRatting(product.rating)}
                           </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price} $</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;