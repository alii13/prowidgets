import React, { Component } from "react";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { Resizable } from "re-resizable";

class index extends Component {
	render() {
		const { SliderType, sliderName } = this.props;
		return (
			<Resizable
				maxWidth="53vw"
				minHeight="60vh"
				defaultSize={{
					width: "100%",
					height: "auto",
				}}
				style={{ backgroundColor: this.props.previewSlideColor }}
				className={styles.resizable__container}
			>
				<SliderType
					photos={this.props.photos}
					animationSpeed={this.props.animationSpeed}
					bullteState={this.props.bullteState}
					arrowState={this.props.arrowState}
					orienation={this.props.orienation}
					sliderName={sliderName}
				/>
			</Resizable>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		previewSlideColor: state.sliders.present.previewSlideColor,
		animationSpeed: state.sliders.present.animationSpeed,
		bullteState: state.sliders.present.bullteState,
		arrowState: state.sliders.present.arrowState,
		orienation: state.sliders.present.orienation,
	};
};

//   const mapDispatchToProps = dispatch => {
// 	return {
// 	  onUndo: () => dispatch(UndoActionCreators.undo()),
// 	  onRedo: () => dispatch(UndoActionCreators.redo()),
// 	  changeSelectedSlider: (slideData) => dispatch(changeSelectedSlider(slideData)),
// 	}
//   }

export default connect(mapStateToProps, null)(index);
