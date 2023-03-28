
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getAuth} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBcprnNezd6g09aPa1Vba9TahWWyVVtNoc",
    authDomain: "composta-7d258.firebaseapp.com",
    projectId: "composta-7d258",
    storageBucket: "composta-7d258.appspot.com",
    messagingSenderId: "845247577773",
    appId: "1:845247577773:web:f755a74b6688b88d599024"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)