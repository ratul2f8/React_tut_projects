import React from "react"
import "./cart-dropdown-item.styles.scss"

const CartDropdownItem = ({item :{name, imageUrl, price, quantity}}) => (
    <div className="each-item-tile-holder">
    <div className="image-holder" style={{backgroundImage:`url(${imageUrl})`}}>
    </div>
    <div className="description-holder">
     <div className="item-name">
     {name}
     </div>
     <div className="quantity-price">
     {`${quantity} x $ ${ price }`}
     </div>
    </div>
    </div>
)
export default CartDropdownItem;