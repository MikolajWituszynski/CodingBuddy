import React from "react";
import styles from '../../index.module.css'
import { useForm } from "react-hook-form";
import { auth } from "../../helpers/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginFormData } from "../../helpers/interfaces";
const LoginForm = () => {
    const { register, handleSubmit } = useForm<LoginFormData>();

    const submitHandler = ({email, password}: LoginFormData) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(()=> console.log("Success"))
        .catch((err) => console.error(err.messsage));
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
        <button type="submit" >login</button>
       </form>
        </>
    )
};
export default LoginForm;