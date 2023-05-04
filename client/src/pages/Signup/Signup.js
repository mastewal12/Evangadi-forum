import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import './Signup.css'

const SignUp = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    
    //importing global state from context
    const [userData, setUserData] = useContext(UserContext);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //sending data to be registered in database
            await axios.post('http://localhost:4000/api/users', form);

            //once registered the login automatically so send the new user info to be logged in
            const loginRes = await axios.post('http://localhost:4000/api/users/login', {
                email: form.email,
                password: form.password
            });

            // set the global state with the new user info
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });

            //set localStorage with the token
            localStorage.setItem('auth-token', loginRes.data.token);

            //navigate to homepage once the user is signed up
            navigate("/");
        } catch (error) {
            console.log('problem ==>', error.response.data.msg);
        }
    }
    return (
        <div className="signup">
            <div>
                <p>Join the network</p>
            </div>

            <div className="create_acct">
            <span>Already have an account?</span> <Link to="/login" className='link_item'>Sign in</Link>
            </div>

           
            <form onSubmit={handleSubmit} className="signup_form">
           
                <input
                      className='input_holder'
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                /><br />
               
           <div className="name_input">
                <input
                  className='input_form input-form'
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                />
              
                <input
                    className='input_form'
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                /><br />
             </div>
                <input
                  className='input_holder'
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    onChange={handleChange}
                /><br />
                <input
                  className='input_holder'
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                /><br />

                <button className="btn">Agree and Join</button>
            </form>
            <p>I agreeto the <a href="https://www.evangadi.com/legal/privacy/">privacy policy</a> and <a  href="https://www.evangadi.com/legal/terms/">terms of service </a> </p>
           

            <Link to="/login" className="link_item">Already have an account?</Link>
        </div>
    );
};

export default SignUp;
