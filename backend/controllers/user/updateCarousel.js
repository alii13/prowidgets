const User = require("../../model/User");
var CustomError = require("../../error/customError");

exports.updateCarousel = async (req, res) => {
	const { _id } = req.user;
	const carouselData = req.body.carouselData;
	try {
		User.findOneAndUpdate(
			{ _id, "widgets.carousels._id": carouselData._id },
			{
				$set: {
					"widgets.carousels.$.name": carouselData.name,
					"widgets.carousels.$.images": carouselData.images,
					"widgets.carousels.$.bg_color": carouselData.bg_color,
					"widgets.carousels.$.arrows": carouselData.arrows,
					"widgets.carousels.$.bullets": carouselData.bullets,
					"widgets.carousels.$.image_orienation": carouselData.image_orienation,
				},
			},
			{ upsert: true, new: true },
			(err, doc) => {
				if (err) throw err;
				return res.status(200).send(doc);
			}
		);
	} catch (e) {
		console.error(e);
		let error = new CustomError(e.message, 400);
		return res.status(400).send(error);
	}
};
