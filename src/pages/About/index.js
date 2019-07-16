import React from 'react';
import './About.css';
import NavBar from '../../components/NavBar/NavBar';

function About() {
return (
    <div>
        <NavBar />
        <h1>What is a Materia Medica?</h1>
        <img src="https://i.imgur.com/PDE4QLX.jpg" style={{ height: "50%", width: "50%"}}alt=""/>
        <p>Stuff about what a Materia Medica is goes here. <br></br>Stuff about what a Materia Medica is goes here.</p>
        <img src="https://i.imgur.com/zRuoqmL.jpg" style={{ height: "50%", width: "50%"}}alt=""/>
        <p>Stuff about what a Materia Medica is goes here. <br></br>Stuff about what a Materia Medica is goes here.
        <br></br>Stuff about what a Materia Medica is goes here.
        <br></br>Stuff about what a Materia Medica is goes here.
        <br></br>Stuff about what a Materia Medica is goes here.
        <br></br>Stuff about what a Materia Medica is goes here.</p>
    </div>
)

}

export default About;