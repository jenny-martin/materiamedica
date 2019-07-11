import React from 'react';
import Button from '../Button';

function MateriaPost ({ herbalist, 
    botanical_name,
    common_name, 
    history,
    uses, index, handleDeletePost }) {
        return (
            <li>
                <h3>{herbalist}</h3>
                <h4>{botanical_name}</h4>
                <h4>{common_name}</h4>
                <h4>{history}</h4>
                <h6>{uses}</h6>
                <Button 
                type={"Delete"}
                index={index}
                handleDeletePost = {handleDeletePost} />
            </li>
        )
    }

    export default MateriaPost;