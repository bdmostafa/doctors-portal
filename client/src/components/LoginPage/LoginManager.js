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
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = { name: displayName, email }
            storeAuthToken();
            // setLoggedInUser(signedInUser);
            return signedInUser;
        })
        .catch(err => {
            const signedInUser = { message: err.message }
            return signedInUser;
        });
}


export const fbSignIn = () => {
    const FbProvider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(FbProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = { name: displayName, email }
            storeAuthToken();
            return signedInUser;
        })
        .catch(err => {
            const signedInUser = { message: err.message }
            return signedInUser;
        });
}

export const createUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            // storeAuthToken();
            return newUserInfo;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            storeAuthToken();
            return newUserInfo;
        })
        .catch(err => {
            const newUserInfo = {}
            newUserInfo.err = err.message;
            newUserInfo.success = false;
            return newUserInfo;
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