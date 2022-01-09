import React, { useContext } from "react";
// import "./Login.css";
import styles from "./Login.module.css"
import google_logo from "../assets/img/google.png";
// import { Context } from "../index";


export default function Login() {
  // const {auth}=useContext(Context);
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        {/* <div className={styles.btn}> */}
        <img className={styles.img} src={google_logo} alt="google_logo" />
        <p className={styles.text}>Войти с помощью Google</p>
      </button>
      {/* </div> */}
    </div>
  );
}
