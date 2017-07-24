import firebase from 'firebase';

try{
	var config = {
		apiKey: "AIzaSyB4IK013FRnFNwN40UUglWtQ-zeg4dKdik",
		authDomain: "todoapp-e7fec.firebaseapp.com",
		databaseURL: "https://todoapp-e7fec.firebaseio.com",
		projectId: "todoapp-e7fec",
		storageBucket: "todoapp-e7fec.appspot.com",
		messagingSenderId: "86501360898"
	};
	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;