import React from "react";
import styles from "./ButtonAuth.module.css";
import google_logo from "../assets/img/google.png";
import { app } from "../firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";



export default function ButtonAuth() {
  const dispatch = useDispatch();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        dispatch(
          setUser({
            name: result.user.displayName,
            id: result.user.uid,
            avatar: result.user.photoURL,
          })
        );
      })
      .catch(error => {
        console.log("ошибка!", error); //TODO
      });
  };

  return (
    <button className={styles.btn} onClick={handleLogin}>
      <img className={styles.img} src={google_logo} alt="google_logo" />
      <p className={styles.text}>Войти с помощью Google</p>
    </button>
  );
}
