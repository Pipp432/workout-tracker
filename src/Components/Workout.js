import React from "react";
import "./Workout.css";
const Workout = (props) => {
	return (
		<div className='workout'>
			<div>{props.details.activity}</div>
			<div>{props.details.duration}</div>
			<div>{props.details.intensity}</div>
		</div>
	);
};

export default Workout;
