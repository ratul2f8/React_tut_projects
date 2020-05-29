import CartActionTypes from "./cart-action.types"

export const addItemsToCart = item => (
    {
        type : CartActionTypes.ADD_ITEMS_TO_CART,
        payload : item
    }
)
export const toggleCartDropdown = () => (
    {
        type : CartActionTypes.TOGGLE_CART_HIDDEN
    }
)

export const decreaseItemFromCart = item => (
    {
        type : CartActionTypes.DECREASE_ITEM,
        payload : item
    }
)

export const increaseItemToCart = item => (
    {
        type : CartActionTypes.INCREASE_ITEM,
        payload : item
    }
)

export const removeItemFromCart = item => (
    {
        type : CartActionTypes.REMOVE_ITEM,
        payload : item
    }
)