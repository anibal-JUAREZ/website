import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classes from './Form.module.css';

const Formulario = () => {
	
	const [formSent, setFormSent]=useState(false)
	

	return (
		<>
            
			<Formik 
				initialValues={{
					email:"",
					message:""
					
				}}
				validate={(values)=>{
					let errores={};
					//validacion message 
					if(!values.message){
						errores.message = 'Merci de saisir un message';
					}
					//validacion email 

					if(!values.email){
						errores.email = 'Merci de saisir un e-mail';
					}else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
						errores.email = 'E-mail non valide';
					}
					return errores;
				}}
				onSubmit={(values, {resetForm})=>{
					console.log(values);
					fetch('http://localhost:4000/messages/add',{
						method:'POST',
						headers: {'Content-Type':'application/json'},
						body:JSON.stringify(values)
					})
					.then((response)=>response.json())
					.then((data)=>{
						if(data==="message added"){
						resetForm();
						setFormSent(true);
						setTimeout(()=>setFormSent(false),5000);
						}
					})
					
				}}
			>
				{/* {({values, handleSubmit, handleChange, handleBlur, errors, touched})=>( */}
				{({errors})=>(
						<Form className={classes.formulario}> 
						<div>
							<label htmlFor='email'>E-mail</label>
							<Field
							type="text" 
							id="email" 
							name ="email" 
							placeholder='mail@mail.com' 
							/>
							<ErrorMessage name="email" component={()=>(<div className={classes.error}>{errors.email}</div>)}/>
						
						</div>
						<div>
							<label htmlFor='message'>Message</label>
							<Field as ="textarea"
							
							id="message" 
							name ="message" 
							placeholder='Laisser votre message' 
							/>
							<ErrorMessage name="message" component={()=>(<div className={classes.error}>{errors.message}</div>)}/>
							
						</div>
						
						<button type="submit">Envoyer</button>
						{formSent && <p className={classes.exito}>Message Envoyé</p>}
		
					</Form>
				)}
			
			</Formik>
		</>
	);
}
 
export default Formulario;