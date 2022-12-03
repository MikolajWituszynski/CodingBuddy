import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css'
const NavBar: React.FC<{}> = () => {
    const navigate = useNavigate();
    const handleClickToLoginPage = () => navigate('/login');
    const handleClickToRegisterPage = () => navigate('/register');
    return ( 
        <>
        <nav className={styles.navbar}>
            <h1 className={styles.titleHomePage}>CodingBuddy</h1>
            <div>
            <button onClick={handleClickToLoginPage} className={styles.loginRegisterButton}>Login</button>
            <button onClick={handleClickToRegisterPage} className={styles.loginRegisterButton}>Register</button>
            </div>
        </nav>
        </>
    )
    }
export default NavBar;