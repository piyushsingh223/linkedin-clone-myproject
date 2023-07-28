import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBVyPKww9mp9jv4DtLdXFhN6TDWwRCkYp8",
    authDomain: "linkedin-clone-piyush.firebaseapp.com",
    projectId: "linkedin-clone-piyush",
    storageBucket: "linkedin-clone-piyush.appspot.com",
    messagingSenderId: "648795865072",
    appId: "1:648795865072:web:48cbc3dc1c234cc444a735"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  const auth = firebase.auth();

  export { database, auth}