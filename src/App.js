import "./App.css";
import AddWorkout from "./Components/AddWorkout";

import TitleCard from "./UI/TitleCard";
import { useState } from "react";
import List from "./UI/List";

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
		<div className='app'>
			<TitleCard />
			<AddWorkout enterData={addDataToList} />
			<List data={workouts} />
		</div>
	);
}

export default App;
