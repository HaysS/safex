import * as firebase from 'firebase'

export const loginUser = (accessToken) => {

}

export const createAccount = (email, password) => {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  console.log('errorCode: ', errorCode, 'errorMessage: ', errorMessage)
	});
}