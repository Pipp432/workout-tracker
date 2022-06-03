import "./App.css";
import AddWorkout from "./Components/AddWorkout";
import WorkoutNode from "./Components/WorkoutNode";
import { useState } from "react";

function App() {
	const [workouts, setWorkouts] = useState([
		{ id: "0", activity: "swimming", duration: "1 hr", intensity: "10" },
		{ id: "1", activity: "running", duration: "3 hr", intensity: "7" },
	]);
	const addDataToList = function (newData) {
		console.log(workouts);
		setWorkouts((prevWorkouts) => {
			return [newData, ...prevWorkouts];
		});
	};

	return (
		<div>
			<AddWorkout enterData={addDataToList} />

			{workouts.map((workout) => (
				<WorkoutNode workouts={workout} key={workout.id} />
			))}
		</div>
	);
}

export default App;
