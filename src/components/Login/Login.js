import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FontAwesomeIcon , } from '@fortawesome/react-fontawesome'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');  
    const [
        signInWithEmailAndPassword,
        user,
        loading
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate()
      const location = useLocation(auth)
      const from = location.state?.form?.pathname || '/';

    const hendleEmail = event =>{
        setEmail(event.target.value)
    }
    const hendlePassword = event =>{
        setPassword(event.target.value)
    }
    const hendleSubmit = event =>{
        event.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    if(user){
        navigate(from,{replace:true})
    }
    return (
        <div className='form-container'>
                <h2 className='form-title'>LogIn</h2>
                <form onSubmit={hendleSubmit}>
                    <div className='group-input'>
                        <span className='level'>Email</span>
                        <input onBlur={hendleEmail} className='' type='email' required></input>
                    </div>
                    <div className='group-input'>
                        <span className='level'>Password</span>
                        <input onBlur={hendlePassword} className='' type='password' required></input>
                    </div>
                    <input type='submit' className='submite-button'></input>
                </form>
                <p style={{marginTop:'8px'}}>New to Ema-zon? <Link to='/signup'>please signUp</Link></p>
                <div className='or-section'>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <button className='google-button'><FontAwesomeIcon icon="fa-brands fa-google" />Google</button>
        </div>
    );
};

export default Login;