import React, { Component } from "react";
import styles from "./index.module.css";
import Menubar from "../menubar";
import Widgets from "./widgets";
import { fetchCarouselsData } from "./action/home";
import { connect } from "react-redux";

class index extends Component {
	componentDidMount() {
		this.props.fetchCarouselsData();
	}
	render() {
		return (
			<div className={styles.container}>
				<Menubar user={this.props.user} />
				<Widgets carouselData={this.props.carouselData} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		carouselData: state.home.widgets?.carousels,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCarouselsData: () => dispatch(fetchCarouselsData()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
