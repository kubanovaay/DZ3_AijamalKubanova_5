export const loginUser = (userData) => {
    return (dispatch, getState) => {
        console.log('Отправка данных пользователя:', userData);
        dispatch({ type: 'USER_LOGGED_IN', payload: userData });
    };
};
