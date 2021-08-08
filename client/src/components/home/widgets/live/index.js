import React, { Component } from "react";
import styles from "./index.module.css";
import { LiveWidget } from "../templates/widget";
import { findCarouselNameById } from "../../../carousels";
// import { BiCarousel } from "react-icons/bi";
// import { TiMessages } from "react-icons/ti";
// import { CgShapeRhombus } from "react-icons/cg";
// import { GrTwitter } from "react-icons/gr";
// import { BsCircle } from "react-icons/bs";
// import { FaDiscord } from "react-icons/fa";
import { deleteCarousel } from "../../action/home";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment-mini";
import { setWidgetData } from "../../../update-widget/actions/slider";
import { icons } from "../icons/icon";

class index extends Component {
	deleteCarousel = (id) => {
		console.log("delete clicked with ", id);
		this.props.deleteCarousel(id);
	};
	setWidgetData = (carouselData) => {
		this.props.setWidgetData(carouselData);
		this.props.history.push("/update-widget");
	};
	render() {
		return (
			<>
				{this.props.carouselData.map((carousel) => {
					return (
						<div className={styles.slider__item__container}>
							<LiveWidget
								id={carousel._id}
								carousel={carousel}
								icon={icons[0].icon}
								bgColor={icons[0].bgColor}
								widgetName={carousel.name}
								aboutWidget={`Created At : ${moment(carousel.createdAt).format("DD MMM YYYY")}`}
								route={icons[0].route}
								type={findCarouselNameById(carousel.carousel_id)}
								isDeleteLoading={this.props.isDeleteLoading}
								deleteCarousel={this.deleteCarousel}
								setWidgetData={this.setWidgetData}
							/>
						</div>
					);
				})}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isDeleteLoading: state.home.isDeleteLoading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteCarousel: (id) => dispatch(deleteCarousel(id)),
		setWidgetData: (widgetData) => dispatch(setWidgetData(widgetData)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(index));
