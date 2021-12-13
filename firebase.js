 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBhzIwRnmMBFrLfqHBbIvZN4cLsOutSYQ0",
    authDomain: "ecommerce-c128b.firebaseapp.com",
    projectId: "ecommerce-c128b",
    storageBucket: "ecommerce-c128b.appspot.com",
    messagingSenderId: "659240130196",
    appId: "1:659240130196:web:3ee5941c1ade0f38f24681",
    measurementId: "G-GVEEG5X9D6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);