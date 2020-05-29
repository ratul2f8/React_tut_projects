import React from "react";
import "./checkout-page.styles.scss";
import { createStructuredSelector } from "reselect"
import { cartItemsSelector } from "../../redux/cart/cart.selectors"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, history }) => (
    <div className="container">
        <button className="back-btn"
         onClick  = {
             () => history.push("./")
         }
        >
        &#10096;  BACK TO SHOP 
        </button>
        <div className = "banner">
        <div className = "Name">
        ITEM
        </div>
        <div className = "Quantity">
        QUANTITY
        </div>
        <div className = "Price">
        Price
        </div>
        <div className = "Remove">
        REMOVE
        </div>
        </div>
        {
            cartItems.map(
                cartItem => (
                    <CheckoutItem item = {cartItem}/>
                )
            )
        }
        <div className="total-section">
         {`TOTAL : $${
            cartItems.reduce(
                ( accumulator , cartItem) => 
                accumulator + cartItem.quantity*cartItem.price,
                0
            )
         }`}
        </div>
    </div>

)
const mapStateToProps = createStructuredSelector(
    {
        cartItems : cartItemsSelector
    }
)

export default withRouter(connect(mapStateToProps)( CheckoutPage));