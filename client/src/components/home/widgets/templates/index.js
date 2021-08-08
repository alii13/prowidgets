import React, { Component } from "react";
import styles from "./index.module.css";
import Widget from "./widget";
// import { BiCarousel } from "react-icons/bi";
// import { TiMessages } from "react-icons/ti";
// import { CgShapeRhombus } from "react-icons/cg";
// import { GrTwitter } from "react-icons/gr";
// import { BsCircle } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { icons } from "../icons/icon";

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
						<div className={styles.add__body}>
							<p className={styles.add__widget__name}>Need more widgets?</p>
							<p className={styles.add__widget__about}>
								Let us know in{" "}
								<span className={styles.discord__icon__wrapper}>
									<FaDiscord className={styles.discord__icon} />
								</span>
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}
