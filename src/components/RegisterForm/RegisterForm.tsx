import React from "react";
import styles from '../LoginForm/LoginForm.module.css'
import { useForm } from "react-hook-form";
import { auth } from "../../helpers/firebaseConfig";
import { RegisterFormData } from "../../helpers/interfaces";
import { FirebaseError } from "firebase/app";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
const RegisterForm = () => {
    const { register, handleSubmit } = useForm<RegisterFormData>();
     // 1. Zarejestrować resztę inputów (nadaj im nazwy rejestracyjne password i password2), zaktualizuj odpowiednio interface RegisterFormData
  // W submitHandler:
  // 2. Sprawdz czy password jest równy password2 (zrób to ifem)
  // 3. Jeżeli password jest password2, wywołaj funkcję createUserWithEmailAndPassword z odpowiednimi argumentami.
  // 4. Na funkcję createUser... dodaj thena w którym wykonaj console.log('Successfully registered') oraz catcha z console.log(err.message)
  
  // data to obiekt który zawiera pary klucz:wartosc (nazwaRejestracyjnaInputu:wartoscInputuPrzySubmit)
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
        <label className={styles.label}>Username
        <input {...register("email",{required: true})}  type="text" id="login-username"/>
        </label>
        <label className={styles.label}>Password
        <input {...register("password",{required: true})} type="password" id="login-password"/>
        </label>
        <label className={styles.label}>Password
        <input {...register("password2",{required: true})} type="password" id="login-password"/>
        </label>
        <button className={styles.button}>register</button>
       </form>
        </>
    )
};
export default RegisterForm;