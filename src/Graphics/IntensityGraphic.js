import "./IntensityGraphic.css";
const IntensityGraphic = function (props) {
	const processIntensity = function () {
		if (props.details.intensity === "Easy") return "easy";
		if (props.details.intensity === "Medium") return "medium";
		if (props.details.intensity === "Hard") return "hard";
		else return "";
	};
	let i = 0;

	const classColor = "dot-" + processIntensity();
	return (
		<div>
			{Array.apply(null, Array(3)).map(() => (
				<span className={classColor} key={"num" + i++}></span>
			))}
		</div>
	);
};
export default IntensityGraphic;
