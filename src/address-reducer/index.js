import { v4 as uuid } from "uuid";

export const initialState = {
    addresses: [],
    currAddress: null
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

        default: return state;
    }
}