import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const loginFrameworkInit = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(result => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        storeAuthToken();
        // setLoggedInUser(signedInUser);
        return signedInUser;
    }).catch(error => {
        console.log(error.message);
    });
}

const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
            sessionStorage.setItem('token', idToken);
            // history.replace(from);
        }).catch(error => {
            console.log(error.message)
        });
}