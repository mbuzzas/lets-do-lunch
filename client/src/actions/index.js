export const isLoggedIn = (user) => {
	return {
		type: 'LOGGED_IN',
		user
	}
}

export const addUser = (user) => {
	return {
		type: 'ADD_USER',
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
		.then(json => console.log(json))
		.catch((error) => {
			console.error(error);
		});
	}
}

// dispatch(isLoggedIn(user)

export const submitSignup = (firstname, lastname, email, password) => {
	return (dispatch) => {
		fetch('/signup', {
		  method: 'POST',
		  headers: {
		    'Content-type': 'application/json'
		  },
		  body: JSON.stringify({
		    firstname:firstname,
		    lastname: lastname,
		    email:email,
		    password:password}),
		})
		.then((response) => response.json())
		.then(json => console.log(json))
		.catch((error) => {
		  console.error(error);
		});
	}
}

// export const submitSignup = (firstname, lastname, email, password) => {
// 	return (dispatch) => {
// 		fetch('/signup', {
// 			method: 'POST',
// 			headers: {
// 				'Content-type': 'application/json'
// 			},
// 			body: JSON.stringify({
// 				firstname:firstname,
// 				lastname:lastname,
// 				email:email,
// 				password:password
// 			})
// 		})
// 		.then((response) => response.json())
// 		.then(json => console.log(json))
// 	}
// }



