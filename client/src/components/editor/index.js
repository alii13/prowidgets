import React, { Component } from "react";
import styles from "./index.module.css";
import Viewer from "./viewer";
import Options from "./options";
import Spacer from "./options/spacer";
import { connect } from "react-redux";
import { ActionCreators as UndoActionCreators } from "redux-undo";

class index extends Component {
	componentDidMount() {
		const context = this;
		document.addEventListener("keydown", function (event) {
			const canUndo = context.props.canUndo;
			const canRedo = context.props.canRedo;
			if (event.ctrlKey && event.key === "z") {
				if (canUndo) {
					context.props.onUndo();
				}
			}
			if (event.ctrlKey && event.key === "y") {
				console.log(canRedo);
				if (canRedo) {
					context.props.onRedo();
				}
			}
		});
	}

	render() {
		return (
			<div className={styles.container}>
				<Viewer user = {this.props.user} />
				<Options user = {this.props.user}/>
				<Spacer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		canUndo: state.sliders.past.length > 0,
		canRedo: state.sliders.future.length > 0,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUndo: () => dispatch(UndoActionCreators.undo()),
		onRedo: () => dispatch(UndoActionCreators.redo()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
