import React, { useState } from "react";
import ReactDOM from "react-dom";
import './login.css';
import './App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth, provider} from "./Firebase.js";

const LogIn =()=>{

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin=()=>{
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        alert("You have successfully logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
        
   }


     return(
          <>
            <div className='h-screen w-full background-theme grid grid-rows-6'>
                  <input type="email" placeholder="Enter your email address" onChange={(event)=>setEmail(event.target.value)}></input>
                  <input type="password" placeholder="Enter your password" onChange={(event)=>setPassword(event.target.value)}></input>
                  <button onClick={handleLogin}>LOGIN</button>
            </div>
          </>
     );
}
export default LogIn;