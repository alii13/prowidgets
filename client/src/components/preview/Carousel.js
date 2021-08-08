import React, { Component } from "react";
import styles from "./Carousel.module.css";
import { fetchCarouselData } from "./action/previewAction";
import { Resizable } from "re-resizable";
import { slidesData } from "../carousels";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.SliderType = React.createRef();
	}
    state={
        render:0
    }

	 componentDidMount() {
		const carouselId = this.props.match.params.carouselId;
		this.props.fetchCarouselData({carouselId}).then((response)=>{
            const slideData = slidesData.find((slide) => slide.id == response.carousel_id);
            const SliderType = slideData.SlideType;
            this.SliderType.current = SliderType;
            this.setState({
                render:this.state.render+1
            })
        });

	}
	render() {
        const SliderType = this.SliderType?.current;
		return this.SliderType.current && this.props.carouselData ? (
            <>
			<Resizable
				height="100vh"
				defaultSize={{
					width: "100%",
					height: "auto",
				}}
				style={{ backgroundColor: this.props.carouselData.bg_color }}
				className={styles.resizable__container}
			>
				<SliderType
					photos={this.props.carouselData.images}
					bullteState={this.props.carouselData.bullets}
					arrowState={this.props.carouselData.arrows}
					orienation={this.props.carouselData.image_orienation}
					sliderName={this.props.carouselData.name}
				/>
			</Resizable>
            </>
		) : null;
	}
}

const mapStateToProps = (state) => {
	return {
		carouselData: state.preview.carousel,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCarouselData: (data) => dispatch(fetchCarouselData(data)),
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Carousel)
);
