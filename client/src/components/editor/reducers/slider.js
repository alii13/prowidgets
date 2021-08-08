import {
    CHANGE_SELECTED_SLIDER,
    WIDGET_NAME_CHANGE,
    REMOVE_PHOTO,
    ADD_PHOTO,
    PREVIEW_SLIDE_BG_CHANGE,
    ANIMATION_SPEED_CHANGE,
    ORIENATION_CHANGE,
    BULLET_TOGGLE,
    ARROW_TOGGLE,
    PHOTO_LIST_CHANGE,
    UPDATE_PHOTO_UPLOAD_PROGRESS,
    PHOTO_UPLOAD_SUCCESSFULL,
    REQUEST_SAVE_CAROUSEL,
    SUCCESS_SAVE_CAROUSEL,
    ERROR_SAVE_CAROUSEL
} from '../actions/slider'
import undoable from 'redux-undo'
import {slidesData} from "../../carousels"
import {fileList} from "../photos"


const localStoragePhotos = localStorage.getItem("photos")?(JSON.parse(localStorage.getItem("photos"))):[];

function setToLocalStorage(photoData){
    if(localStorage.getItem("photos")){
        let photos = JSON.parse(localStorage.getItem("photos"));
        photos = [...photos,photoData];
        localStorage.setItem('photos', JSON.stringify(photos));

    }else{
        localStorage.setItem('photos', JSON.stringify([photoData]));
    }
}
function removeFromLocalStorage(photoData){
    if(localStorage.getItem("photos")){
        let photos = JSON.parse(localStorage.getItem("photos"));
        const index = photos.find((photo)=>photo.uid===photoData.uid);
        if(index){
            photos.splice(index,1);
        }
        localStorage.setItem('photos', JSON.stringify(photos));
    }
}

const initialState = {
    selectedSlider:slidesData[0],
    widgetName:'Carousel 1',
    photos:[...fileList,...localStoragePhotos],
    previewSlideColor:"#F3F3F3",
    animationSpeed:300,
    autoPlayDuration:2500,
    bullteState:true,
    arrowState:true,
    orienation:"cover",
    saveCarouselLoading:false,
    isCarouselSaved:false,
    generatedLink:`${process.env.REACT_APP_DOMAIN}save-carousel-first`,
}

 function slider (state = initialState, action) {

    switch (action.type) {
        case CHANGE_SELECTED_SLIDER: {
            const sliderData = action.payload;
            return {
                ...state,
                selectedSlider:{...sliderData},
            }
        }
        case WIDGET_NAME_CHANGE: {
            const widgetName = action.payload;
            return {
                ...state,
                widgetName:widgetName,
            }
        }
        case REMOVE_PHOTO: {
            const photoData = action.payload;
            const photos = [...state.photos]
            removeFromLocalStorage(photoData);
            const index = photos.find((photo)=>photo.uid===photoData.uid);
            photos.splice(index,1);
            return {
                ...state,
                photos:photos,
            }
        }
        case ADD_PHOTO: {
            const photoData = action.payload;
            const photos = [...state.photos]
            photos.push(photoData)
            return {
                ...state,
                photos:photos,
            }
        }
        case PHOTO_LIST_CHANGE: {
            const photosData = action.payload;
            const photos = [...photosData]
            return {
                ...state,
                photos:photos,
            }
        }
        case PHOTO_UPLOAD_SUCCESSFULL: {
            const photoDataResponse = action.payload;
            const photoURL = photoDataResponse.url;
            const photoId = photoDataResponse.asset_id;
            const photos = [...state.photos];
            const uploadingPhotoData = photos[photos.length-1];
            const {name,status,uid,percent} = uploadingPhotoData;
            photos.splice(photos.length-1,1);
            photos.push({name,status,uid,url:photoURL,photoId:photoId,percent})
            //local storage
            setToLocalStorage({name,status,uid,url:photoURL,photoId:photoId})

            return {
                ...state,
                photos:photos,
            }
        }
        case PREVIEW_SLIDE_BG_CHANGE: {
            const  hexColor = action.payload;
            return {
                ...state,
                previewSlideColor:hexColor,
            }
        }
        case ANIMATION_SPEED_CHANGE: {
            const  speed = action.payload;
            return {
                ...state,
                animationSpeed:speed,
            }
        }
        case ORIENATION_CHANGE: {
            const  type = action.payload;
            return {
                ...state,
                orienation:type,
            }
        }
        case BULLET_TOGGLE: {
            const  bullteState = action.payload;
            return {
                ...state,
                bullteState:bullteState,
            }
        }
        case ARROW_TOGGLE: {
            const  arrowState = action.payload;
            return {
                ...state,
                arrowState:arrowState,
            }
        }
        case REQUEST_SAVE_CAROUSEL: {
            return {
                ...state,
                saveCarouselLoading:true,
            }
        }
        case SUCCESS_SAVE_CAROUSEL: {
            const  {url} = action.payload;
            return {
                ...state,
                saveCarouselLoading:false,
                widgetName:'',
                isCarouselSaved:true,
                generatedLink:url,

            }
        }
        case ERROR_SAVE_CAROUSEL: {

            return {
                ...state,
                saveCarouselLoading:false,
            }
        }

        default:
            return state
    }
}

const undobaleSlider = undoable(slider)

export default undobaleSlider