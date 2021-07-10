import firebase from "firebase/app"
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'
firebase.initializeApp(
    {
        apiKey: "AIzaSyCk6ZHWSbpjH3O5qCVNmowaCPtSu041EBg",
        authDomain: "reels-233c7.firebaseapp.com",
        projectId: "reels-233c7",
        storageBucket: "reels-233c7.appspot.com",
        messagingSenderId: "572861859954",
        appId: "1:572861859954:web:f148b5bc17e42bb3035aeb"
    }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();