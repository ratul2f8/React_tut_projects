import { createSelector } from "reselect"

const cartSelector = state => state.cart

export const cartItemsSelector = createSelector(
    [cartSelector],
    cart => cart.cartItems
)

export const selectTotalItems = createSelector(
    [cartItemsSelector],
    (cartItems) => cartItems.reduce(
        (accumulator,cartItem) => accumulator + cartItem.quantity,
        0
    )
)

export const showDropDownCart = createSelector(
    [cartSelector],
    cart => cart.toggleCartHidden
)