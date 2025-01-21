import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
  // authDomain: "portofolio-web-3e8e8.firebaseapp.com",
  // projectId: "portofolio-web-3e8e8",
  // storageBucket: "portofolio-web-3e8e8.appspot.com",
  // messagingSenderId: "25195509306",
  // appId: "1:25195509306:web:2b635dcf997137bf612703"

  // 

    apiKey: "AIzaSyBbqBLzDfjf3_18wTEdq7kIs8UYkP82NQc",
    authDomain: "portfolio-abhi-51c2a.firebaseapp.com",
    projectId: "portfolio-abhi-51c2a",
    storageBucket: "portfolio-abhi-51c2a.firebasestorage.app",
    messagingSenderId: "271320434751",
    appId: "1:271320434751:web:94c7f5a5028e2b59c7108a",
    measurementId: "G-6FG220VJ46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };

// 


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBbqBLzDfjf3_18wTEdq7kIs8UYkP82NQc",
//   authDomain: "portfolio-abhi-51c2a.firebaseapp.com",
//   projectId: "portfolio-abhi-51c2a",
//   storageBucket: "portfolio-abhi-51c2a.firebasestorage.app",
//   messagingSenderId: "271320434751",
//   appId: "1:271320434751:web:94c7f5a5028e2b59c7108a",
//   measurementId: "G-6FG220VJ46"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);