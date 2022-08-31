import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import  './NavBar.css';
const NavBar=()=> {

    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = () =>{
        active==="nav__menu" ? setActive("nav__menu nav__active") : setActive("nav__menu");  
        //togglerIcon

        toggleIcon ==="nav__toggler" ?  setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler");
    }
    return (
        
           
           <nav className="nav">

                <Link to='/' className="nav__brand">ajuarez</Link>
                <ul className={active}>
                    <li className="nav__item">
                        <Link to='/' className="nav__link">accueil</Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/aboutme' className="nav__link">a propos de moi</Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/project' className="nav__link">projets</Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/contact' className="nav__link">contact</Link>
                    </li>
                </ul>
                <div onClick = {navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>

                </div>
                    
                        
                    
                        
                   
                    

                   
           </nav>

     
    );
}

export default NavBar;