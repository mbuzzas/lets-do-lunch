const initialState = {
	loading: false,
	loggedIn: false,
	errorMessage: null
}

const login = (state = initialState, action) => {
	switch(action.type) {
		case 'REQUEST_LOGIN':
			return[...state,{
				loading: true
			}]

		case 'LOGIN_SUCCESS':
			console.log("user logged in");
			return[...state,{
				loggedIn: true
			}]

		case 'LOGIN_FAILED':
			console.log("login failed")
			return [...state,{
				errorMessage: true
			}]

		default:
			return state;
	}
}

export default login;