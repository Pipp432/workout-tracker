import React from "react";
import "./Workout.css";
import ActivityGraphic from "../Graphics/ActivityGraphic";
const Workout = (props) => {
	return (
		<div className='workout'>
			<ActivityGraphic details={props.details}></ActivityGraphic>
		</div>
	);
};

export default Workout;
