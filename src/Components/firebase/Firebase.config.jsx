 
  
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyBRNsi5d96DaU9TUeA0WkVrQ7rT6lpV1LM",
  authDomain: "assignmant-10-bda66.firebaseapp.com",
  projectId: "assignmant-10-bda66",
  storageBucket: "assignmant-10-bda66.appspot.com",
  messagingSenderId: "869809882503",
  appId: "1:869809882503:web:a234b6125c54949de77f22",
  measurementId: "G-RBKCKWK58T"
};

 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);