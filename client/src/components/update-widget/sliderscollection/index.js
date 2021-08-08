import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import FoldOutAnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import OpenAnimationStyles from "react-awesome-slider/src/styled/open-animation/open-animation.scss";
import FallAnimationStyles from "react-awesome-slider/src/styled/fall-animation/fall-animation.scss";
import CubeAnimationStyles from "react-awesome-slider/src/styled/cube-animation/cube-animation.scss";
import ScaleOutAnimationStyles from "react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss";
import withAutoplay from "react-awesome-slider/dist/autoplay";

// import { connect } from "react-redux";

import styles from "./index.module.css";

// const AutoplaySlider = withAutoplay(AwesomeSlider);

export class Simple extends Component {
	constructor(props) {
		super(props);
		this.swiperInstance = React.createRef();
	}
	state = {
		sliderNameStyles: { tranform: "scale(1)", opacity: 0.5 },
	};
	componentDidMount() {
		const context = this;
		setTimeout(() => {
			context.setState({
				sliderNameStyles: { tranform: "scale(120)", opacity: 0 },
			});
		}, 400);
	}

	setRef = (instance) => {
		this.swiperInstance.current = instance;
		console.log(instance);
	};

	render() {
		const {  bullteState, sliderName,arrowState,orienation } = this.props;

		return (
			<>
				<AwesomeSlider
					className={styles.slider__container}
					cssModule={[CoreStyles]}
					bullets={bullteState}
					organicArrows={arrowState}
					mobileTouch={true}
					fillParent={orienation==="cover"?true:false}
				>
					{this.props.photos.map((slide) => (
						<div className={styles.slider__container} key={slide.uid}>
							<img src={slide.url} className={styles.slide} />
						</div>
					))}
				</AwesomeSlider>
				<div
					className={styles.preview__banner}
					style={{
						opacity: this.state.sliderNameStyles.opacity,
						display: this.state.sliderNameStyles.display,
					}}
				>
					<p
						style={{ transform: this.state.sliderNameStyles.tranform }}
						className={styles.sliderName}
					>
						{sliderName?.toUpperCase()}
					</p>
				</div>
			</>
		);
	}
}
export class FoldOut extends Component {
	constructor(props) {
		super(props);
		this.swiperInstance = React.createRef();
	}
	state = {
		sliderNameStyles: { tranform: "scale(1)", opacity: 0.5 },
	};
	componentDidMount() {
		const context = this;
		setTimeout(() => {
			context.setState({
				sliderNameStyles: { tranform: "scale(120)", opacity: 0 },
			});
		}, 400);
	}

	setRef = (instance) => {
		this.swiperInstance.current = instance;
		this.swiperInstance.current.autoplay.stop();
	};

	render() {
		const {  bullteState,sliderName,arrowState,orienation } = this.props;

		return (
			<>
				<AwesomeSlider
					animation="foldOutAnimation"
					cssModule={[CoreStyles, FoldOutAnimationStyles]}
					bullets={bullteState}
					organicArrows={arrowState}
					mobileTouch={true}
					fillParent={orienation==="cover"?true:false}
				>
					{this.props.photos.map((slide) => (
						<div className={styles.slider__container} key={slide.uid}>
							<img src={slide.url} className={styles.slide} />
						</div>
					))}
				</AwesomeSlider>
				<div
					className={styles.preview__banner}
					style={{
						opacity: this.state.sliderNameStyles.opacity,
						display: this.state.sliderNameStyles.display,
					}}
				>
					<p
						style={{ transform: this.state.sliderNameStyles.tranform }}
						className={styles.sliderName}
					>
						{sliderName?.toUpperCase()}
					</p>
				</div>
			</>
		);
	}
}
export class Open extends Component {
	constructor(props) {
		super(props);
		this.swiperInstance = React.createRef();
	}
	state = {
		sliderNameStyles: { tranform: "scale(1)", opacity: 0.5 },
	};
	componentDidMount() {
		const context = this;
		setTimeout(() => {
			context.setState({
				sliderNameStyles: { tranform: "scale(120)", opacity: 0 },
			});
		}, 400);
	}

	setRef = (instance) => {
		this.swiperInstance.current = instance;
		this.swiperInstance.current.autoplay.stop();
	};

	render() {
		const {  bullteState,sliderName,arrowState,orienation } = this.props;

		return (
			<>
				<AwesomeSlider
					animation="openAnimation"
					cssModule={[CoreStyles, OpenAnimationStyles]}
					bullets={bullteState}
					organicArrows={arrowState}
					mobileTouch={true}
					fillParent={orienation==="cover"?true:false}
				>
					{this.props.photos.map((slide) => (
						<div className={styles.slider__container} key={slide.uid}>
							<img src={slide.url} className={styles.slide} />
						</div>
					))}
				</AwesomeSlider>
				<div
					className={styles.preview__banner}
					style={{
						opacity: this.state.sliderNameStyles.opacity,
						display: this.state.sliderNameStyles.display,
					}}
				>
					<p
						style={{ transform: this.state.sliderNameStyles.tranform }}
						className={styles.sliderName}
					>
						{sliderName?.toUpperCase()}
					</p>
				</div>
			</>
		);
	}
}
export class Fall extends Component {
	constructor(props) {
		super(props);
		this.swiperInstance = React.createRef();
	}
	state = {
		sliderNameStyles: { tranform: "scale(1)", opacity: 0.5 },
	};
	componentDidMount() {
		const context = this;
		setTimeout(() => {
			context.setState({
				sliderNameStyles: { tranform: "scale(120)", opacity: 0 },
			});
		}, 400);
	}

	setRef = (instance) => {
		this.swiperInstance.current = instance;
		this.swiperInstance.current.autoplay.stop();
	};

