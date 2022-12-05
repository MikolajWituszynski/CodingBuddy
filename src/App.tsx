import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import NavBar from "./components/NavBar/NavBar";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import AccountPage from "./components/AccountPage/AccountPage";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/account" element={<AccountPage/>}/>
    </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
