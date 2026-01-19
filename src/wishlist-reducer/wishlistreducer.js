
export const initialState = {
    wishList: JSON.parse(localStorage.getItem("wishlist") || '[]'),
}

export const wishlistReducer = (state, action) => {

    
    switch (action.type) {

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