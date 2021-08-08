import { combineReducers } from "redux";
// reducers
import sliders from "../../components/editor/reducers/slider";
import preview from "../../components/preview/reducer/previewReducer";
import home from "../../components/home/reducer/homeReducer";
import updateWidget from "../../components/update-widget/reducers/slider";

export default combineReducers({
	sliders: sliders,
	preview: preview,
	home: home,
	updateWidget: updateWidget,
});
