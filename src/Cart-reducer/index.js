
export const initialState = {
    cart: [],
    wishList: []
}

export const cartReducer = (state, action) => {

    
    switch (action.type) {
        case "add_to_cart": return {
            ...state,
            cart: [...state.cart, {...action.payload, qty: 1}]
        };

        case "remove_from_cart": return{
            ...state,

            cart : state.cart.filter(p => p.id !== action.payload),
        };

        case "decrement_click" : return{
            ...state,

            cart : state.cart.map(product => product.id === action.payload && product.qty > 1 ? {...product, qty : product.qty - 1} : product)
        }

        case "increment_click" : return{
            ...state,

            cart: state.cart.map(product => product.id === action.payload ? {...product, qty: product.qty + 1} : product)
            
        }

        case "add_to_wishlist" : return {
            ...state,
            wishList: [...state.wishList, action.payload]
        };

        case "remove_from_wishlist": return{
            ...state,

            wishList : state.wishList.filter(p => p.id !== action.payload),
        };

        default: return state;
    }
}