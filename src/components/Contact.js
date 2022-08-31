import React from 'react';
import Title from './Title';
import Form from './Form';
import classes from './Contact.module.css';
import Footer from './Footer'
const Contact = (props) => {
    return (
        <div id="contact">
            <Title title="Contactez-moi"/>
            <div className={classes.contenedor}>
                <Form/>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;