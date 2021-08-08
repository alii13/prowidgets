import {Simple} from "../editor/sliderscollection"
import {FoldOut} from "../editor/sliderscollection"
import {AutoPlay} from "../editor/sliderscollection"
import {Open} from "../editor/sliderscollection"
import {Fall} from "../editor/sliderscollection"
import {Cube} from "../editor/sliderscollection"
import {ScaleOut} from "../editor/sliderscollection";

/* !!!!!!!!!!!!!---- do not change id of the slides ---------------------------!!!!!!!!!!!!!!!!!!! */

export const slidesData = [
	{
		id: "974f85d2-363b-4871-bdd6-f0f0b11d14b9",
		image: `https://source.unsplash.com/jvWmVOT-3Us/500x450`,
		name: "Simple",
        SlideType:Simple,
	}
	,
	{
		id: "becbdde4-9bac-4340-ae6c-c75dd974b6d0",
		image: `https://source.unsplash.com/-CZERTBlepA/500x450`,
		name: "FoldOut",
        SlideType:FoldOut,
	},
	{
		id: "870136cc-a61c-4098-9ee3-01d1fb9b8591",
		image: `https://source.unsplash.com/BYmE15nyHEg/500x450`,
		name: "AutoPlay",
        SlideType:AutoPlay,
	},
	{
		id: "82d39ee6-7674-4ba0-8d68-0aa293cc2be3",
		image: `https://source.unsplash.com/X79v5N3O4yA/500x450`,
		name: "Open",
        SlideType:Open,
	},
	{
		id: "414a0481-7b29-45cc-aee5-c9b361e5d37a",
		image: `https://source.unsplash.com/eU4pipU_8HA/500x450`,
		name: "Fall",
        SlideType:Fall,
	},
	{
		id: "7f3cddc2-5f9e-4f6c-af6f-d05b5b026150",
		image: `https://source.unsplash.com/YJZzNdMLzF8/500x450`,
		name: "Cube",
        SlideType:Cube,
	},
	{
		id: "0b84cb66-28c0-4f90-912d-14b7c41d4e03",
		image: `https://source.unsplash.com/tskqMngoHSA/500x450`,
		name: "ScaleOut",
        SlideType:ScaleOut,
	},
	// {
	// 	id: uuidv4(),
	// 	image: `https://source.unsplash.com/jvWmVOT-3Us/random/500x450`,
	// 	name: "Simple",
    //     SlideType:Cube,
	// },
	// {
	// 	id: uuidv4(),
	// 	image: `https://source.unsplash.com/jvWmVOT-3Us/random/500x450`,
	// 	name: "Simple",
    //     SlideType:Cube,
	// },
	// {
	// 	id: uuidv4()",
	// 	image: `https://source.unsplash.com/jvWmVOT-3Us/random/200x2500`,
	// 	name: "Simple",
    //     SlideType:Cube,
	// },
	// {
	// 	id: uuidv4()",
	// 	image: `https://source.unsplash.com/jvWmVOT-3Us/random/200x2501`,
	// 	name: "Simple",
    //     SlideType:Cube,
	// },
];

export function findCarouselNameById(id){
	 return slidesData.find((slide)=>slide.id===id).name
}
export function findCarouselIndexById(id){
	 return slidesData.findIndex((slide)=>slide.id===id)
}