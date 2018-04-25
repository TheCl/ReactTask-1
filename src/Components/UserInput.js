import React from "react";
import UserInput from "./UserInput.css"

const userInput = (props)  => {

	return(
		<div className="person__input-wrapper">
			<input className="person__input" type="text" onChange={props.change} 
							                             value={props.nameOne}/>		
		</div>
	)
}

export default userInput;