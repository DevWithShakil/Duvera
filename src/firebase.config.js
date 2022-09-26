import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyApR4BRAhSJjoCjTxok1GnkmeK-jdHOe4E",
    authDomain: "ecommerce-app-3d8de.firebaseapp.com",
    databaseURL: "https://ecommerce-app-3d8de-default-rtdb.firebaseio.com",
    projectId: "ecommerce-app-3d8de",
    storageBucket: "ecommerce-app-3d8de.appspot.com",
    messagingSenderId: "869339193535",
    appId: "1:869339193535:web:525a24df0d28537c8b260a"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
