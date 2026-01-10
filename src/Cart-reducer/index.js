
export const initialState = {
    cart: [],
    count: 0
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "add_to_cart": return {
            ...state,
            cart: [...state.cart, action.payload]
        };

        case "remove_from_cart": return{
            ...state,

            cart : state.cart.filter(p => p.id !== action.payload)
        };

        default: return state;
    }
}