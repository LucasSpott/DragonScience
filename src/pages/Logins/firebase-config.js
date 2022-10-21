import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC4eRibYeAxdIAG7mzws-FSMC4x4NwECOk",
  authDomain: "dragon-science.firebaseapp.com",
  projectId: "dragon-science",
  storageBucket: "dragon-science.appspot.com",
  messagingSenderId: "693247150325",
  appId: "1:693247150325:web:4d709e1fea1ff9f1481dbc",
  measurementId: "G-NE2VS48JDK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);