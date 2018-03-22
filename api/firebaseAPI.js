import * as firebase from 'firebase'

export const createAccount = (email, password) => {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;

	  console.log('errorCode: ', errorCode, 'errorMessage: ', errorMessage)
	});

	const user = firebase.auth().currentUser

	//Store user data in firebase database
	//storeNewUser(user)

	// console.log('Created new user account with following data: ', user.uid)
}

export const createUser = (user) => {
	console.log('creating User: ', user)
	console.log('THIS IS THEIR EMAIL: ', user.email)

	const firebaseRefAtUID = firebase.database().ref().child('users').child(user.uid)

	return firebaseRefAtUID.once("value").then((snap) => {
		const defaults = {
		    uid: user.uid,
		    email: user.email,
		}
		const current = snap.val()
		const mergedUser = {...defaults, ...current}

		firebaseRefAtUID.update(mergedUser)
	})  
}

export const getUserCb = (uid, func) => {
	return firebase.database().ref().child('users').child(uid).once('value')
    	.then((snap) => {
    		const user = snap.val()

    		console.log(user)

    		func(user)
    	})
}

export const getCurrentUser = (func) => {
    const user = firebase.auth().currentUser

    if(user) {
     	func(user)
    } else {
    	func(null)
    }
}
