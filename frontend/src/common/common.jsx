export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('userLogin'));
}

export const getIsLoggedIn = () => {
    return JSON.parse(localStorage.getItem('isLoggedIn'));
}