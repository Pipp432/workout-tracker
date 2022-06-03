import "./Tab.css";

const Tab = (props) => {
	const classes = "tab " + props.className;

	return <div className={classes}>{props.children}</div>;
};

export default Tab;
