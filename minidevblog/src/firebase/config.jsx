import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDhHuD2Rwev4ars6HtCb7M6hQLBu7YuUCM",
  authDomain: "minidevblogkamy.firebaseapp.com",
  projectId: "minidevblogkamy",
  storageBucket: "minidevblogkamy.appspot.com",
  messagingSenderId: "612083419004",
  appId: "1:612083419004:web:72e58f1b1c70a087bb46f9",
  measurementId: "G-BTPFNNEZQK"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}