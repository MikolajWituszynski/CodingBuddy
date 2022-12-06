import React, {useContext} from "react";
import "./App.css";
import NewsPage from "./components/NewsPage/NewsPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import NavBar from "./components/NavBar/NavBar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {useState} from "react";
import {authContext} from "./helpers/authContext"

function App() {
 
  const [loggedIn, setLoggedIn] = useState(false);
  onAuthStateChanged(auth,(user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false)
    }
  });
 

  return (
    <div className="App">
    <authContext.Provider value={loggedIn}>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/news" element={<NewsPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
    </authContext.Provider>
      
    </div>
  );
}

export default App;
