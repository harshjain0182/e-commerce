import { addressReducer, initialState } from "../../address-reducer";
import { createContext, useContext, useEffect, useReducer } from "react";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [{ addresses }, addressDispatch] = useReducer(
    addressReducer,
    initialState,
  );

  useEffect(() => {
    localStorage.setItem("address", JSON.stringify(addresses));
  }, [addresses]);

  return (
    <AddressContext.Provider
      value={{ addresses, addressDispatch }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);
export { useAddress, AddressProvider };
