import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB5DX0Yk6TipWp-x6AhuBPZwQUWmD7DCR0",
    authDomain: "fir-setup-3e887.firebaseapp.com",
    projectId: "fir-setup-3e887",
    storageBucket: "fir-setup-3e887.appspot.com",
    messagingSenderId: "1053922295681",
    appId: "1:1053922295681:web:76813dbb742bb8b81a7280",
    measurementId: "G-827NTCLKFM"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export {db} ;