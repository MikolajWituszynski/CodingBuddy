import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import { Navigate } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate();
    const handleClickToHomePage = () => navigate('/home');
    const handleClickToRegisterForm = () => navigate('/register');
    return ( 
        <>
        <LoginForm/>
        <div>Do not have an account ?</div>
        <button onClick={(handleClickToRegisterForm)}>Register</button>
        </>
    )
};
export default LoginPage;