import React, { Component } from "react";
import styles from "./index.module.css";
import Widget from "./widget";
import { BiCarousel } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { CgShapeRhombus } from "react-icons/cg";
import { GrTwitter } from "react-icons/gr";
import { BsCircle } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const icons = [
	{
		icon: BiCarousel,
		bgColor: "rgba(24, 252, 88, 0.18)",
		widgetName: "Image Crousel",
		aboutWidget: "Customizable sliders for portfolio images",
		route:"/widget-editor"
	},
	{
		icon: TiMessages,
		bgColor: "rgba(135, 57, 249, 0.12)",
		widgetName: "Testimonial Slider",
		aboutWidget: "Customizable sliders for testimonials",
		route:"/widget-editor"
	},
	{
		icon: CgShapeRhombus,
		bgColor: "rgba(255, 191, 28, 0.18)",
		widgetName: "Buttons",
		aboutWidget: "COMING SOON!",
		route:"/widget-editor"
	},
	{
		icon: GrTwitter,
		bgColor: "rgba(24, 197, 252, 0.18)",
		widgetName: "Twitter Shoutouts",
		aboutWidget: "COMING SOON!",
		route:"/widget-editor"
	},
	{
		icon: BsCircle,
		bgColor: "rgba(252, 24, 161, 0.18)",
		widgetName: "Social Media Share",
		aboutWidget: "COMING SOON!",
		route:"/widget-editor"
	},
];
export default class index extends Component {
	render() {
		return (
			<>
				<div className={styles.slideWindow}>
					{icons.map((icon) => (
						<div className={styles.slider__item__container}>
							<Widget
								icon={icon.icon}
								bgColor={icon.bgColor}
								widgetName={icon.widgetName}
								aboutWidget={icon.aboutWidget}
								route={icon.route}
							/>
						</div>
					))}
					<div className={styles.add__container}>
						<div
							className={styles.add__body}
						>
							<p className={styles.add__widget__name}>Need more widgets?</p>
							<p className={styles.add__widget__about}>Let us know in <span className={styles.discord__icon__wrapper}><FaDiscord className={styles.discord__icon}/></span></p>
						</div>
					</div>
				</div>
			</>
		);
	}
}
