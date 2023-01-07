import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVEWfBwyoZeNYqrXyWEnXM3c9ihTyMg0c",
    authDomain: "olx-clone-20495.firebaseapp.com",
    projectId: "olx-clone-20495",
    storageBucket: "olx-clone-20495.appspot.com",
    messagingSenderId: "304926761506",
    appId: "1:304926761506:web:7eaba0f0b43d07e982207b",
    measurementId: "G-43KPBCK9HH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);