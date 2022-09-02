import React from 'react';
import classes from './CardProjet.module.css';
import { GoMarkGithub } from "react-icons/go";
const CardProjet=(props)=> {
    return (
        <div className={classes.card}>
            <h3>{props.title}</h3>
            
            <img src={`https://anibal-juarez-website.herokuapp.com/images/${props.img}`} alt={props.text}/>
            
            <div className={classes.layer}>
                <a target="_blank" rel="noopener noreferrer" href={props.link}><GoMarkGithub/> Voir le code</a>
            </div>

            
        </div>
    );
}

export default CardProjet;