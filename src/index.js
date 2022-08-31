import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Information from './components/Information';
import Projets from './components/Projets';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<AboutMe/>}/>
                <Route path="/aboutme" element={<Information/>}/>
                <Route path="/project" element={<Projets/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
            
        </Routes>
       
    </Router>
    
  
);


