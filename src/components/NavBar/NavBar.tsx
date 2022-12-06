import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css'

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";
import { UserObj } from "../../helpers/interfaces";
const NavBar = () => {
    // Set an initializing state whilst Firebase connects
  

    const navigate = useNavigate();
    const handleClickToLoginPage = () => navigate('/login');
    const handleClickToRegisterPage = () => navigate('/register');
    const handleClickToHomePage = () => navigate('/home');
    const handleClickToNewsPage = () => navigate('/news');

    return ( 
        <>
        <nav className={styles.navbar}>
            <h1 onClick={handleClickToHomePage} className={styles.titleHomePage}>CodingBuddy</h1>
            
            <div>
            <button onClick={handleClickToNewsPage} className={styles.button}>News</button>
            <button onClick={handleClickToLoginPage} className={styles.button}>Login</button>
            <button onClick={handleClickToRegisterPage} className={styles.button}>Register</button>
            </div>
        </nav>
        </>
    )
    }
export default NavBar;