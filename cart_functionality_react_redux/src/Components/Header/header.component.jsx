import React from "react";
import "./header.styles.scss";
import { toggleCartDropdown } from "../../redux/cart/cart.action"
import { showDropDownCart } from "../../redux/cart/cart.selectors"
import { selectTotalItems } from "../../redux/cart/cart.selectors"
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component"

const Header = ({ itemsCount, toggleCartDropdown , hiddenDropdown }) => (
   <div>
    <div className="header-container">
    <ShoppingIcon className="icon-itself" 
    onClick = {() => toggleCartDropdown()}/>
    <span className="item-count">{ itemsCount }</span>
    </div>
    {
      hiddenDropdown ? 
      null :
      (
        <CartDropdown/>
      )
    }
  </div>
)
const mapStateToProps = createStructuredSelector(
  {
    itemsCount : selectTotalItems,
    hiddenDropdown : showDropDownCart
  }
)

const mapDispatchToProps = dispatch => (
  {
    toggleCartDropdown : () => dispatch(toggleCartDropdown())
  }
)

export default connect( mapStateToProps,mapDispatchToProps )( Header );