import React from "react"
import "./cart-dropdown.styles.scss"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { toggleCartDropdown } from "../../redux/cart/cart.action"
import { cartItemsSelector } from "../../redux/cart/cart.selectors"
import CartDropdownItem from "../cart-dropdown-item-tile/cart-dropdown-item.components"

const CartDropdown = ({ cartItems,history,dispatch }) => (
    <div className="drop-down-holder">
    <div className="cart-items-holder">
    {
        cartItems.length ?
        cartItems.map(
            cartItem => <CartDropdownItem item = { cartItem}/>
        )
        :
        (
            <div className="empty-note">
             Your Cart is empty
            </div>
        )
    }

    </div>
    <div className="button-section">
     <span className="checkout-button"
     onClick = { () => {
         history.push("./checkout")
         dispatch(toggleCartDropdown())
     }}
     >
         GO TO CHECKOUT
     </span>
    </div>
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        cartItems : cartItemsSelector
    }
)

export default withRouter(connect( mapStateToProps)(CartDropdown));