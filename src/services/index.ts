import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8-kggW_LvEw4PSOfVg8EVaeCIXOGH2Pc",
  authDomain: "webcarros-f744a.firebaseapp.com",
  projectId: "webcarros-f744a",
  storageBucket: "webcarros-f744a.appspot.com",
  messagingSenderId: "252701356559",
  appId: "1:252701356559:web:1168e1c022a26ab8e5e97a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {db, auth, storage}