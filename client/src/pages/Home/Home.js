import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import './Home.css'
const Home = ({ logout }) => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData.user) navigate("/login");
    }, [userData.user, navigate]);
    return (
        <div className='homePage'>
            <div className='flex'>
            <button className='qun-btn'>Ask Question</button>
            <h1>WelCome {userData.user?.display_name}</h1>
            </div>
            
            <div className='flex'>
               <h2>Qustions</h2>
            </div>

            <div>

            </div>

            {/* logout when the button clicked in which the function comes from app.js */}
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Home