import {auth, provider} from './Firebase.js';
import { getAuth, signInWithPopup } from 'firebase/auth';
import Cookies from "universal-cookie";
import { useState } from 'react';
import './Auth.css';
import './App.css';
import LogIn from './LogIn.js';

const cookies = new Cookies();

function Auth(props){
   
    const googleSignUp = async()=>{
         const result =  await signInWithPopup(auth, provider);
         cookies.set("auth-token",result.user.refreshToken);
         console.log(result);
         /*
         
         The code you provided is using the await keyword to call the signinwithpopup() function with two arguments: auth and provider. The function likely authenticates a user with a third-party provider using a popup window.

The await keyword is used with a function that returns a promise. It waits for the promise to resolve or reject before continuing the execution of the code. In this case, the signinwithpopup() function is likely an asynchronous function that returns a promise. The const result variable will be assigned the resolved value of the promise returned by the signinwithpopup() function.

Without more context or information about the specific auth and provider variables and the signinwithpopup() function, it is difficult to provide a more detailed explanation.
         
         */
    }
   
    return(   
       <>
        <div className='background-theme h-screen w-full grid grid-rows-6 gap-11'>
             <button className='text-4xl p-11 border-black bg-green-800 text-white w-96' >LOGIN</button>
            <button onClick={googleSignUp} className='text-4xl p-11 border-black bg-green-800 text-white w-96'>Continue With Google</button>
        </div>
       </> 
       ); 
   

}

export default Auth ;