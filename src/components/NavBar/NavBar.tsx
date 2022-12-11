import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css'

import React, { useState, useEffect,useContext } from 'react';
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";
import { UserObj } from "../../helpers/interfaces";
import {authContext} from "../../helpers/authContext";
import DropDown from '../DropDown/DropDown';

const NavBar = () => {
    // Set an initializing state whilst Firebase connects
    const loggedIn = useContext(authContext)

    const navigate = useNavigate();
    const handleClickToLoginPage = () => navigate('/login');
    
    const handleClickToHomePage = () => navigate('/home');
    const handleClickToNewsPage = () => navigate('/news');

    return ( 
        <>
        <nav className={styles.navbar}>
            
            <h1 onClick={handleClickToHomePage} className={styles.titleHomePage}>CodingBuddy</h1>
            <div>
                <div className='m-2'>
                <DropDown/>
                </div>
            
        
            </div>
        </nav>
        </>
    )
    }
export default NavBar;