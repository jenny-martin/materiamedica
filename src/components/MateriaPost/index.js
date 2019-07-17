import React from 'react';
import Button from '../Button';
import './MateriaPost.css';

function MateriaPost ({ 
    herbalist, 
    botanical_name,
    common_name, 
    history,
    uses, index, handleDeletePost }) {
        return (
            <div className="card-container">
             <section className="cards">
            <li className="card">
                <h3>Herbalist: {herbalist}</h3>
                <h4>Botanical Name: {botanical_name}</h4>
                <h4>Common Name: {common_name}</h4>
                <h4>History: {history}</h4>
                <h4>Uses: {uses}</h4>
                <Button 
                className="card-button"
                type={"Delete"}
                index={index}
                handleDeletePost = {handleDeletePost} />
            </li>
            </section>
            </div>
        )
    }

    export default MateriaPost;