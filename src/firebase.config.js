import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// async function createUser() {
//     try {
//       const user = { name: "John Doe", age: 30 };
//       const usersRef = collection(db, "users");
//       const docRef = await addDoc(usersRef, user);
//       console.log("Documento creado con ID:", docRef.id);
//     } catch (e) {
//       console.error("Error al crear el documento:", e);
//     }
//   }

// createUser()