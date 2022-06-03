import "./App.css";
import AddWorkout from "./Components/AddWorkout";
import WorkoutNode from "./Components/WorkoutNode";
import TitleCard from "./UI/TitleCard";
import { useState } from "react";

function App() {
	const [workouts, setWorkouts] = useState([
		{ id: "0", activity: "Swimming", duration: "1 hr", intensity: "Easy" },
		{ id: "1", activity: "Running", duration: "3 hr", intensity: "Hard" },
	]);
	const addDataToList = function (newData) {
		console.log(workouts);
		setWorkouts((prevWorkouts) => {
			return [newData, ...prevWorkouts];
		});
	};

	return (
		<div>
			<TitleCard />
			<AddWorkout enterData={addDataToList} />

			{workouts.map((workout) => (
				<WorkoutNode workouts={workout} key={workout.id} />
			))}
		</div>
	);
}

export default App;
