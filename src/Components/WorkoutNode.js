import React from "react";
import Workout from "./Workout";
import Tab from "../UI/Tab";
import "./WorkoutNode.css";
import IntensityGraphic from "../Graphics/IntensityGraphic";

const WorkoutNode = (props) => {
	return (
		<Tab>
			<div className='row'>
				<div className='workout-list'>
					<Workout details={props.workouts}></Workout>
				</div>
				<div className='graphic'>
					<IntensityGraphic details={props.workouts}></IntensityGraphic>
				</div>
			</div>
		</Tab>
	);
};

export default WorkoutNode;
