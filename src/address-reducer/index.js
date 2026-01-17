import { v4 as uuid } from "uuid";

export const initialState = {
    addresses: [],
}

export const addressReducer = (state, {type, payload}) => {
    switch(type) {
        case 'Add_Address' : return{
            ...state,
            addresses: [
                ...state.addresses,
                {id: uuid(), ...payload }
            ]
        }

        case 'Remove_Address' : return{
            ...state,
            addresses : state.addresses.filter(add => add.id !== payload)
        }

        case 'Edit_Address': return{
            ...state,
            addresses: state.addresses.map( addr => addr.id === payload.id ? { ...addr, ...payload } : addr )
        }

        default: return state;
    }
}