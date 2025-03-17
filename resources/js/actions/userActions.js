export function setUser(data) {
    return {
        type: 'SET_USER',
        payload: {data}
    }
}

export function logoutUser() {
    return {
        type: 'LOGOUT_USER'
    }
}