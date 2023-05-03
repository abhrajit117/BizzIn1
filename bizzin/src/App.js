import './App.css';
import AuthService from './Auth.js';
import Cookies from 'universal-cookie';
import { useState } from 'react';

const cookie = new Cookies();

function App() {
  const [isAuth, setAuth] = useState(cookie.get("auth-token"));
  if (!isAuth) {
    return (
      <>
      <div className="App">
          <AuthService></AuthService>
      </div>
      </>
    );
  }
  else{
    return (
      <>
        <section className='h-screen background-theme w-full grid grid-rows-6'>
             <h1 className='app-header font-extrabold text-8xl'>BizzIn</h1>
        </section>
      </>
    );
  }
}

export default App;
