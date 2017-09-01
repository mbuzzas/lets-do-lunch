export const isLoggedIn = (user) => {
	return {
		type: 'LOGGED_IN',
		user
	}
}

export const submitLogin = (email, password) => {
	return (dispatch) => {
		fetch('/login', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({email: email, password: password}),
		})
		.then((response) => response.json())
		.then(json => dispatch(isLoggedIn()))
		.catch((error) => {
			console.error(error);
		});
	}
}