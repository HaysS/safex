import * as firebase from 'firebase'

export const createAccount = (email, password) => {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;

	  console.log('errorCode: ', errorCode, 'errorMessage: ', errorMessage)
	});
}

 export const getCurrentUser = (func) => {
    const user = firebase.auth().currentUser

    if(user) {
     	func(user)
    } else {
    	func(null)
    }
  }
