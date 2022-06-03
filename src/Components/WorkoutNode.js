import React from "react";
import Workout from "./Workout";
import Tab from "../UI/Tab";
import "./WorkoutNode.css";
const WorkoutNode = (props) => {
	return (
		<Tab>
			<div className='workout-list'>
				<Workout details={props.workouts}></Workout>
			</div>
		</Tab>
	);
};

export default WorkoutNode;
