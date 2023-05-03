import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthService from './Auth.js';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import Login from './LogIn.js';
import Home from './Home.js';

const cookie = new Cookies();

function App() {
  const [isAuth, setAuth] = useState(cookie.get("auth-token"));
  if (!isAuth) {
    return (
      <>
      <div className="App">
    
      <Routes>
        <Route path="/" element={<AuthService />}/>
          
        <Route path="/login" element={<Login />} />
        <Route path="/login/home" element={<Home />} />
          
       
      </Routes>
      </div>
      </>
    );
  }
  else{
    return (
      <>
        <Home></Home>
      </>
    );
  }
}

export default App;
