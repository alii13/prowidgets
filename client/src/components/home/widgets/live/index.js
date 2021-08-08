import React, { Component } from "react";
import styles from "./index.module.css";
import { LiveWidget } from "../templates/widget";
import { findCarouselNameById } from "../../../carousels";
import { BiCarousel } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { CgShapeRhombus } from "react-icons/cg";
import { GrTwitter } from "react-icons/gr";
import { BsCircle } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { deleteCarousel } from "../../action/home";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import moment from "moment-mini";
import {setWidgetData} from "../../../update-widget/actions/slider"
const icons = [
	{
		icon: BiCarousel,
		bgColor: "rgba(24, 252, 88, 0.18)",
		widgetName: "Image Crousel",
		aboutWidget: "Customizable sliders for portfolio images",
		route: "",
	},
	{
		icon: TiMessages,
		bgColor: "rgba(135, 57, 249, 0.12)",
		widgetName: "Testimonial Slider",
		aboutWidget: "Customizable sliders for testimonials",
		route: "",
	},
	{
		icon: CgShapeRhombus,
		bgColor: "rgba(255, 191, 28, 0.18)",
		widgetName: "Buttons",
		aboutWidget: "COMING SOON!",
		route: "",
	},
	{
		icon: GrTwitter,
		bgColor: "rgba(24, 197, 252, 0.18)",
		widgetName: "Twitter Shoutouts",
		aboutWidget: "COMING SOON!",
		route: "",
	},
	{
		icon: BsCircle,
		bgColor: "rgba(252, 24, 161, 0.18)",
		widgetName: "Social Media Share",
		aboutWidget: "COMING SOON!",
		route: "",
	},
];

class index extends Component {
	deleteCarousel=(id)=>{
		console.log('delete clicked with ',id);
		this.props.deleteCarousel(id);
	}
	setWidgetData=(carouselData)=>{
		this.props.setWidgetData(carouselData);
		this.props.history.push("/update-widget");
	}
	render() {
		return (
			<>
				{ this.props.carouselData.map((carousel) => {
					return (
						<div className={styles.slider__item__container}>
							<LiveWidget
								id={carousel._id}
								carousel={carousel}
								icon={icons[0].icon}
								bgColor={icons[0].bgColor}
								widgetName={carousel.name}
								aboutWidget={`Created At : ${moment(carousel.createdAt).format(
									"DD MMM YYYY"
								)}`}
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
