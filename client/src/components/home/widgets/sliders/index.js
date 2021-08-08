import React, { Component } from "react";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import TemplateWidgets from "../templates";
import LiveWidgets from "../live";

export default class index extends Component {
	constructor(props) {
		super(props);
		this.swiperInstance = React.createRef();
	}

	setRef = (instance) => {
		this.swiperInstance.current = instance;
	};

	onSlideChange = (e) => {
		this.props.onSlideChange(e);
	};
	setSlideIndex = (index) => {
		this.props.setSlideIndex(index);
		this.swiperInstance.current.slideTo(index, 500);
	};

	render() {
		return (
			<>
				<div className={styles.header}>
					<div
						className={styles.widget__name}
						onClick={() => this.setSlideIndex(0)}
					>
						<p
							className={
								this.props.sliderIndex == 0
									? `${styles.widget__title} ${styles.active__title}`
									: styles.widget__title
							}
						>
							Widget Templates 📔
						</p>
						<div
							className={
								this.props.sliderIndex == 0
									? `${styles.border} ${styles.activeBorder}`
									: styles.border
							}
						></div>
					</div>
					<div
						className={styles.widget__name}
						onClick={() => this.setSlideIndex(1)}
					>
						<p
							className={
								this.props.sliderIndex == 1
									? `${styles.widget__title} ${styles.active__title}`
									: styles.widget__title
							}
						>
							Live Widgets ⚡
						</p>
						<div
							className={
								this.props.sliderIndex == 1
									? `${styles.border} ${styles.activeBorder}`
									: styles.border
							}
						></div>
					</div>
					<div className={styles.blank__space}></div>
				</div>
				<div className={styles.container}>
					<Swiper
						spaceBetween={50}
						slidesPerView={1}
						onSlideChange={this.onSlideChange}
						onSwiper={this.setRef}
						className={styles.slider__box}
					>
						<SwiperSlide>
							<TemplateWidgets />
						</SwiperSlide>

						{ this.props.carouselData && this.props.carouselData.length > 0 ? (
							<SwiperSlide className={styles.slideWindow}>
								<LiveWidgets carouselData={this.props.carouselData} />
							</SwiperSlide>
						) : (
							<SwiperSlide className={styles.slide__live__empty__container}>
								<div className={styles.live__empty__container}>
									<p className={styles.heading}>You have no live widgets 😕</p>
									<div className={styles.add__new__widgets} onClick={() => this.setSlideIndex(0)}>
										+ Add new widgets
									</div>
								</div>
							</SwiperSlide>
						)}
					</Swiper>
				</div>
			</>
		);
	}
}
