import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBpgbbkgmAOyYkIvqV_8B_wlytVYR2fi3E",
    authDomain: "login-signup-21baf.firebaseapp.com",
    projectId: "login-signup-21baf",
    storageBucket: "login-signup-21baf.appspot.com",
    messagingSenderId: "266711013496",
    appId: "1:266711013496:web:c2877aadded0bd4689358d",
    databaseURL:"https://login-signup-21baf-default-rtdb.firebaseio.com",
  }


export const app = initializeApp(firebaseConfig);

// const database = getDatabase(app);