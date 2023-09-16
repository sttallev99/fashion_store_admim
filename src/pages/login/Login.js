import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { login } from '../../redux/apiCalls';

import './login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});

    };
    
    return (
        <div className='login'>
        <div className='loginFormWrapper'>
            <form className='loginForm'>
                <h1 className='loginFormTitle'>FASHION STORE <span>Admin panel</span></h1>
                <div className='loginFormField'>
                    <input type='text' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className='loginFormField'>
                    <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleClick}>SIGN IN</button>
            </form>
            <p className='forgotPass'>Forgot your password? <a>Ask for reset.</a></p>
        </div>
        </div>
    )
}

export default Login
