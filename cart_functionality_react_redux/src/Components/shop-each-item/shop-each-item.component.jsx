import React from "react";
import "./shop-each-item.styles.scss";
import { connect } from "react-redux";

import { addItemsToCart } from "../../redux/cart/cart.action"
import { ReactComponent as AddToCartIcon } from "../../assets/add-to-cart.svg";

const EachItem = ({item,addItemsToCart}) => {
    const {name,imageUrl,price } = item

    return (
        <div className="item-holder">
        <div className="image-section" 
        style={{backgroundImage: `url(${imageUrl})`}}>
        <span className="add-to-cart-icon" onClick={() => addItemsToCart( item ) }>
            <AddToCartIcon/>
        </span>
        </div>
        <div className="description-section">
        <div className="item-name">
        {name}
        </div>
        <div className="item-price">
         ${price}
        </div>
        </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => (
    {
        addItemsToCart : item => dispatch( addItemsToCart( item ))
    }
)

export default connect(null, mapDispatchToProps)( EachItem );