const ActivityGraphic = function (props) {
	const imageSourceProcess = function () {
		if (props.details.activity.toLocaleLowerCase() === "running") {
			return "https://www.freeiconspng.com/thumbs/running-icon/animation-man-running-icon--8.png";
		}

		if (props.details.activity.toLocaleLowerCase() === "swimming")
			return "https://www.freeiconspng.com/thumbs/swimming-icon-png/black-white-swimming-8.png";
		if (props.details.activity.toLocaleLowerCase() === "cycling")
			return "https://i.pinimg.com/originals/b5/d2/f4/b5d2f4b06c0390c4dadb66da03ade490.png";
	};
	const imageSource = imageSourceProcess();
	return (
		<div className='container'>
			<img src={imageSource} height='62.5' alt='{}'></img>
		</div>
	);
};
export default ActivityGraphic;
