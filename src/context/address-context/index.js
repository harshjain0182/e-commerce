import { addressReducer, initialState } from "../../address-reducer";
import { createContext, useContext, useReducer } from "react";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
    const [{addresses, currAddress}, addressDispatch] = useReducer(addressReducer, initialState);

    return(
        <AddressContext.Provider value={{addresses, currAddress, addressDispatch}}>
            {children}
        </AddressContext.Provider>
    );
}

const useAddress = () => useContext(AddressContext);
export {useAddress, AddressProvider};