import React, { Component } from "react";
import styles from "./index.module.css";
import { GrFormAdd } from "react-icons/gr";
import { Select, Upload, Modal, Slider, Switch } from "antd";
import { SketchPicker } from "react-color";
import ClickOutHandler from "react-onclickout";
import { fileList } from "../photos";
import { connect } from "react-redux";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import {
	removePhoto,
	addPhoto,
	previewSlideBackgroundChange,
	animationSpeedChange,
	imageOrienationChange,
	onBulletToggle,
	photoListChange,
	photoUploadSuccessfully,
	onArrowToggle,
} from "../actions/slider";
import axios from "axios";

const { Option } = Select;

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

class index extends Component {
	state = {
		selectedBackground: "#8739F9",
		showColorPicker: false,
		previewVisible: false,
		previewImage: "",
		previewTitle: "",
		fileList: fileList,
	};
	handleOrienattionChange = (value) => {};

	animationSpeedChange = (value) => {
		this.props.animationSpeed(value);
	};

	handleColorpickerChange = (color) => {
		this.props.previewSlideBackgroundChange(color.hex.toUpperCase());
	};

	handleCancel = () => this.setState({ previewVisible: false });

	handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		this.setState({
			previewImage: file.url || file.preview,
			previewVisible: true,
			previewTitle: file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
		});
	};

	upload = async (options) => {
		const { onSuccess, onError, file, onProgress } = options;
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", "sliderso");

		const config = {
			headers: { "content-type": "multipart/form-data" },
			onUploadProgress: (event) => {
				const percent = Math.floor((event.loaded / event.total) * 100);
				if (percent < 99) {
					console.log(percent);
					onProgress({ percent });
				}
			},
		};

		try {
			const res = await axios.post(
				`${process.env.REACT_APP_CLOUDINARY_URL}/image/upload`,
				data,
				config
			);
			onSuccess("ok");
			this.props.photoUploadSuccessfully(res.data);
		} catch (err) {
			console.log("Eroor: ", err);
			onError({ err });
		}
	};

	handleChange = (e) => {
		const { fileList } = e;
		console.log(fileList[fileList.length - 1].percent, "onchange");
		this.props.photoListChange(fileList);
	};
	removePhoto = (photo) => {
		console.log(photo);
		this.props.removePhoto(photo);
	};

	colorChaneComplete = (e) => {
		console.log(e);
	};

	render() {
		const { previewVisible, previewImage, fileList, previewTitle } = this.state;

		return (
			<>
				<div className={styles.feature__lablel__container}>
					<p className={styles.feature__label}>Upload Images</p>
					<div className={styles.feature__upload__body}>
						<Upload
							listType="picture-card"
							fileList={this.props.photos}
							className={styles.upload__wrapper}
							accept="image/*"
							onPreview={this.handlePreview}
							customRequest={this.upload}
							onChange={this.handleChange}
							onRemove={this.removePhoto}>
							{this.props.photos.length >= 8 ? null : (
								<div className={styles.add__image__btn}>
									<GrFormAdd className={styles.add__image__icon} />
								</div>
							)}
						</Upload>
						<Modal
							visible={previewVisible}
							title={previewTitle}
							footer={null}
							onCancel={this.handleCancel}>
							<img alt="example" style={{ width: "100%" }} src={previewImage} />
						</Modal>
					</div>
				</div>

				<div className={styles.feature__lablel__container}>
					<p
						className={styles.feature__label}
						style={!this.props.bullteState ? { color: "#9d9d9d" } : { color: "var(--primary)" }}>
						Show Bullets
						<Switch
							onChange={this.props.onBulletToggle}
							className={styles.toggle__switch}
							checked={this.props.bullteState}
						/>
					</p>
					<div className={styles.feature__linear__animation__body}></div>
				</div>

				<div className={styles.feature__lablel__container}>
					<p
						className={styles.feature__label}
						style={!this.props.arrowState ? { color: "#9d9d9d" } : { color: "var(--primary)" }}>
						Show Navigation Arrows
						<Switch
							onChange={this.props.onArrowToggle}
							className={styles.toggle__switch}
							checked={this.props.arrowState}
						/>
					</p>
					<div className={styles.feature__linear__animation__body}></div>
				</div>

				<div className={styles.feature__lablel__container}>
					<p className={styles.feature__label}>Image Orienation</p>
					<div className={styles.feature__linear__body}>
						<Select
							defaultValue="contain"
							onChange={this.props.imageOrienationChange}
							value={this.props.orienation}
							style={{
								minWidth: "95%",
								maxWidth: "100%",
								backgroundColor: "#F3F3F3",
								borderRadius: "8px",
							}}
							className={styles.orienation}>
							<Option value="contain">Contain</Option>
							<Option value="cover">Cover ( Fit to parent )</Option>
						</Select>
					</div>
				</div>

				{/* <div className={styles.feature__lablel__container}>
					<p className={styles.feature__label}>
						Animation Speed ( {this.props.animationSpeed} ms )
					</p>
					<div className={styles.feature__linear__animation__body}>
						<Slider
							className={styles.orienation}
							step={10}
							min={100}
							defaultValue={this.props.animationSpeed}
							max={2000}
							onAfterChange={this.props.animationSpeedChange}
						/>
					</div>
				</div> */}

				<div className={styles.feature__lablel__container}>
					<p className={styles.feature__label}>Background Color</p>
					<div className={styles.feature__linear__color__body}>
						<p className={styles.color__name}>{this.props.previewSlideColor}</p>
						<ClickOutHandler onClickOut={() => this.setState({ showColorPicker: false })}>
							<div
								className={styles.color__picker__block}
								style={{
									backgroundColor: this.props.previewSlideColor,
									border: "1px solid var(--primary)",
								}}
								onClick={() =>
									this.setState({
										showColorPicker: !this.state.showColorPicker,
									})
								}>
								{this.state.showColorPicker ? (
									<SketchPicker
										color={this.props.previewSlideColor}
										onChange={this.handleColorpickerChange}
										onChangeComplete={this.colorChaneComplete}
										className={styles.color__picker}
									/>
								) : null}
							</div>
						</ClickOutHandler>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		canUndo: state.updateWidget.past.length > 0,
		canRedo: state.updateWidget.future.length > 0,
		photos: state.updateWidget.present.photos,
		previewSlideColor: state.updateWidget.present.previewSlideColor,
		animationSpeed: state.updateWidget.present.animationSpeed,
		bullteState: state.updateWidget.present.bullteState,
		arrowState: state.updateWidget.present.arrowState,
		orienation: state.updateWidget.present.orienation,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUndo: () => dispatch(UndoActionCreators.undo()),
		onRedo: () => dispatch(UndoActionCreators.redo()),
		removePhoto: (photoData) => dispatch(removePhoto(photoData)),
		addPhoto: (photoData) => dispatch(addPhoto(photoData)),
		previewSlideBackgroundChange: (hexColor) => dispatch(previewSlideBackgroundChange(hexColor)),
		animationSpeedChange: (speed) => dispatch(animationSpeedChange(speed)),
		imageOrienationChange: (type) => dispatch(imageOrienationChange(type)),
		onBulletToggle: (state) => dispatch(onBulletToggle(state)),
		onArrowToggle: (state) => dispatch(onArrowToggle(state)),
		photoListChange: (state) => dispatch(photoListChange(state)),
		photoUploadSuccessfully: (photoData) => dispatch(photoUploadSuccessfully(photoData)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
