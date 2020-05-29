export const addItemsToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    if( existingCartItem){
        return cartItems.map(
            cartItem => 
            cartItem.id === cartItemToAdd.id 
            ?
            {...cartItemToAdd,quantity : cartItem.quantity+1}
            :
            cartItem
        )
    }
    else{
        return [...cartItems, {...cartItemToAdd, quantity : 1}]
    }
}
export const decreaseItem = ( cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    
    if( existingCartItem.quantity === 1){
        return cartItems.filter(
            cartItem => cartItem.id !== existingCartItem.id
        )
    }
    else{
       return cartItems.map(
            cartItem =>
            cartItem.id === existingCartItem.id ?
            {...cartItem, quantity : existingCartItem.quantity - 1}
            :
            cartItem
        )
    }
}

export const increaseItem = ( cartItems, cartItemToAdd) => {
    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToAdd.id 
        ?
        {...cartItem, quantity : cartItemToAdd.quantity + 1}
        :
        cartItem
    )
}