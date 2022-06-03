import Card from "../UI/Card";
import "./AddWorkout.css";
import { useState } from "react";

const AddWorkout = (props) => {
	let key = 2;
	const [activity, setActivity] = useState("");
	const [duration, setDuration] = useState("");
	const [intensity, setIntensity] = useState("");
	const [open, setOpen] = useState(false);

	const handleChangeActivity = (e) => {
		setActivity(e.target.value);
	};
	const handleChangeIntensity = (e) => {
		setIntensity(e.target.value);
	};
	const handleChangeDuration = (e) => {
		setDuration(e.target.value);
	};
	const addData = function () {
		props.enterData({
			id: key.toString(),
			activity: activity,
			duration: duration,
			intensity: intensity,
		});
		key++;
		setOpen(false);
		setActivity("");
		setDuration("");
		setIntensity("");
	};
	const openPromptHandler = () => {
		setOpen(true);
	};
	const closeButtonHandler = () => {
		setOpen(false);
		setActivity("");
		setDuration("");
		setIntensity("");
	};
	if (!open) {
		return (
			<div>
				<Card>
					<button className='button-open' onClick={openPromptHandler}>
						Add Workout
					</button>
				</Card>
			</div>
		);
	}
	if (open) {
		return (
			<div>
				<Card>
					<h1 className='head-text'>Add Workout</h1>
					<div className='inputForm'>
						<label htmlFor='activityInput'>Enter Activity </label>
						<input
							type='text'
							id='activityInput'
							value={activity}
							onChange={handleChangeActivity}
						></input>
						<br />

						<label htmlFor='activityInput'>Enter Duration </label>
						<input
							type='text'
							id='activityInput'
							value={duration}
							onChange={handleChangeDuration}
						></input>
						<br />

						<label htmlFor='activityInput'>Enter Intensity </label>
						<input
							type='text'
							id='activityInput'
							value={intensity}
							onChange={handleChangeIntensity}
						></input>
					</div>
					<button className='button' onClick={addData}>
						Add
					</button>
					<button className='button-cancel' onClick={closeButtonHandler}>
						Cancel
					</button>
				</Card>
			</div>
		);
	}
};
export default AddWorkout;
