import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialState } from "../Cart-reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, cartDispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{ state, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };