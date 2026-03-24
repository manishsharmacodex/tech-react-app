import React, { useContext, useState } from 'react'
import './Navbar.css'
import { WebContext } from '../../context/WebContext'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const {logo} = useContext(WebContext);
    const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <h1 className='logo'>{logo}</h1>
        <ul className="navbar-menu">
            <Link to={"/"}><li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li></Link>
            <Link to={"/tech"}><li onClick={()=>setMenu("tech")} className={menu==="tech"?"active":""}>Tech</li></Link>
            <li onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}>About Us</li>
            <li onClick={()=>setMenu("services")} className={menu==="services"?"active":""}>Services</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <div className="search-box">
                <input type="search" placeholder='Search Here ( Ctrl + K )' />
                <button>search</button>
            </div>
            <button className='cart-icon'>Get App</button>
            <button className='btn'>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
