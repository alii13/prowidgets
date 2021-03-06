import React, { Component } from "react";
import styles from "./index.module.css";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";
import { IoCaretForwardCircle } from "react-icons/io5";
import { Button, Badge } from "antd";
import { FaDiscord } from "react-icons/fa";
import Features from "../features";
import { connect } from "react-redux";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import Logout from "../../navbar/logout";
import { updateCarouselAndSave } from "../actions/slider";
import notification from "../../notification";
import {withRouter} from "react-router-dom"

const badgeStyles = {
	right: "22%",
	height: "15px",
	width: "15px",
	top: "20%",
	border: "2px solid #fff",
};
class index extends Component {
	state = {
		toggleProfileMenu: false,
	};
	openProfileMenu = () => {
		this.setState({ toggleProfileMenu: true });
	};
	closeProfileMenu = () => {
		this.setState({ toggleProfileMenu: false });
	};

	saveCarousel = () => {
		/*
					{
				_id: { type: String },
				name: { type: String },
				url: { type: String },
				bullets: { type: Boolean },
				arrows: { type: Boolean },
				image_orienation: { type: String, default: "cover" },
				bg_color: { type: String, default: "#F3F3F3" },
				images: [
					{
						_id: { type: String },
						url: { type: String },
						name: { type: String },
					},
				],
			}
			*/
		const sliderState = this.props.slider;
		const carousel = {};
		const _id = sliderState._id;
		carousel._id = sliderState._id;
		carousel.carousel_id = sliderState.carousel_id;
		carousel.name = sliderState.widgetName;
		carousel.url = `${process.env.REACT_APP_DOMAIN}carousel/${_id}`;
		carousel.bullets = sliderState.bullteState;
		carousel.arrows = sliderState.arrowState;
		carousel.image_orienation = sliderState.orienation;
		carousel.bg_color = sliderState.previewSlideColor;
		carousel.url_id = `${_id}`;
		const images = sliderState.photos.map((photo) => {
			return {
				_id: photo.uid,
				url: photo.url,
				name: photo.name,
			};
		});
		carousel.images = images;
		this.props.updateCarouselAndSave(carousel).then(((resolveValue)=>{
			notification('success','Carousel updated successfully ???');
			this.props.history.push("/home");
		}),(err)=>{
			notification('error',err.message);
		})
	};

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.left}>
						<RiArrowGoBackFill
							className={
								this.props.canUndo ? styles.nav__icon__active : styles.nav__icon
							}
							onClick={this.props.onUndo}
						/>
						<RiArrowGoForwardFill
							className={
								this.props.canRedo ? styles.nav__icon__active : styles.nav__icon
							}
							onClick={this.props.onRedo}
							style={{ marginLeft: "0.25rem", marginRight: "1rem" }}
						/>
						<Button
							type="primary"
							className={styles.save__btn}
							disabled={this.props.slider.widgetName===''?true:false}
							loading={this.props.saveCarouselLoading}
							onClick={this.saveCarousel}
						>
							Save
						</Button>
					</div>
					<div className={styles.right}>
						<p className={styles.item}>Report Bug</p>
						<Badge
							dot={true}
							status={"success"}
							className={styles.badge__circle}
							style={badgeStyles}
							onMouseEnter={this.openProfileMenu}
							onMouseLeave={this.closeProfileMenu}
						>
							<div className={`${styles.item} ${styles.badge}`}>
								<img
									// src="https://i.pravatar.cc/80"
									src={this.props.user.imageUrl}
									className={styles.avatar}
								/>
							</div>
							{this.state.toggleProfileMenu ? (
								<div className={styles.profile__menu}>
									<p className={styles.profile__menu__link}>Settings</p>
									<Logout />
								</div>
							) : null}
						</Badge>
					</div>
				</div>
				<div className={styles.tutorial__video}>
					<div className={styles.tutorial__video__icon__wrapper}>
						<IoCaretForwardCircle className={styles.tutorial__video__icon} />
					</div>
					<p className={styles.tutorial__video__text}>
						Need help? Watch this short video to quickly create your carousel
						widget!{" "}
					</p>
				</div>
				<p className={styles.body__title}>Settings</p>
				<div className={styles.body}>
					<div className={styles.boxes__wrapper}>
						<Features />
					</div>
				</div>
				<div className={styles.body__footer}>
					<p>
						Feel like something could be added here? Do let us know in{" "}
						<span className={styles.icon__wrapper}>
							<FaDiscord className={styles.discord__icon} />
						</span>
					</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		canUndo: state.updateWidget.past.length > 0,
		canRedo: state.updateWidget.future.length > 0,
		slider: state.updateWidget.present,
		saveCarouselLoading: state.updateWidget.present.saveCarouselLoading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUndo: () => dispatch(UndoActionCreators.undo()),
		onRedo: () => dispatch(UndoActionCreators.redo()),
		updateCarouselAndSave: (carouselData) => dispatch(updateCarouselAndSave(carouselData)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(index));
