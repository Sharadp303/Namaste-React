import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [loginBtn,setLoginBtn]=useState("Login")
  
  const onlineStatus=useOnlineStatus()
  
  return (
    <div className='header'>
        <div className='logo-container'>
            <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Online Status :{onlineStatus ? "✅" : "🔴"}</li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/grocery'>Grocery</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <button className='login' onClick={
                  ()=>{
                  loginBtn==='Login'?setLoginBtn("Logout"):setLoginBtn("Login")
                  }
                }>{loginBtn}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header;