import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, wishlistReducer } from "../../wishlist-reducer/wishlistreducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishListState, wishlistDispatch] = useReducer(wishlistReducer, initialState);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishListState.wishList));
    },[wishListState.wishList]);
    
    return (
        <WishlistContext.Provider value={{ wishListState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };