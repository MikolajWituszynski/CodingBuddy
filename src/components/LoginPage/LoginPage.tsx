import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate();
    const handleClickToHomePage = () => navigate('/home');
    return ( 
        <>
        <LoginForm/>
        </>
    )
};
export default LoginPage;