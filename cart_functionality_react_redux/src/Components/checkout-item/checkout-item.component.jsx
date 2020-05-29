import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { removeItemFromCart,decreaseItemFromCart,increaseItemToCart } from "../../redux/cart/cart.action"

const CheckoutItem = ({item, removeItemFromCart,increaseItemToCart,decreaseItemFromCart }) => {
    const { imageUrl,quantity,price} = item;
    return (
      <div>
            <div className="checkout-item-holder">
    <div className="image-holder" 
    style = {{backgroundImage : `url(${imageUrl})`}}>
    </div>
    <div className = "operators-and-quantity">
      <span className="left-arrow"
      onClick = {() => decreaseItemFromCart(item)}
      >&#10096;  </span>
      {quantity}
      <span className = "right-arrow"
      onClick = { () => increaseItemToCart(item)}
      >  &#10097;</span>
    </div>
    <div className="item-total-price">
     { price*quantity }
    </div>
    <div className = "remove-icon"
    onClick = {
      () => removeItemFromCart( item )
    }>
    &#10006;
    </div>
    </div>
    <div className="strip">

    </div>
      </div>
    )
}

const mapDispatchToProps = dispatch => (
  {
    removeItemFromCart : item => dispatch(removeItemFromCart(item)),
    increaseItemToCart : item => dispatch( increaseItemToCart(item)),
    decreaseItemFromCart : item => dispatch( decreaseItemFromCart(item))
  }
)
export default connect( null, mapDispatchToProps )( CheckoutItem );