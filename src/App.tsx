import React, {useContext, useEffect,useState} from "react";
import "./App.css";
import NewsPage from "./components/NewsPage/NewsPage";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {authContext} from "./helpers/authContext"
import firebase from 'firebase/app';
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ProfilePage from "./components/Profile/ProfilePage";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });
 
  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={loggedIn}>
          <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </authContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
