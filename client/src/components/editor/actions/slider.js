import { api } from "../../../utils/api";
export const CHANGE_SELECTED_SLIDER = "CHANGE_SELECTED_SLIDER";
export const WIDGET_NAME_CHANGE = "WIDGET_NAME_CHANGE";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const ADD_PHOTO = "ADD_PHOTO";
export const PREVIEW_SLIDE_BG_CHANGE = "PREVIEW_SLIDE_BG_CHANGE";
export const ANIMATION_SPEED_CHANGE = "ANIMATION_SPEED_CHANGE";
export const ORIENATION_CHANGE = "ORIENATION_CHANGE";
export const BULLET_TOGGLE = "BULLET_TOGGLE";
export const ARROW_TOGGLE = "ARROW_TOGGLE";
export const PHOTO_LIST_CHANGE = "PHOTO_LIST_CHANGE";
export const PHOTO_UPLOAD_SUCCESSFULL = "PHOTO_UPLOAD_SUCCESSFULL";
export const PHOTO_UPLOAD_ERROR = "PHOTO_UPLOAD_ERROR";

export const REQUEST_SAVE_CAROUSEL = "REQUEST_SAVE_CAROUSEL";
export const SUCCESS_SAVE_CAROUSEL = "SUCCESS_SAVE_CAROUSEL";
export const ERROR_SAVE_CAROUSEL = "ERROR_SAVE_CAROUSEL";

const networkRequestSuccess = (data, action_creator_constant) => {
	return {
		type: action_creator_constant,
		data,
	};
};

// const selectedWorkout = (workoutId) => {
// 	console.log("In action",workoutId)
// 	return {
// 		type: FETCH_CALENDER_WORKOUT_LIBRARY_REQUEST,
// 		data: workoutId,
// 	};
// };

// export const fetchMetrics = (client_id) => (dispatch) => {

// 	api.get(`/api/metric/get/${client_id}`)
// 		.then((res) => {
// 			if (res.data.success) {
// 				dispatch(networkRequestSuccess(res.data.metrics, FETCH_CALENDER_WORKOUT_LIBRARY_REQUEST))
// 			} else {

// 			}

// 		})
// 		.catch((e) => {
// 			console.error(e,"wrpng messagee");
// 		});
// };

export const changeSelectedSlider = (sliderData) => (dispatch) => {
	dispatch({
		type: CHANGE_SELECTED_SLIDER,
		payload: sliderData,
	});
};
export const changeWidgetName = (text) => (dispatch) => {
	dispatch({
		type: WIDGET_NAME_CHANGE,
		payload: text,
	});
};
export const removePhoto = (photoData) => (dispatch) => {
	dispatch({
		type: REMOVE_PHOTO,
		payload: photoData,
	});
};
export const addPhoto = (photoData) => async (dispatch) => {
	await fetch(`${process.env.REACT_APP_CLOUDINARY_URL}/image/upload`, {
		method: "POST",
		body: photoData,
	})
		.then((res) => res.json())
		.then((data) => console.log(data));

	// dispatch({
	// 	type: ADD_PHOTO,
	// 	payload: photoData,
	// });
};
export const saveCarousel = (carouselData) => async (dispatch) => {
	const googleRes = await JSON.parse(localStorage.getItem("user"));
	dispatch({
		type: REQUEST_SAVE_CAROUSEL,
	});

	return new Promise((resolve, reject) => {
		api
			.post(
				"/v1/create-carousel",
				{
					carouselData,
				},
				{
					headers: { Authorization: `Bearer ${googleRes.tokenId}` },
				}
			)
			.then((res) => {
				console.log(res);
				dispatch({
					type: SUCCESS_SAVE_CAROUSEL,
					payload: { url: carouselData.url },
				});
				resolve(true);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
export const previewSlideBackgroundChange = (hexcode) => (dispatch) => {
	dispatch({
		type: PREVIEW_SLIDE_BG_CHANGE,
		payload: hexcode,
	});
};
export const animationSpeedChange = (speed) => (dispatch) => {
	dispatch({
		type: ANIMATION_SPEED_CHANGE,
		payload: speed,
	});
};
export const imageOrienationChange = (styleType) => (dispatch) => {
	dispatch({
		type: ORIENATION_CHANGE,
		payload: styleType,
	});
};
export const onBulletToggle = (state) => (dispatch) => {
	dispatch({
		type: BULLET_TOGGLE,
		payload: state,
	});
};

export const onArrowToggle = (state) => (dispatch) => {
	dispatch({
		type: ARROW_TOGGLE,
		payload: state,
	});
};

export const photoListChange = (photosData) => (dispatch) => {
	dispatch({
		type: PHOTO_LIST_CHANGE,
		payload: photosData,
	});
};

export const photoUploadSuccessfully = (photoData) => (dispatch) => {
	dispatch({
		type: PHOTO_UPLOAD_SUCCESSFULL,
		payload: photoData,
	});
};

export const photoUploadError = (photoData) => (dispatch) => {
	dispatch({
		type: PHOTO_UPLOAD_ERROR,
		payload: photoData,
	});
};
