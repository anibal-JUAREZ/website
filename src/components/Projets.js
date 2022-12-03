import React, {useEffect, useState} from 'react';
import classes from './Projets.module.css';
import Title from './Title';
import CardProjet from './CardProjet';

const Projets=()=> {
    const [allProjects, setAllProjects]=useState([])
    useEffect(()=>{
        fetch('/projects.json')
        .then((response)=>response.json())
        .then((data)=>setAllProjects(data))
    },[])


   
   
    return (
        <div className={classes.projets} id="projects">
            <Title title="Projets"/>
            <div className={classes.list_projets}>

                {allProjects.length !== 0? allProjects.map((oneProject)=>(
                    <CardProjet key={oneProject.id} title={oneProject.title} img={oneProject.image} link={oneProject.link} text={oneProject.texte}/>
                )):(<div className={classes.load}>chargement en cours...</div>)}
                
            </div>
            
        </div>
    );
}

export default Projets;
