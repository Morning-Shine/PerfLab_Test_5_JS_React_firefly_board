import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

function App() {
  // const isLoading = useSelector(state => state.loading.isLoading);
  // console.log("isLoading", isLoading);
  const currentUser = useSelector(state => state.user.id);
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  let render;
  loading
    ? // isLoading
      (render = (
        <div className="AppLoader">
          <Loader />
        </div>
      ))
    : (render = (
        <div className="App">
          <AppRouter />
        </div>
      ));

  return render;
}

export default App;
