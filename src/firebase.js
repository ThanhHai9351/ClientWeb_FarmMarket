import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCKKx4O3q87Yb8KmNT_VaBVX31I2y2nIBg",
  authDomain: "farmmarket-ac93a.firebaseapp.com",
  projectId: "farmmarket-ac93a",
  storageBucket: "farmmarket-ac93a.appspot.com",
  messagingSenderId: "791903462984",
  appId: "1:791903462984:web:8d89d3a273cef46f199a7d",
  measurementId: "G-E7RDR64V9N",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
