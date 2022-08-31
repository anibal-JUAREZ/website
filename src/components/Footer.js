import React from 'react';
import { IconContext } from "react-icons";
import {AiFillLinkedin} from "react-icons/ai";

import  './Footer.css'
const Footer=(props) =>{
    return (
        <footer className="footer">
            <h3>Anibal Juarez</h3>
            <h2>Developpeur Web</h2>
            <IconContext.Provider value={{className:"icons"}}>
            <a className= "icons" href="https://www.linkedin.com/in/anibal-juarez" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin/>
            </a> 
            </IconContext.Provider>
            
        </footer>
    );
}

export default Footer;