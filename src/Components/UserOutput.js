import React from "react";
import UserOutput from "./UserOutput.css";

const userOutput = (props)  => {

	return(
		<div className="output__wrap">
			<p>Первая причина - это {props.nameOne}</p>
			<p>Вторая причина - это {props.nameTwo}</p>
			<p>{props.children}	</p>

			<p>Третяя причина - это {props.age}</p>
			<p>Четвертая причина - это {props.gender}</p>
		</div>
	)
}

export default userOutput;