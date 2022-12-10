import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../../index.module.css'
const NavBar: React.FC<{}> = () => {
    const navigate = useNavigate();
    const handleClickToAccountPage = () => navigate('/account')
    const handleClickToLoginPage = () => navigate('/login');
    const handleClickToRegisterPage = () => navigate('/register');
    return ( 
        <>
        <nav className={styles.navbar}>
            <h1 className={styles.titleHomePage}>CodingBuddy</h1>
            <div>
            <button onClick={handleClickToAccountPage} className={styles.loginRegisterButton}>Your Account</button>
            <button onClick={handleClickToLoginPage} className={styles.loginRegisterButton}>Login</button>
            <button onClick={handleClickToRegisterPage} className={styles.loginRegisterButton}>Register</button>
            </div>
        </nav>
        </>
    )
    }
export default NavBar;