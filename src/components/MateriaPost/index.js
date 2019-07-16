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
            <li className="cards">
                <h3>Herbalist: {herbalist}</h3>
                <h4>Botanical Name: {botanical_name}</h4>
                <h4>Common Name: {common_name}</h4>
                <h4>History: {history}</h4>
                <h6>Uses: {uses}</h6>
                <Button 
                className="card-button"
                type={"Delete"}
                index={index}
                handleDeletePost = {handleDeletePost} />
            </li>
            </div>
        )
    }

    export default MateriaPost;