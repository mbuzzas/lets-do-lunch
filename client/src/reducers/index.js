const initialState = {
	loggedIn: false
}

const Login = (state = initialState, action) => {
	switch(action.type) {
		case 'LOGGED_IN':
			return {
				...state,
				loggedIn: true
			}

		default:
			return state
	}
}

export default Login