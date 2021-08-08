import {
    FETCH_CAROUSEL_BY_ID,
} from '../action/previewAction'

const initialState = {
    carousel:{},
    isCarouselFetched:false
}

 function slider (state = initialState, action) {
    switch (action.type) {
        case FETCH_CAROUSEL_BY_ID: {
            const sliderData = action.payload;
            return {
                ...state,
                carousel:{...sliderData},
                isCarouselFetched:true
            }
        }
        default:
            return state
    }
}


export default slider