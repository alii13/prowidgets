import React, { Component } from "react";
import styles from "./index.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import notification from "../../notification";
// import {Freemode} from "../sliderscollection"
import {
	changeSelectedSlider
} from "../actions/slider";
import Input from "./widget-name"
import { connect } from "react-redux";
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import SliderPreview from "./preview-slider"
import { withRouter } from 'react-router-dom';
import {slidesData} from "../../carousels"
import { message } from 'antd';

// install Swiper modules
SwiperCore.use([Navigation]);

class index extends Component {
	componentDidMount(){
		message.info('You can resize the craousel from boundaries',2);
	}
	copyToClipBoard = async () => {
		if (!navigator.clipboard) {
			notification("error", "Failed to copy!", 2);
			return;
		}
		try {
			await navigator.clipboard.writeText(this.props.generatedLink);
			notification("success", "Copied to clipboard!", 2);
		} catch (err) {
			notification("error", err.message, 2);
		}
	};
	changeSlide = (slide) => {
		this.props.changeSelectedSlider(slide);
	};
	render() {
        const SliderType = this.props?.selectedSlider?.SlideType;
		const sliderName = this.props?.selectedSlider.name;
		return (
			<div className={styles.container}>
				<div className={styles.header}>
					<IoMdArrowRoundBack
						className={`${styles.icon} ${styles.back__btn}`}
						onClick={this.props.history.goBack}
						style={{cursor:"pointer"}}
					/>
					<Input/>
					<AiFillEdit className={`${styles.icon} ${styles.pencil}`} />
				</div>
				<div className={styles.body}>
					<div className={styles.choose__slider__container}>
						<p className={styles.choose__slider__title}>
							Choose your Slider Animation
						</p>
						<div className={styles.slider}>
							<Swiper
								spaceBetween={50}
								slidesPerView={1}
								onSwiper={this.setRef}
								navigation={true}
								className={styles.slider__box}
								breakpoints={{
									640: {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 4,
										spaceBetween: 25,
									},
									1024: {
										slidesPerView: 5,
										spaceBetween: 40,
									},
								}}
							>
								{slidesData.map((slide, i) => {
									const slideId = slide.id;
									const selectedSlideId = this.props.selectedSlider.id;
									const stylesSlide =
										selectedSlideId === slideId
											? { opacity: 1, border: "5px solid var(--primary)" }
											: null;
									return (
										<SwiperSlide key={slide.id}>
											<div
												className={styles.slide__container}
												onClick={() => this.changeSlide(slide)}
											>
												<div className={styles.slide}>
													<img
														src={slide.image}
														alt="image"
														className={styles.slide__image}
														style={{backgroundColor:"#F3F3F3"}}
													/>
													<div
														className={styles.image__banner}
														style={stylesSlide}
													>
														{slide.name}
													</div>
												</div>
											</div>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					</div>

					<SliderPreview photos={this.props.photos} SliderType = {SliderType} sliderName={sliderName} />
					<div className={styles.copy__container} style={!this.props.isCarouselSaved?{pointerEvents:"none",cursor:"not-allowed",opacity:0.6}:{opacity:1}}>
						<p className={styles.copy__title}>
							{`Copy this link onto your notion and click embed ${!this.props.isCarouselSaved?"( save it to enable copy! )":""}`}
						</p>
						<div className={styles.copy__text__container}>
							<p className={styles.copy__text}>{this.props.generatedLink}</p>
							<div
								className={styles.copy__icon__container}
								onClick={this.copyToClipBoard}
							>
								<HiOutlineClipboardCopy className={styles.copy__icon} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
	  canUndo: state.sliders.past.length > 0,
	  canRedo: state.sliders.future.length > 0,
	  selectedSlider:state.sliders.present.selectedSlider,
	  photos: state.sliders.present.photos,
	  previewSlideColor: state.sliders.present.previewSlideColor,
	  isCarouselSaved: state.sliders.present.isCarouselSaved,
	  generatedLink: state.sliders.present.generatedLink,
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
	  onUndo: () => dispatch(UndoActionCreators.undo()),
	  onRedo: () => dispatch(UndoActionCreators.redo()),
	  changeSelectedSlider: (slideData) => dispatch(changeSelectedSlider(slideData)),
	}
  }

  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(index));