import * as  firebase from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from './firebaseConfig';

export const initializeLoginFramework = () => {
    if (firebase.getApps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  export const handelGoogleSignIn = async () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const { email, displayName, photoURL } = user;
      const signIndUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        url: photoURL,
      };
      setUserToken() 
      sessionStorage.setItem('loggedInUser', JSON.stringify(signIndUser));
      return signIndUser;
    } catch (error) {
      console.log(error);
    }
  }
  const setUserToken=()=>{
    getAuth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      // Send token to your backend via HTTPS
      sessionStorage.setItem('token',idToken)
    }).catch(function(error) {
      // Handle error
    });
  }

  export const handelSignOut = () => {
    const auth = getAuth();
    const signOutUser = {
      isSignedIn: false,
      // name: '',
      // email: '',
      // url: '',
      error: '',
      isSuccess: false,
    }
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('loggedInUser')
    return signOut(auth).then(() => {
      // Sign-out successful.
      // sessionStorage.clear()
      return signOutUser;
    }).catch((error) => {
      // An error happened.
    });
  }