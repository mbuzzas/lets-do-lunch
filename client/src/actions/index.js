export const isLoggedIn = () => {
	type: 'LOGGED_IN',
	loggedIn
}

 export const submitLogin = (email, password) => {
	return (dispatch) => {
		fetch('/login', {
			method: 'POST',
			headers: {
			'Content-type': 'application/json',
			},
			body: JSON.stringify({email:email, password:password}),
			})
		}
		.then((response) => response.json())
		.then((responseJson) => {
		  // return responseJson;
		  //dispatch action type property
		  console.log(responseJson);
		})
		.catch((error) => {
		  console.error(error);
		});  
}