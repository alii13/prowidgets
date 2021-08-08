import { api } from "../../../utils/api";
import notification from "../../notification";
import { isLoggedIn, refreshTokenSetup } from "../../../auth";

export const FETCH_CAROUSELS = "FETCH_CAROUSELS";
export const REQUEST_CAROUSEL_DELETE = "REQUEST_CAROUSEL_DELETE";
export const SUCCESS_CAROUSEL_DELETE = "SUCCESS_CAROUSEL_DELETE";
export const FAILURE_CAROUSEL_DELETE = "FAILURE_CAROUSEL_DELETE";

function refreshTokenIfExpired() {
	if (isLoggedIn()) return;
	refreshTokenSetup();
	return;
}
export const fetchCarouselsData = () => async (dispatch) => {
	// await refreshTokenIfExpired();
	const tokenId = JSON.parse(localStorage.getItem("user")).tokenId;

	api
		.post(
			`/v1/fetch-carousels/`,
			{},
			{
				headers: { Authorization: `Bearer ${tokenId}` },
			}
		)
		.then((res) => {
            if(res.data.doc.length<1){
                dispatch({
                    type: FETCH_CAROUSELS,
                    payload: null,
                });
            }
            else{
                dispatch({
                    type: FETCH_CAROUSELS,
                    payload: res.data.doc[0].widgets,
                });
            }

		})
		.catch((err) => {
			notification("error", "Failed to load live widgets!");
		});
};
export const deleteCarousel = (carouselId) => async (dispatch) => {
	dispatch({
		type: REQUEST_CAROUSEL_DELETE,
	});
	refreshTokenIfExpired();
	const tokenId = JSON.parse(localStorage.getItem("user")).tokenId;
	api
		.post(
			`/v1/delete-carousel/`,
			{
				carouselId,
			},
			{
				headers: { Authorization: `Bearer ${tokenId}` },
			}
		)
		.then((res) => {
			console.log(res);
			dispatch({
				type: SUCCESS_CAROUSEL_DELETE,
				payload: carouselId,
			});
		})
		.catch((err) => {
			notification("error", "Failed to delete carousel!");
			dispatch({
				type: FAILURE_CAROUSEL_DELETE,
			});
		});
};
// export const previewSlideBackgroundChange = (hexcode) => (dispatch) => {
// 	dispatch({
// 		type: PREVIEW_SLIDE_BG_CHANGE,
// 		payload: hexcode,
// 	});
// };