	render() {
		const {  bullteState,sliderName,arrowState,orienation } = this.props;

		return (
			<>
				<AwesomeSlider
					animation="fallAnimation"
					cssModule={[CoreStyles, FallAnimationStyles]}
					bullets={bullteState}
					organicArrows={arrowState}
					mobileTouch={true}
					fillParent={orienation==="cover"?true:false}
				>
					{this.props.photos.map((slide) => (
						<div className={styles.slider__container} key={slide.uid}>
							<img src={slide.url} className={styles.slide} />
						</div>
					))}
				</AwesomeSlider>
				<div
					className={styles.preview__banner}
					style={{
						opacity: this.state.sliderNameStyles.opacity,
						display: this.state.sliderNameStyles.display,
					}}
				>
					<p
						style={{ transform: this.state.sliderNameStyles.tranform }}
						className={styles.sliderName}
					>
						{sliderName?.toUpperCase()}
					</p>
				</div>
			</>
		);
	}
}
export class Cube extends Component {
	constructor(props) {
		super(props);
		this.swiperInstance = React.createRef();
	}
	state = {
		sliderNameStyles: { tranform: "scale(1)", opacity: 0.5 },
	};
	componentDidMount() {
		const context = this;
		setTimeout(() => {
			context.setState({
				sliderNameStyles: { tranform: "scale(120)", opacity: 0 },
			});
		}, 400);
	}

	setRef = (instance) => {
		this.swiperInstance.current = instance;
		this.swiperInstance.current.autoplay.stop();
	};

	render() {
		const {  bullteState,sliderName,arrowState,orienation } = this.props;

		return (
			<>
				<AwesomeSlider
					animation="cubeAnimation"
					cssModule={[CoreStyles, CubeAnimationStyles]}
					bullets={bullteState}
					organicArrows={arrowState}
					mobileTouch={true}
					fillParent={orienation==="cover"?true:false}
				>
					{this.props.photos.map((slide) => (
						<div className={styles.slider__container} key={slide.uid}>
							<img src={slide.url} className={styles.slide} />
						</div>
					))}
				</AwesomeSlider>
				<div
					className={styles.preview__banner}
					style={{
						opacity: this.state.sliderNameStyles.opacity,
						display: this.state.sliderNameStyles.display,
					}}
				>
					<p
						style={{ transform: this.state.sliderNameStyles.tranform }}
						className={styles.sliderName}
					>
						{sliderName?.toUpperCase()}
					</p>
				</div>
			</>
		);
	}
}
export class ScaleOut extends Component {
	constructor(props) {
		super(props);
		this.swiperInstance = React.createRef();
	}
	state = {
		sliderNameStyles: { tranform: "scale(1)", opacity: 0.5 },
	};
	componentDidMount() {
		const context = this;
		setTimeout(() => {
			context.setState({
				sliderNameStyles: { tranform: "scale(120)", opacity: 0 },
			});
		}, 400);
	}

	setRef = (instance) => {
		this.swiperInstance.current = instance;
		this.swiperInstance.current.autoplay.stop();
	};

	render() {
		const {  bullteState,sliderName,arrowState,orienation } = this.props;

		return (
			<>
				<AwesomeSlider
					animation="scaleOutAnimation"
					cssModule={[CoreStyles, ScaleOutAnimationStyles]}
					bullets={bullteState}
					organicArrows={arrowState}
					mobileTouch={true}
					fillParent={orienation==="cover"?true:false}
				>
					{this.props.photos.map((slide) => (
						<div className={styles.slider__container} key={slide.uid}>
							<img src={slide.url} className={styles.slide} />
						</div>
					))}
				</AwesomeSlider>
				<div
					className={styles.preview__banner}
					style={{
						opacity: this.state.sliderNameStyles.opacity,
						display: this.state.sliderNameStyles.display,
					}}
				>
					<p
						style={{ transform: this.state.sliderNameStyles.tranform }}
						className={styles.sliderName}
					>
						{sliderName?.toUpperCase()}
					</p>
				</div>
			</>
		);
	}
}

const AutoplaySlider = withAutoplay(AwesomeSlider);
export class AutoPlay extends Component {
	constructor(props) {
		super(props);
		this.swiperInstance = React.createRef();
	}
	state = {
		sliderNameStyles: { tranform: "scale(1)", opacity: 0.5 },
	};
	componentDidMount() {
		const context = this;
		setTimeout(() => {
			context.setState({
				sliderNameStyles: { tranform: "scale(120)", opacity: 0 },
			});
		}, 400);
	}

	setRef = (instance) => {
		this.swiperInstance.current = instance;
		this.swiperInstance.current.autoplay.stop();
	};

	render() {
		const {  bullteState,sliderName,arrowState,orienation } = this.props;

		return (
			<>
				<AutoplaySlider
					play={true}
					cancelOnInteraction={false} // should stop playing on user interaction
					interval={6000}
					bullets={bullteState}
					organicArrows={arrowState}
					mobileTouch={true}
					fillParent={orienation==="cover"?true:false}
				>
					{this.props.photos.map((slide) => (
						<div className={styles.slider__container} key={slide.uid}>
							<img src={slide.url} className={styles.slide} />
						</div>
					))}
				</AutoplaySlider>
				<div
					className={styles.preview__banner}
					style={{
						opacity: this.state.sliderNameStyles.opacity,
						display: this.state.sliderNameStyles.display,
					}}
				>
					<p
						style={{ transform: this.state.sliderNameStyles.tranform }}
						className={styles.sliderName}
					>
						{sliderName?.toUpperCase()}
					</p>
				</div>
			</>
		);
	}
}
