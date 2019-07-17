import React from 'react';
import './About.css';
import NavBar from '../../components/NavBar/NavBar';

function About() {
return (
    <div>
        <NavBar />
        <h1>What is a Materia Medica?</h1>
        <img src="https://i.imgur.com/PDE4QLX.jpg" style={{ height: "75%", width: "75%"}}alt=""/>
        <p>The phrase "Materia Medica" originates from Latin and can be literally translated as "Healing Materials."</p>
        <p>Each Herbalist, whether new or experienced practitioner in the community has their own unique Materia Medica, and although many have common components and themes, each herbalist experiences herbs differently.</p>

        <p>Think of this as a sort of herbal dictionary, but with practical applications that other herbalists can learn from in a shared space.</p>
        <p>The intention of this application is to bring herbalists together to share their knowledge base in an effort to cultivate a place where it's easy to learn from others' experiences as a community.</p>
        
        <img src="https://i.imgur.com/zRuoqmL.jpg" style={{ height: "75%", width: "75%"}}alt=""/>
        
        
    </div>
)

}

export default About;