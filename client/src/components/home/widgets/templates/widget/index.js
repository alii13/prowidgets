import React, { Component } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Tag, Tooltip, Modal } from "antd";
import { AiOutlineDelete, AiOutlineLink } from "react-icons/ai";
import notification from "../../../../notification";
export default class index extends Component {
	render() {
		const icon = this.props.icon;
		return (
			<div className={styles.container}>
				<Link to={this.props.route} className={styles.link}>
					<div className={styles.body}>
						<img src={icon} className={styles.widget__icon} alt="gif" />
					</div>
					<div className={styles.footer} style={{ backgroundColor: this.props.bgColor }}>
						<p className={styles.widget__name}>{this.props.widgetName}</p>
						<p className={styles.widget__about}>{this.props.aboutWidget}</p>
					</div>
				</Link>
			</div>
		);
	}
}
export class LiveWidget extends Component {
	state = {
		showModal: false,
		_id: null,
	};
	onOk = (e) => {
		e.stopPropagation();
		this.props.deleteCarousel(this.props.carousel._id);
		this.setState({
			showModal: false,
		});
	};

	setWidget = () => {
		console.log(this.props.carousel);
		this.props.setWidgetData(this.props.carousel);
	};
	deleteClick = (e) => {
		e.stopPropagation();
		this.setState({ showModal: !this.state.showModal, _id: this.props.carousel._id });
	};
	onCancel = (e) => {
		e.stopPropagation();
		this.setState({ showModal: false });
	};
	copyLink = async (e) => {
		e.stopPropagation();
		console.log("copy clicked");
		if (!navigator.clipboard) {
			notification("error", "Failed to copy!", 2);
			return;
		}
		try {
			await navigator.clipboard.writeText(
				`${process.env.REACT_APP_DOMAIN}carousel/${this.props.carousel.url_id}`
			);
			notification("success", "Link Copied to clipboard!", 2);
		} catch (err) {
			notification("error", err.message, 2);
		}
	};

	render() {
		const icon = this.props.icon;
		const isDeleteLoading = this.props.isDeleteLoading;
		return (
			<div className={styles.container} onClick={this.setWidget}>
				<div className={styles.body}>
					<div className={styles.widgets__icon__container}>
						<Tooltip title="Copy Carousel Link">
							<div className={styles.loading__container} onClick={this.copyLink}>
								<AiOutlineLink className={styles.carousel__widget__icon} />
							</div>
						</Tooltip>
						{isDeleteLoading && this.state._id === this.props.carousel._id ? (
							<div className={styles.loading__container__true}>
								<div className={styles.loader}></div>
							</div>
						) : (
							<Tooltip title="Delete Carousel">
								<div className={styles.loading__container}>
									<AiOutlineDelete
										className={styles.carousel__widget__icon}
										onClick={this.deleteClick}
									/>
								</div>
							</Tooltip>
						)}
					</div>
					<img src={icon} className={styles.widget__icon} alt="gif" />
				</div>
				<div className={styles.footer} style={{ backgroundColor: this.props.bgColor }}>
					<div className={styles.widget__info__header}>
						<p className={styles.widget__name}>{this.props.widgetName}</p>
						<Tag color="green" className={styles.tag}>
							{this.props.type}
						</Tag>
					</div>
					<p className={styles.widget__about}>{this.props.aboutWidget}</p>
				</div>
				<Modal
					visible={this.state.showModal}
					centered={true}
					className={styles.auth__modal}
					onCancel={this.onCancel}
					onOk={this.onOk}
					okText="Ok"
					cancelText="Cancel">
					<div className={styles.auth__div}>
						<p className={styles.auth__text}>
							Are you sure, you want to
							<span className={styles.danger}> delete</span> this carousel?
						</p>
					</div>
				</Modal>
			</div>
		);
	}
}
