export function addUser(email, password) {
	return {
		type: 'ADD_USER',
		email,
		password
	}
}

export function loginRequest() {
	return {
		type: 'REQUEST_LOGIN',
	}
}

export function loginSuccess() {
	return {
		type: 'LOGIN_SUCCESS',
	}
}

export function loginFailed(error) {
	return {
		type:'LOGIN_FAILED',
		error
	}
}