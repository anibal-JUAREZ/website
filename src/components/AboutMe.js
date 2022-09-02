import React from 'react';
import pdf from '../pdf/CVANIBALJUAREZ.pdf'


import classes from './AboutMe.module.css';
const AboutMe=() =>{

    return (
        <div className={classes.about_me}>
            <div className={classes.information}>
                <p>Je m'appelle</p>
                <h1>Anibal Juarez</h1>
                <p>Je suis</p>
                <p className={classes.title}>Développeur Web</p>
                <button><a href={pdf} target="_blank" rel="noopener noreferrer">Voir CV</a></button>
            </div>
            
            
        </div>
    );
}

export default AboutMe;