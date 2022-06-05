import React from "react";
import Workout from "./Workout";
import Tab from "../UI/Tab";
import "./WorkoutNode.css";
import { useState } from "react";

import IntensityGraphic from "../Graphics/IntensityGraphic";

const WorkoutNode = (props) => {
	const [openTab, setOpenTab] = useState(true);
	const openDetail = () => {
		setOpenTab(false);
	};
	const closeDetail = () => {
		setOpenTab(true);
	};
	if (!openTab) {
		return (
			<div className='wrapper'>
				<Tab>
					<div className='row'>
						<div className='workout-list-open' onClick={closeDetail}>
							<Workout details={props.workouts}></Workout>
						</div>
						<div className='graphic'>
							<IntensityGraphic details={props.workouts}></IntensityGraphic>
						</div>
						<div className='graphic-activity'></div>
					</div>
				</Tab>
			</div>
		);
	} else {
		return (
			<div>
				<div className='workout-list' onClick={openDetail}>
					<Workout details={props.workouts}></Workout>
				</div>
			</div>
		);
	}
};

export default WorkoutNode;
