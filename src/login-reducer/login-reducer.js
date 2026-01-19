export const initialState = {
    email : '',
    password: '',
    token: localStorage.getItem("token") || ''
};

export const LoginReducer = (state, {type, payload}) => {
    switch(type) {
        case 'Email' : return{
            ...state,
            email: payload
        };

        case 'Password' : return{
            ...state,
            password: payload
        };

        case 'Token' : return{
            ...state,
            token: payload
        };
        case 'Logout' : return{
            ...state,
            email: '',
            password: '',
            token: '',
        }
        default: return state
    };
};