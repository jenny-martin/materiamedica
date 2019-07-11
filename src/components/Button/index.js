
import React from 'react'


function Button({ handleClick, handleDeletePost, index, type }) {
	if (handleClick) {
		return <button onClick={handleClick}>{type}</button>
	} else {
		return <button onClick={() => handleDeletePost(index)}>{type}</button>
	}
}

export default Button;