import {
    FETCH_CAROUSELS,
    REQUEST_CAROUSEL_DELETE,
    SUCCESS_CAROUSEL_DELETE,
    FAILURE_CAROUSEL_DELETE
} from '../action/home'

const initialState = {
    widgets:null,
    isDeleteLoading:false,
}

 function slider (state = initialState, action) {
    switch (action.type) {
        case FETCH_CAROUSELS: {
            const widgets = action.payload || state.widgets;
            return {
                ...state,
                widgets:widgets,
            }
        }
        case REQUEST_CAROUSEL_DELETE: {
            return {
                ...state,
                isDeleteLoading:true,

            }
        }
        case SUCCESS_CAROUSEL_DELETE: {
            const carouselId = action.payload;
            const widgets = {...state.widgets};
            const carousels = widgets.carousels.filter((carousel)=>carousel._id!==carouselId);
            widgets.carousels = carousels;
            return {
                ...state,
                widgets:widgets,
                isDeleteLoading:false,

            }
        }
        case FAILURE_CAROUSEL_DELETE: {
            return {
                ...state,
                isDeleteLoading:false,

            }
        }
        default:
            return state
    }
}


export default slider