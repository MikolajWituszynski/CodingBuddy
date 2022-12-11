import React from "react";
import styles from './RegisterForm.module.css'
import { useForm } from "react-hook-form";
import { auth } from "../../helpers/firebaseConfig";
import { RegisterFormData } from "../../helpers/interfaces";
import { FirebaseError } from "firebase/app";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
const RegisterForm = () => {
    const { register, handleSubmit } = useForm<RegisterFormData>();
    
  const submitHandler = ({email, password, password2}:RegisterFormData) => {
    if(password === password2) {
        createUserWithEmailAndPassword(auth, email, password)
        .then(()=>console.log("User Succesfully created"))
        .catch((err)=>console.error(err.message));
    }

    
    }
    return ( 
        <>
       <h1>Register</h1>
       <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <label className={styles.labelRegister}>Username
        <input {...register("email",{required: true})}  type="text" id="login-username"/>
        </label>
        <label>Password
        <input {...register("password",{required: true})} type="password" id="login-password"/>
        </label>
        <label>Password
        <input {...register("password2",{required: true})} type="password" id="login-password"/>
        </label>
        <button className={styles.button}>register</button>
       </form>
       
        </>
    )
};
export default RegisterForm;