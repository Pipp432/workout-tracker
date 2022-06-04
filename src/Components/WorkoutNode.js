import React from "react";
import Workout from "./Workout";
import Tab from "../UI/Tab";
import "./WorkoutNode.css";
import ActivityGraphic from "../Graphics/ActivityGraphic";

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
				<div className='graphic-activity'>
					<ActivityGraphic details={props.workouts}></ActivityGraphic>
				</div>
			</div>
		</Tab>
	);
};

export default WorkoutNode;
