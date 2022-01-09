import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// https://firebase.google.com/docs/auth/web/start почитать! 9 версия отличается от видео

// const app = initializeApp({
//   apiKey: "AIzaSyBVfDFTI6cEyHwpPCxwRVT40ZFVTZyIhRc",
//   authDomain: "taskboard-e1c00.firebaseapp.com",
//   projectId: "taskboard-e1c00",
//   storageBucket: "taskboard-e1c00.appspot.com",
//   messagingSenderId: "483191536510",
//   appId: "1:483191536510:web:f10f8c5090124332a5512f",
//   measurementId: "G-7DPZH8S6XH",
// });

// export const Context = createContext(null);

// const auth = firebase.auth();
// const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Context.Provider value={{
        firebase,
        auth,
        firestore
      }}> */}
        <App />
      {/* </Context.Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
