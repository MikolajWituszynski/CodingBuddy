import React, { useContext } from 'react'
import { useState } from 'react';
import { authContext } from '../../helpers/authContext';
import { useNavigate } from 'react-router-dom';
import {MdArrowDropDown} from 'react-icons/md'
import { auth } from '../../helpers/firebaseConfig';

const DropDown = () => {
    const handleClick = ()=> {
        auth.signOut().then( () =>
        console.log("sign out")
        ).
        catch((error) => console.error(error.message))
    }
    const navigate = useNavigate();
    const loggedIn = useContext(authContext)
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
    
    <button onClick={()=> {setIsExpanded(!isExpanded)}} className="rounded text-white px-2 py-1 bg-gray-500 hover:bg-gray-400"><div className="flex flex-row"><p>Account</p><MdArrowDropDown size="1.5rem" /></div></button>
    {!isExpanded ? 
    (<div className="flex flex-col justify-center items-center w-50" >
        {loggedIn ? (<div className="flex flex-col justify-center items-center border-2">
        <button onClick={()=> navigate("/profile")} className="rounded text-white px-2 py-1  bg-gray-500 hover:bg-gray-400 px-2 py-2 m-2">Profile</button>
        <button onClick={handleClick} className="rounded text-white px-2 py-1  bg-gray-500 hover:bg-gray-400 px-2 py-2 m-2">Logout</button>

        </div>) : (
            <div className=" flex flex-col  border-8  ">
            <button onClick={()=> navigate("/login")} className="rounded text-white px-2 py-1  bg-gray-500 hover:bg-gray-400 px-2 py-2 m-1">Login</button>
            <button onClick={()=> navigate("/register")} className="rounded text-white px-2 py-1  bg-gray-500 hover:bg-gray-400 px-2 py-2 m-2">Register</button>
            </div>
        ) }
        </div>) 
    : (console.log("hide"))}
    </>
  )
}

export default DropDown;