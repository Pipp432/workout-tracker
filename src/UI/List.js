import WorkoutNode from "../Components/WorkoutNode";
const List = (props) => {
	return (
		<div className='list'>
			{props.data.map((workout) => (
				<WorkoutNode workouts={workout} key={workout.id} />
			))}
		</div>
	);
};
export default List;
