import React, { useState } from "react";
import ReactDOM from "react-dom";
import './login.css';
import './App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth, provider} from "./Firebase.js";
import { useNavigate } from "react-router-dom";

const LogIn =()=>{
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin=()=>{
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        
        const user = userCredential.user;
        // ...
        alert("You have successfully logged in");
        navigate("/login/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert("Please enter correct email id and password");
        
      });
        
   }


     return(
          <>
            <div className='h-screen w-full background-theme grid grid-rows-6 gap-11'>
                  <input type="email" placeholder="Enter your email address" onChange={(event)=>setEmail(event.target.value)}></input>
                  <input type="password" placeholder="Enter your password" onChange={(event)=>setPassword(event.target.value)}></input>
                  <button onClick={handleLogin} className='p-9 bg-green-800'>LOGIN</button>
            </div>
          </>
     );
}
export default LogIn;