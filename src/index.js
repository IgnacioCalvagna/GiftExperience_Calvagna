import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import CartProvider from "./contexts/CartProvider";



import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYyyKRyrLp7T73g5kgmzqLd8xEopW1t_A",
  authDomain: "gift-experience-877b9.firebaseapp.com",
  projectId: "gift-experience-877b9",
  storageBucket: "gift-experience-877b9.appspot.com",
  messagingSenderId: "685966271534",
  appId: "1:685966271534:web:ff4a11e9ee0237ccb8abbf"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
