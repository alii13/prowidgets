import React, { Component } from "react";
import styles from "./index.module.css";
import Navbar from "../navbar";
import Footer from "../footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import { Link, withRouter } from "react-router-dom";
import { isLoggedIn } from "../../auth";

// install Swiper modules
SwiperCore.use([Pagination]);
class index extends Component {
	constructor(props) {
		super(props);
		this.swiperInstance = React.createRef();
		this.state = {
			slideIndex: 0,
		};
	}

	componentDidMount() {
		if (isLoggedIn()) {
			this.props.history.push("/home");
		}
	}

	setRef = (instance) => {
		this.swiperInstance.current = instance;
	};

	onSlideChange = (e) => {
		const slideIndex = e.snapIndex;
		this.setState({
			slideIndex: slideIndex,
		});
	};
	setSlideIndex = (index) => {
		this.swiperInstance.current.slideTo(index, 500);
	};
	render() {
		return (
			<>
				<div className={styles.container}>
					<Navbar />
					<div className={styles.hero__section}>
						<div className={styles.ball__light}></div>
						<div className={styles.ball__lavender}></div>
						<div className={styles.info}>
							<h1 className={styles.title}>
								Time to add{" "}
								<span className={`secondary__color ${styles.title}`}>
									some life
								</span>{" "}
								to your Notionfolio! 🎉
							</h1>
							<p className={styles.subtitle}>
								Create personalized sliders to showcase your work, testimonials,
								pictures and much more inside notion :)
							</p>
						</div>
						<div className={styles.product__gif__container}>
							<img
								className={styles.product__browser}
								src={process.env.PUBLIC_URL + "/browser_top.png"}
							/>
							<img
								className={styles.product__gif}
								src={process.env.PUBLIC_URL + "/product.gif"}
							/>
						</div>
						<p className={styles.product__footer}>
							👆 Animated sliders for your best works
						</p>
					</div>
					<div className={styles.info__section}>
						<div className={styles.ball__pink}></div>
						<div className={styles.ball__green}></div>
						<div className={styles.info}>
							<h1 className={styles.title}>
								<span className={`secondary__color ${styles.title}`}>How </span>{" "}
								it works? 🤔
							</h1>
							<p className={styles.subtitle}>
								Trust us, it’s super simple to add slider to your notion pages!
							</p>
						</div>
						<div className={styles.slides}>
							<div className={styles.slide}>
							{/* <img
								className={styles.website__gif}
								src={process.env.PUBLIC_URL + "/slide1.gif"}
							/> */}
							</div>
							<div className={styles.slide}>
							{/* <img
								className={styles.website__gif}
								src={process.env.PUBLIC_URL + "/slide2.gif"}
							/> */}
							</div>
							<div className={styles.slide}>
							{/* <img
								className={styles.website__gif}
								src={process.env.PUBLIC_URL + "/slider3.gif"}
							/> */}
							</div>
						</div>
					</div>
					<div className={styles.usecases__section} style={{ marginBottom: 0 }}>
						<div className={styles.info}>
							<h1 className={styles.title}>
								A few{" "}
								<span className={`secondary__color ${styles.title}`}>
									Usecases 💻
								</span>
							</h1>
							<p className={styles.subtitle}>
								A simple yet effective tool to up your notion game!
							</p>
						</div>
						<div className={styles.slider__container}>
							<div className={styles.silder__header}>
								<div
									className={`${styles.item}`}
									onClick={() => this.setSlideIndex(0)}
								>
									<p
										className={
											this.state.slideIndex === 0
												? ` ${styles.item__title} ${styles.item__active}`
												: styles.item__title
										}
									>
										Portfolio
									</p>
									<div
										className={
											this.state.slideIndex === 0
												? ` ${styles.item__title__border} ${styles.border__active}`
												: `${styles.item__title__border}`
										}
									></div>
								</div>
								<div
									className={`${styles.item}`}
									onClick={() => this.setSlideIndex(1)}
								>
									<p
										className={
											this.state.slideIndex === 1
												? ` ${styles.item__title} ${styles.item__active}`
												: styles.item__title
										}
									>
										Testimonials
									</p>
									<div
										className={
											this.state.slideIndex === 1
												? ` ${styles.item__title__border} ${styles.border__active}`
												: `${styles.item__title__border}`
										}
									></div>
								</div>
								<div
									className={`${styles.item}`}
									onClick={() => this.setSlideIndex(2)}
								>
									<p
										className={
											this.state.slideIndex === 2
												? ` ${styles.item__title} ${styles.item__active}`
												: styles.item__title
										}
									>
										Picture Gallery
									</p>
									<div
										className={
											this.state.slideIndex === 2
												? ` ${styles.item__title__border} ${styles.border__active}`
												: `${styles.item__title__border}`
										}
									></div>
								</div>
							</div>
							<div className={styles.slider}>
								<Swiper
									spaceBetween={50}
									slidesPerView={1}
									pagination={{
										clickable: true,
									}}
									onSlideChange={this.onSlideChange}
									onSwiper={this.setRef}
									className={styles.slider__box}
								>
									<SwiperSlide>
										<div className={styles.slideWindow}>
											<div className={styles.slider__item__container}>
												<img
													src="https://picsum.photos/536/354?random=1"
													alt="image"
													className={styles.slider__item}
												/>
											</div>
											<div className={styles.slider__item__container}>
												<img
													src="https://picsum.photos/536/354?random=2"
													alt="image"
													className={styles.slider__item}
												/>
											</div>
											<div className={styles.slider__item__container}>
												<img
													src="https://picsum.photos/536/354?random=3"
													alt="image"
													className={styles.slider__item}
												/>
											</div>
											<div className={styles.slider__item__container}>
												<img
													src="https://picsum.photos/536/354?random=4"
													alt="image"
													className={styles.slider__item}
												/>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className={styles.slideWindow}>
										<div className={styles.slider__item__container}>
											<div className={styles.slide__box}></div>
										</div>
										<div className={styles.slider__item__container}>
											<div className={styles.slide__box}></div>
										</div>
										<div className={styles.slider__item__container}>
											<div className={styles.slide__box}></div>
										</div>
										<div className={styles.slider__item__container}>
											<div className={styles.slide__box}></div>
										</div>
									</SwiperSlide>
									<SwiperSlide className={styles.slideWindow}>
										<div className={styles.slider__item__container}>
											<div className={styles.slide__box}></div>
										</div>
										<div className={styles.slider__item__container}>
											<div className={styles.slide__box}></div>
										</div>
										<div className={styles.slider__item__container}>
											<div className={styles.slide__box}></div>
										</div>
										<div className={styles.slider__item__container}>
											<div className={styles.slide__box}></div>
										</div>
									</SwiperSlide>
								</Swiper>
								<div className={styles.slider__footer}>
									<Link to="/home">
										<div className={`${styles.link} ${styles.link__btn}`}>
											Create Your Slider
										</div>
									</Link>
									<p className={styles.slider__footer__subtitle}>
										Guess what? It’s{" "}
										<span className={styles.bold}>free for you!</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default withRouter(index);
