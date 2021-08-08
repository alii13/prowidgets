import { api } from "../../../utils/api";
import {isLoggedIn,refreshTokenSetup} from "../../../auth"
import notification from "../../notification"


export const FETCH_CAROUSEL_BY_ID = "FETCH_CAROUSEL_BY_ID";
// async function refreshTokenIfNotExpired(){
//     if(isLoggedIn()) return;
//     refreshTokenSetup();
//     return;
// }
export const fetchCarouselData = ({carouselId}) => async (dispatch) => {

        // await refreshTokenIfNotExpired();
        return new Promise((resolve,reject)=>{
             api.post(`/v1/fetch-carousel/`,
            {
                carouselId,
            }).then((res) => {
                 const widgets = res.data[0].widgets;
                console.log(res);
                const carousel = widgets.carousels.find((carousel)=>carousel._id===carouselId);
                resolve(carousel);
                dispatch({
                    type: FETCH_CAROUSEL_BY_ID,
                    payload: carousel,
                });
            }).catch((err)=>{
                reject(true);
                notification('error',err.message)
            })

        })
};
// export const previewSlideBackgroundChange = (hexcode) => (dispatch) => {
// 	dispatch({
// 		type: PREVIEW_SLIDE_BG_CHANGE,
// 		payload: hexcode,
// 	});
// };
