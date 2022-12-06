import React from "react";
import styles from './LoginForm.module.css'
import { useForm } from "react-hook-form";
import { auth } from "../../helpers/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginFormData } from "../../helpers/interfaces";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const { register, handleSubmit } = useForm<LoginFormData>();

    const submitHandler = ({email, password}: LoginFormData) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(()=> console.log("Logged in succesfully"))
        .catch((err) => alert(err.message));
    }
    return ( 
        <>
       <h1>Login</h1>
       <form onSubmit ={(handleSubmit(submitHandler))}className={styles.form}>
        <label className={styles.labelLogin}>Username
        <input {...register("email",{required: true})} type="text" id="login-username"/>
        </label>
        <label>Password
        <input {...register("password",{required: true})} type="password" id="login-password"/>
        </label>
        <button type="submit" className={styles.button}>login</button>
       </form>
        </>
    )
};
export default LoginForm;