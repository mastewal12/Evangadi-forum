import axios from 'axios';
import './Login.css'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Login = () => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            //sending user data to database to be logged in
            const loginRes = await axios.post('http://localhost:4000/api/users/login',
                {
                    email: form.email,
                    password: form.password
                });
            
            //update global state with response from backend(user-info)
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });

            //set localStorage with the token
            localStorage.setItem('auth-token', loginRes.data.token);

            //navigate user to homepage
            navigate('/');
        } catch (err) {
            console.log('problem', err.response.data.msg);
            alert(err.response.data.msg);
        }
    }

    useEffect(() => {
        if (userData.user) navigate('/');
    }, [userData.user, navigate]);

    return (
        <div className='login'>
            <div className='header_title'>
            <p>Login to your account</p>
            </div>

            <div className='create_acct'>
               
                <small >Don't have an account?</small> <Link to="/signup" className='link_item'>Create a new account</Link>
               
            </div>
           

            <form onSubmit={handleSubmit}>
               
                <input
                    className='input_holder'
                    type="text"
                    name="email"
                    placeholder='Your Email'
                    onChange={handleChange}
                /><br />
              
                <input
                    className='input_holder'
                    type="password"
                    name="password"
                    placeholder='Your Password'
                    onChange={handleChange}
                /><br />
              
                <button>submit</button>
            
               
            </form>
            <Link to="/signup" className='link_item'>Create an account?</Link>
        </div>
    )
}

export default Login