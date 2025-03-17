const initialState = {
    user: {first_name: 'Anass', last_name: 'Boutaib', role: 'user'}
}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }

        case 'LOGOUT_USER':
            return {
                ...state,
                user: null
            }

        default:
            return state
    }
}
