import CartActionTypes from "./cart-action.types"
import { addItemsToCart,decreaseItem,increaseItem } from "./cart.utils"

const INITIAL_STATE = {
    toggleCartHidden :  true, 
    cartItems : []
}

const cartReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.ADD_ITEMS_TO_CART :
            return {
                ...state,
                cartItems : addItemsToCart( state.cartItems, action.payload )
            }

        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                toggleCartHidden : !state.toggleCartHidden
            } 
        
        case CartActionTypes.REMOVE_ITEM :
            return {
                ...state,
                cartItems : state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        case CartActionTypes.DECREASE_ITEM :
            return {
                ...state,
                cartItems : decreaseItem( state.cartItems, action.payload)
            } 
        case CartActionTypes.INCREASE_ITEM :
            return {
                ...state,
                cartItems : increaseItem( state.cartItems, action.payload)
            }
        default:
            return state    
    }
}
export default cartReducer;