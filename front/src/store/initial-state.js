const initialState = {
    reduxTokenAuth: {
        currentUser: {
            isLoading: false,
            isSignedIn: false,
            attributes: {
                username: null,
            },
        },
    },
}

export default initialState;