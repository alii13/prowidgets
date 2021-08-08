import React, { Component } from "react";
import styles from "./index.module.css";
import Sliders from "./sliders"
export default class index extends Component {
    state={
        sliderIndex:0
    }
    setSlideIndex=(index)=>{
        this.setState({
            sliderIndex:index
        })
    }
    onSlideChange=(e)=>{
		const slideIndex = e.snapIndex;
		this.setState({
			sliderIndex: slideIndex,
		});
    }
	render() {
		return (
			<div className={styles.container}>
				<Sliders onSlideChange={this.onSlideChange} setSlideIndex={this.setSlideIndex} sliderIndex={this.state.sliderIndex} 
				carouselData={this.props.carouselData}/>
			</div>
		);
	}
}
