const initialState = {
	loggedIn: false,
	user: {}
}

const Login = (state = initialState, action) => {
	switch(action.type) {
		case 'LOGGED_IN':
			console.log("logged in");
			return {
				...state,
				loggedIn: true,
				user: action.user
			}

		default:
			return state
	}
}

const Signup = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_USER':
			console.log("adding new user");
			return {
				...state,
				loggedIn: true,
				user: action.user
			}
			default:
			return state
	}
}

export default Signup